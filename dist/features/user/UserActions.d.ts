import Pubnub from 'pubnub';
import { UserActionType } from './UserActionType.enum';
import { ActionMeta } from '../../foundations/ActionMeta';
import { ObjectsCustom, AnyCustom } from 'foundations/ObjectsCustom';
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
export interface UserRequest extends User<ObjectsCustom>, UserRequestOptions {
}
export interface UserResponse<ReceivedUser extends User<ObjectsCustom>> {
    status: number;
    data: ReceivedUser;
}
export interface FetchUserByIdRequest extends UserRequestOptions {
    userId: string;
}
export declare type FetchUsersRequest = UserRequestOptions;
export interface FetchUsersResponse<ReceivedUser extends User<ObjectsCustom>> {
    status: number;
    data: ReceivedUser[];
}
export interface UserEventMessage<ReceivedUser extends User<ObjectsCustom>> {
    data: ReceivedUser;
    event: string;
    type: string;
}
export declare type UserListenerPayload<ReceivedUser extends User<ObjectsCustom>> = {
    message: UserEventMessage<ReceivedUser>;
};
export interface FetchUsersSuccess<ReceivedUser extends User<ObjectsCustom>> {
    request: FetchUsersRequest;
    response: FetchUsersResponse<ReceivedUser>;
    status: Pubnub.PubnubStatus;
}
export interface FetchUsersError {
    request: FetchUsersRequest;
    status: Pubnub.PubnubStatus;
}
export interface UserSuccess<ReceivedUser extends User<ObjectsCustom>> {
    request: UserRequest;
    response: UserResponse<ReceivedUser>;
    status: Pubnub.PubnubStatus;
}
export interface UserError {
    request: UserRequest;
    status: Pubnub.PubnubStatus;
}
export interface FetchUserByIdSuccess<ReceivedUser extends User<ObjectsCustom>> {
    request: FetchUserByIdRequest;
    response: UserResponse<ReceivedUser>;
    status: Pubnub.PubnubStatus;
}
export interface FetchUserByIdError {
    request: FetchUserByIdRequest;
    status: Pubnub.PubnubStatus;
}
export interface DeleteUserRequest {
    userId: string;
}
export interface DeleteUserSuccess {
    request: DeleteUserRequest;
    status: Pubnub.PubnubStatus;
}
export interface DeleteUserError {
    request: DeleteUserRequest;
    status: Pubnub.PubnubStatus;
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
