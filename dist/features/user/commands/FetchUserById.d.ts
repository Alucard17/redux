import { Dispatch } from 'redux';
import { UserActionType } from '../UserActionType.enum';
import { ErrorFetchingUserByIdAction, UserRetrievedAction, FetchingUserByIdAction, FetchUserByIdError, FetchUserByIdSuccess, FetchUserByIdRequest, User } from '../UserActions';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
export declare const fetchingUserById: <Meta extends ActionMeta>(payload: FetchUserByIdRequest, meta?: Meta | undefined) => FetchingUserByIdAction<Meta>;
export declare const userRetrieved: <UserType extends User<object>, Meta extends ActionMeta>(payload: FetchUserByIdSuccess<UserType>, meta?: Meta | undefined) => UserRetrievedAction<UserType, Meta>;
export declare const errorFetchingUserById: <Meta extends ActionMeta>(payload: FetchUserByIdError, meta?: Meta | undefined) => ErrorFetchingUserByIdAction<Meta>;
export declare const fetchUserById: <UserType extends User<object>, Meta extends ActionMeta = AnyMeta>(request: FetchUserByIdRequest, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: UserActionType;
};
