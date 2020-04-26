import { Dispatch } from 'redux';
import { UserDeletedAction, DeletingUserAction, ErrorDeletingUserAction, DeleteUserRequest, DeleteUserError, DeleteUserSuccess } from '../UserActions';
import { UserActionType } from '../UserActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
export declare const deletingUser: <Meta extends ActionMeta>(payload: DeleteUserRequest, meta?: Meta | undefined) => DeletingUserAction<Meta>;
export declare const userDeleted: <Meta extends ActionMeta>(payload: DeleteUserSuccess, meta?: Meta | undefined) => UserDeletedAction<Meta>;
export declare const errorDeletingUser: <Meta extends ActionMeta>(payload: DeleteUserError, meta?: Meta | undefined) => ErrorDeletingUserAction<Meta>;
export declare const deleteUser: <Meta extends ActionMeta = AnyMeta>(request: DeleteUserRequest, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: UserActionType;
};
