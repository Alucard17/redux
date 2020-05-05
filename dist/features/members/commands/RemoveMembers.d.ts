import { Dispatch } from 'redux';
import { RemovingMembersAction, MembersRemovedAction, ErrorRemovingMembersAction, MembersError, MembersSuccess, Members, MembersRequest } from '../MembersActions';
import { MembersActionType } from '../MembersActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
import { Space } from 'features/space/SpaceActions';
export declare const removingMembers: <MembersType extends Members<object, Space<object>>, Meta extends ActionMeta>(payload: MembersRequest<MembersType>, meta?: Meta | undefined) => RemovingMembersAction<MembersType, Meta>;
export declare const membersRemoved: <MembersType extends Members<object, Space<object>>, Meta extends ActionMeta>(payload: MembersSuccess<MembersType>, meta?: Meta | undefined) => MembersRemovedAction<MembersType, Meta>;
export declare const errorRemovingMembers: <MembersType extends Members<object, Space<object>>, Meta extends ActionMeta>(payload: MembersError<MembersType>, meta?: Meta | undefined) => ErrorRemovingMembersAction<MembersType, Meta>;
export declare const removeMembers: <MembersType extends Members<object, Space<object>>, Meta extends ActionMeta = AnyMeta>(request: MembersRequest<MembersType>, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: MembersActionType;
};
