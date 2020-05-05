import { Dispatch } from 'redux';
import { LeavingSpacesAction, SpacesLeftAction, MembershipSuccess, ErrorLeavingSpacesAction, MembershipError, Membership, MembershipRequest } from '../MembershipActions';
import { MembershipActionType } from '../MembershipActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
import { Space } from 'features/space/SpaceActions';
export declare const leavingSpaces: <MembershipType extends Membership<object, Space<object>>, Meta extends ActionMeta>(payload: MembershipRequest<MembershipType>, meta?: Meta | undefined) => LeavingSpacesAction<MembershipType, Meta>;
export declare const spacesLeft: <MembershipType extends Membership<object, Space<object>>, Meta extends ActionMeta>(payload: MembershipSuccess<MembershipType>, meta?: Meta | undefined) => SpacesLeftAction<MembershipType, Meta>;
export declare const errorLeavingSpaces: <MembershipType extends Membership<object, Space<object>>, Meta extends ActionMeta>(payload: MembershipError<MembershipType>, meta?: Meta | undefined) => ErrorLeavingSpacesAction<MembershipType, Meta>;
export declare const leaveSpaces: <MembershipType extends Membership<object, Space<object>>, Meta extends ActionMeta = AnyMeta>(request: MembershipRequest<MembershipType>, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: MembershipActionType;
};
