import { Dispatch } from 'redux';
import { JoiningSpacesAction, MembershipRequest, Membership, SpacesJoinedAction, MembershipSuccess, ErrorJoiningSpacesAction, MembershipError } from '../MembershipActions';
import { MembershipActionType } from '../MembershipActionType.enum';
import { Space } from '../../../features/space/SpaceActions';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
export declare const joiningSpaces: <MembershipType extends Membership<object, Space<object>>, Meta extends ActionMeta>(payload: MembershipRequest<MembershipType>, meta?: Meta | undefined) => JoiningSpacesAction<MembershipType, Meta>;
export declare const spacesJoined: <MembershipType extends Membership<object, Space<object>>, Meta extends ActionMeta>(payload: MembershipSuccess<MembershipType>, meta?: Meta | undefined) => SpacesJoinedAction<MembershipType, Meta>;
export declare const errorJoiningSpaces: <MembershipType extends Membership<object, Space<object>>, Meta extends ActionMeta>(payload: MembershipError<MembershipType>, meta?: Meta | undefined) => ErrorJoiningSpacesAction<MembershipType, Meta>;
export declare const joinSpaces: <MembershipType extends Membership<object, Space<object>>, Meta extends ActionMeta = AnyMeta>(request: MembershipRequest<MembershipType>, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: MembershipActionType;
};
