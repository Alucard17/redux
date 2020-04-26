import { Dispatch } from 'redux';
import { FetchingMembershipAction, FetchMembershipRequest, MembershipRetrievedAction, FetchMembershipSuccess, ErrorFetchingMembershipAction, FetchMembershipError, Membership } from '../MembershipActions';
import { MembershipActionType } from '../MembershipActionType.enum';
import { Space } from '../../../features/space/SpaceActions';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta } from '../../../foundations/ActionMeta';
export declare const fetchingMembership: <Meta extends ActionMeta>(payload: FetchMembershipRequest, meta?: Meta | undefined) => FetchingMembershipAction<Meta>;
export declare const membershipRetrieved: <MembershipType extends Membership<object, Space<object>>, Meta extends ActionMeta>(payload: FetchMembershipSuccess<MembershipType>, meta?: Meta | undefined) => MembershipRetrievedAction<MembershipType, Meta>;
export declare const errorFetchingMembership: <Meta extends ActionMeta>(payload: FetchMembershipError, meta?: Meta | undefined) => ErrorFetchingMembershipAction<Meta>;
export declare const fetchMemberships: <MembershipType extends Membership<object, Space<object>>, Meta extends ActionMeta>(request: FetchMembershipRequest, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: MembershipActionType;
};
