import { UserActionType } from './UserActionType.enum';
import { PubNubApiStatus } from '../../foundations/PubNubApi';
import { ObjectsCustom, AnyCustom } from '../../foundations/ObjectsCustom';
import { ActionMeta } from '../../foundations/ActionMeta';
export interface User<CustomSpaceFields extends ObjectsCustom = AnyCustom> {
    id: string;
    name: string;
    externalId?: string;
    profileUrl?: string;
    email?: string;
    custom?: CustomSpaceFields;
    created?: string;
    updated?: string;
    eTag?: string;
}
export interface UserPage {
    next?: string;
    prev?: string;
}
export interface UserRequestOptions {
    limit?: number;
    page?: UserPage;
    include?: {
        totalCount?: boolean;
        customFields?: boolean;
    };
}
export interface UserEventMessage<ReceivedUser extends User<ObjectsCustom>> {
    data: ReceivedUser;
    event: string;
    type: string;
}
export declare type UserListenerPayload<ReceivedUser extends User<ObjectsCustom>> = {
    message: UserEventMessage<ReceivedUser>;
};
export declare type FetchUsersRequest = UserRequestOptions;
export interface FetchUsersResponse<ReceivedUser extends User<ObjectsCustom>> {
    status: string;
    data: ReceivedUser[];
}
export interface FetchUsersError {
    request: FetchUsersRequest;
    status: PubNubApiStatus;
}
export interface FetchUsersSuccess<ReceivedUser extends User<ObjectsCustom>> {
    request: FetchUsersRequest;
    response: FetchUsersResponse<ReceivedUser>;
    status: PubNubApiStatus;
}
export interface UserRequest extends User<ObjectsCustom>, UserRequestOptions {
}
export interface UserSuccess<ReceivedUser extends User<ObjectsCustom>> {
    request: UserRequest;
    response: UserResponse<ReceivedUser>;
    status: PubNubApiStatus;
}
export interface UserResponse<ReceivedUser extends User<ObjectsCustom>> {
    status: string;
    data: ReceivedUser;
}
export interface UserError {
    request: UserRequest;
    status: PubNubApiStatus;
}
export interface FetchUserByIdRequest extends UserRequestOptions {
    userId: string;
}
export interface FetchUserByIdSuccess<ReceivedUser extends User<ObjectsCustom>> {
    request: FetchUserByIdRequest;
    response: UserResponse<ReceivedUser>;
    status: PubNubApiStatus;
}
export interface FetchUserByIdError {
    request: FetchUserByIdRequest;
    status: PubNubApiStatus;
}
export interface DeleteUserRequest {
    userId: string;
}
export interface DeleteUserResponse {
    status: number;
    request: DeleteUserRequest;
}
export interface DeleteUserSuccess {
    request: DeleteUserRequest;
    response: DeleteUserResponse;
    status: PubNubApiStatus;
}
export interface DeleteUserError {
    request: DeleteUserRequest;
    status: PubNubApiStatus;
}
export interface FetchingUsersAction<Meta extends ActionMeta> {
    type: typeof UserActionType.FETCHING_USERS;
    payload: FetchUsersRequest;
    meta?: Meta;
}
export interface UsersRetrievedAction<ReceivedUser extends User<ObjectsCustom>, Meta extends ActionMeta> {
    type: typeof UserActionType.USERS_RETRIEVED;
    payload: FetchUsersSuccess<ReceivedUser>;
    meta?: Meta;
}
export interface ErrorFetchingUsersAction<Meta extends ActionMeta> {
    type: typeof UserActionType.ERROR_FETCHING_USERS;
    payload: FetchUsersError;
    meta?: Meta;
    error: true;
}
export interface FetchingUserByIdAction<Meta extends ActionMeta> {
    type: typeof UserActionType.FETCHING_USER_BY_ID;
    payload: FetchUserByIdRequest;
    meta?: Meta;
}
export interface UserRetrievedAction<ReceivedUser extends User<ObjectsCustom>, Meta extends ActionMeta> {
    type: typeof UserActionType.USER_RETRIEVED;
    payload: FetchUserByIdSuccess<ReceivedUser>;
    meta?: Meta;
}
export interface ErrorFetchingUserByIdAction<Meta extends ActionMeta> {
    type: typeof UserActionType.ERROR_FETCHING_USER_BY_ID;
    payload: FetchUserByIdError;
    meta?: Meta;
    error: true;
}
export interface CreatingUserAction<Meta extends ActionMeta> {
    type: typeof UserActionType.CREATING_USER;
    payload: UserRequest;
    meta?: Meta;
}
export interface UserCreatedAction<ReceivedUser extends User<ObjectsCustom>, Meta extends ActionMeta> {
    type: typeof UserActionType.USER_CREATED;
    payload: UserSuccess<ReceivedUser>;
    meta?: Meta;
}
export interface ErrorCreatingUserAction<Meta extends ActionMeta> {
    type: typeof UserActionType.ERROR_CREATING_USER;
    payload: UserError;
    meta?: Meta;
    error: true;
}
export interface UpdatingUserAction<Meta extends ActionMeta> {
    type: typeof UserActionType.UPDATING_USER;
    payload: UserRequest;
    meta?: Meta;
}
export interface UserUpdatedAction<ReceivedUser extends User<ObjectsCustom>, Meta extends ActionMeta> {
    type: typeof UserActionType.USER_UPDATED;
    payload: UserSuccess<ReceivedUser>;
    meta?: Meta;
}
export interface ErrorUpdatingUserAction<Meta extends ActionMeta> {
    type: typeof UserActionType.ERROR_UPDATING_USER;
    payload: UserError;
    meta?: Meta;
    error: true;
}
export interface DeletingUserAction<Meta extends ActionMeta> {
    type: typeof UserActionType.DELETING_USER;
    payload: DeleteUserRequest;
    meta?: Meta;
}
export interface UserDeletedAction<Meta extends ActionMeta> {
    type: typeof UserActionType.USER_DELETED;
    payload: DeleteUserSuccess;
    meta?: Meta;
}
export interface ErrorDeletingUserAction<Meta extends ActionMeta> {
    type: typeof UserActionType.ERROR_DELETING_USER;
    payload: DeleteUserError;
    meta?: Meta;
    error: true;
}
export interface UserUpdatedEventAction<ReceivedUser extends User<ObjectsCustom>> {
    type: typeof UserActionType.USER_UPDATED_EVENT;
    payload: UserEventMessage<ReceivedUser>;
}
export interface UserDeletedEventAction<ReceivedUser extends User<ObjectsCustom>> {
    type: typeof UserActionType.USER_DELETED_EVENT;
    payload: UserEventMessage<ReceivedUser>;
}
export declare type UserActions<ReceivedUser extends User<ObjectsCustom>, Meta extends ActionMeta> = FetchingUsersAction<Meta> | UsersRetrievedAction<ReceivedUser, Meta> | ErrorFetchingUsersAction<Meta> | FetchingUserByIdAction<Meta> | UserRetrievedAction<ReceivedUser, Meta> | ErrorFetchingUserByIdAction<Meta> | CreatingUserAction<Meta> | UserCreatedAction<ReceivedUser, Meta> | ErrorCreatingUserAction<Meta> | UpdatingUserAction<Meta> | UserUpdatedAction<ReceivedUser, Meta> | ErrorUpdatingUserAction<Meta> | DeletingUserAction<Meta> | UserDeletedAction<Meta> | ErrorDeletingUserAction<Meta>;
export declare type UserListenerActions<ReceivedUser extends User<ObjectsCustom>> = UserUpdatedEventAction<ReceivedUser> | UserDeletedEventAction<ReceivedUser>;
