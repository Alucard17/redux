import { Dispatch } from 'redux';
import { UpdatingUserAction, UserUpdatedAction, ErrorUpdatingUserAction, UserError, UserSuccess, UserRequest, User } from '../UserActions';
import { UserActionType } from '../UserActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
export declare const updatingUser: <Meta extends ActionMeta>(payload: UserRequest, meta?: Meta | undefined) => UpdatingUserAction<Meta>;
export declare const userUpdated: <UserType extends User<object>, Meta extends ActionMeta>(payload: UserSuccess<UserType>, meta?: Meta | undefined) => UserUpdatedAction<UserType, Meta>;
export declare const errorUpdatingUser: <Meta extends ActionMeta>(payload: UserError, meta?: Meta | undefined) => ErrorUpdatingUserAction<Meta>;
export declare const updateUser: <UserType extends User<object>, Meta extends ActionMeta = AnyMeta>(request: UserRequest, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: UserActionType;
};
