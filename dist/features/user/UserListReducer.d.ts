import { UsersRetrievedAction, User } from './UserActions';
import { ActionMeta, AnyMeta } from '../../foundations/ActionMeta';
interface UserListState {
    userIds: string[];
}
export declare const createUserListReducer: <UserType extends User<object> = User<import("../../foundations/ObjectsCustom").AnyCustom>, Meta extends ActionMeta = AnyMeta>() => (state: UserListState | undefined, action: UsersRetrievedAction<UserType, Meta>) => UserListState;
export {};
