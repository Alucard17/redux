import { Dispatch } from 'redux';
import { ErrorCreatingUserAction, UserCreatedAction, CreatingUserAction, UserSuccess, UserError, UserRequest, User } from '../UserActions';
import { UserActionType } from '../UserActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
export declare const creatingUser: <Meta extends ActionMeta>(payload: UserRequest, meta?: Meta | undefined) => CreatingUserAction<Meta>;
export declare const userCreated: <UserType extends User<object>, Meta extends ActionMeta>(payload: UserSuccess<UserType>, meta?: Meta | undefined) => UserCreatedAction<UserType, Meta>;
export declare const errorCreatingUser: <Meta extends ActionMeta>(payload: UserError, meta?: Meta | undefined) => ErrorCreatingUserAction<Meta>;
export declare const createUser: <UserType extends User<object>, Meta extends ActionMeta = AnyMeta>(request: UserRequest, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: UserActionType;
};
