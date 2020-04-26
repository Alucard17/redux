import { Dispatch } from 'redux';
import { UpdatingMembersAction, MembersRequest, Members, MembersUpdatedAction, ErrorUpdatingMembersAction, MembersError, MembersSuccess } from '../MembersActions';
import { MembersActionType } from '../MembersActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
import { Space } from '../../space/SpaceActions';
export declare const updatingMembers: <MembersType extends Members<object, Space<object>>, Meta extends ActionMeta>(payload: MembersRequest<MembersType>, meta?: Meta | undefined) => UpdatingMembersAction<MembersType, Meta>;
export declare const membersUpdated: <MembersType extends Members<object, Space<object>>, Meta extends ActionMeta>(payload: MembersSuccess<MembersType>, meta?: Meta | undefined) => MembersUpdatedAction<MembersType, Meta>;
export declare const errorUpdatingMembers: <MembersType extends Members<object, Space<object>>, Meta extends ActionMeta>(payload: MembersError<MembersType>, meta?: Meta | undefined) => ErrorUpdatingMembersAction<MembersType, Meta>;
export declare const updateMembers: <MembersType extends Members<object, Space<object>>, Meta extends ActionMeta = AnyMeta>(request: MembersRequest<MembersType>, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: MembersActionType;
};
