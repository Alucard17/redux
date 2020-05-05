import { Dispatch } from 'redux';
import { FetchingMembershipAction, MembershipRetrievedAction, FetchMembershipSuccess, ErrorFetchingMembershipAction, FetchMembershipError, FetchMembershipRequest, Membership } from '../MembershipActions';
import { MembershipActionType } from '../MembershipActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
import { Space } from 'features/space/SpaceActions';
export declare const fetchingMembership: <Meta extends ActionMeta>(payload: FetchMembershipRequest, meta?: Meta | undefined) => FetchingMembershipAction<Meta>;
export declare const membershipRetrieved: <MembershipType extends Membership<object, Space<object>>, Meta extends ActionMeta>(payload: FetchMembershipSuccess<MembershipType>, meta?: Meta | undefined) => MembershipRetrievedAction<MembershipType, Meta>;
export declare const errorFetchingMembership: <Meta extends ActionMeta>(payload: FetchMembershipError, meta?: Meta | undefined) => ErrorFetchingMembershipAction<Meta>;
export declare const fetchMemberships: <MembershipType extends Membership<object, Space<object>>, Meta extends ActionMeta = AnyMeta>(request: FetchMembershipRequest, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: MembershipActionType;
};
