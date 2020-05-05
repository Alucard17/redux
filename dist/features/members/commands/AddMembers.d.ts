import { Dispatch } from 'redux';
import { AddingMembersAction, MembersAddedAction, ErrorAddingMembersAction, MembersError, MembersSuccess, Members, MembersRequest } from '../MembersActions';
import { MembersActionType } from '../MembersActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
import { Space } from 'features/space/SpaceActions';
export declare const addingMembers: <MembersType extends Members<object, Space<object>>, Meta extends ActionMeta>(payload: MembersRequest<MembersType>, meta?: Meta | undefined) => AddingMembersAction<MembersType, Meta>;
export declare const membersAdded: <MembersType extends Members<object, Space<object>>, Meta extends ActionMeta>(payload: MembersSuccess<MembersType>, meta?: Meta | undefined) => MembersAddedAction<MembersType, Meta>;
export declare const errorAddingMembers: <MembersType extends Members<object, Space<object>>, Meta extends ActionMeta>(payload: MembersError<MembersType>, meta?: Meta | undefined) => ErrorAddingMembersAction<MembersType, Meta>;
export declare const addMembers: <MembersType extends Members<object, Space<object>>, Meta extends ActionMeta = AnyMeta>(request: MembersRequest<MembersType>, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: MembersActionType;
};
