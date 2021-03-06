import { Dispatch } from 'redux';
import {
  MembersRetrievedAction,
  ErrorFetchingMembersAction,
  FetchingMembersAction,
  FetchMembersError,
  FetchMembersSuccess,
  FetchMembersRequest,
  Members,
  MembersResponse,
} from '../MembersActions';
import { MembersActionType } from '../MembersActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
import { ObjectsCustom } from 'foundations/ObjectsCustom';
import { Space } from 'features/space/SpaceActions';

// tag::RDX-function-member-fetch[]
export const fetchingMembers = <Meta extends ActionMeta>(
  payload: FetchMembersRequest,
  meta?: Meta
): FetchingMembersAction<Meta> => ({
  type: MembersActionType.FETCHING_MEMBERS,
  payload,
  meta,
});
// end::RDX-function-member-fetch[]

// tag::RDX-function-member-fetch-success[]
export const membersRetrieved = <
  MembersType extends Members<ObjectsCustom, Space<ObjectsCustom>>,
  Meta extends ActionMeta
>(
  payload: FetchMembersSuccess<MembersType>,
  meta?: Meta
): MembersRetrievedAction<MembersType, Meta> => ({
  type: MembersActionType.MEMBERS_RETRIEVED,
  payload,
  meta,
});
// end::RDX-function-member-fetch-success[]

// tag::RDX-function-member-fetch-error[]
export const errorFetchingMembers = <Meta extends ActionMeta>(
  payload: FetchMembersError,
  meta?: Meta
): ErrorFetchingMembersAction<Meta> => ({
  type: MembersActionType.ERROR_FETCHING_MEMBERS,
  payload,
  meta,
  error: true,
});
// end::RDX-function-member-fetch-error[]

// tag::RDX-command-member-fetch[]
export const fetchMembers = <
  MembersType extends Members<ObjectsCustom, Space<ObjectsCustom>>,
  Meta extends ActionMeta = AnyMeta
>(
  request: FetchMembersRequest,
  meta?: Meta
) => {
  const thunkFunction = (
    dispatch: Dispatch,
    _getState: any,
    { pubnub }: PubnubThunkContext
  ) =>
    new Promise<void>((resolve, reject) => {
      dispatch(fetchingMembers<Meta>(request, meta));

      pubnub.api.getMembers(
        {
          ...request,
        },
        (status, response) => {
          if (status.error) {
            const payload = {
              request,
              status,
            };

            dispatch(errorFetchingMembers<Meta>(payload, meta));
            reject(payload);
          } else {
            const payload = {
              request,
              response: response as MembersResponse<MembersType>,
              status,
            };

            dispatch(membersRetrieved<MembersType, Meta>(payload, meta));
            resolve();
          }
        }
      );
    });

  thunkFunction.type = MembersActionType.FETCH_MEMBERS_COMMAND;

  return thunkFunction;
};
// end::RDX-command-member-fetch[]
