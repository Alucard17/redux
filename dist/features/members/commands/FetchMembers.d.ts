import { Dispatch } from 'redux';
import { MembersRetrievedAction, ErrorFetchingMembersAction, FetchingMembersAction, FetchMembersRequest, FetchMembersError, FetchMembersSuccess, Members } from '../MembersActions';
import { MembersActionType } from '../MembersActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
import { Space } from '../../space/SpaceActions';
export declare const fetchingMembers: <Meta extends ActionMeta>(payload: FetchMembersRequest, meta?: Meta | undefined) => FetchingMembersAction<Meta>;
export declare const membersRetrieved: <MembersType extends Members<object, Space<object>>, Meta extends ActionMeta>(payload: FetchMembersSuccess<MembersType>, meta?: Meta | undefined) => MembersRetrievedAction<MembersType, Meta>;
export declare const errorFetchingMembers: <Meta extends ActionMeta>(payload: FetchMembersError, meta?: Meta | undefined) => ErrorFetchingMembersAction<Meta>;
export declare const fetchMembers: <MembersType extends Members<object, Space<object>>, Meta extends ActionMeta = AnyMeta>(request: FetchMembersRequest, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: MembersActionType;
};
