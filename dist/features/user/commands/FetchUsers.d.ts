import { Dispatch } from 'redux';
import { ErrorFetchingUsersAction, UsersRetrievedAction, FetchingUsersAction, FetchUsersError, User, FetchUsersSuccess } from '../UserActions';
import { UserActionType } from '../UserActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
export declare const fetchingUsers: <Meta extends ActionMeta>(payload: import("../UserActions").UserRequestOptions, meta?: Meta | undefined) => FetchingUsersAction<Meta>;
export declare const usersRetrieved: <UserType extends User<object>, Meta extends ActionMeta>(payload: FetchUsersSuccess<UserType>, meta?: Meta | undefined) => UsersRetrievedAction<UserType, Meta>;
export declare const errorFetchingUsers: <Meta extends ActionMeta = AnyMeta>(payload: FetchUsersError, meta?: Meta | undefined) => ErrorFetchingUsersAction<Meta>;
export declare const fetchUsers: <UserType extends User<object>, Meta extends ActionMeta = AnyMeta>(request?: import("../UserActions").UserRequestOptions, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: UserActionType;
};
