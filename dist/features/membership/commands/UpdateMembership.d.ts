import { Dispatch } from 'redux';
import { UpdatingMembershipAction, MembershipRequest, MembershipUpdatedAction, MembershipSuccess, ErrorUpdatingMembershipAction, MembershipError, Membership } from '../MembershipActions';
import { MembershipActionType } from '../MembershipActionType.enum';
import { Space } from '../../../features/space/SpaceActions';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
export declare const updatingMemberships: <MembershipType extends Membership<object, Space<object>>, Meta extends ActionMeta>(payload: MembershipRequest<MembershipType>, meta?: Meta | undefined) => UpdatingMembershipAction<MembershipType, Meta>;
export declare const membershipUpdated: <MembershipType extends Membership<object, Space<object>>, Meta extends ActionMeta>(payload: MembershipSuccess<MembershipType>, meta?: Meta | undefined) => MembershipUpdatedAction<MembershipType, Meta>;
export declare const errorUpdatingMembership: <MembershipType extends Membership<object, Space<object>>, Meta extends ActionMeta>(payload: MembershipError<MembershipType>, meta?: Meta | undefined) => ErrorUpdatingMembershipAction<MembershipType, Meta>;
export declare const updateMembership: <MembershipType extends Membership<object, Space<object>>, Meta extends ActionMeta = AnyMeta>(request: MembershipRequest<MembershipType>, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: MembershipActionType;
};
