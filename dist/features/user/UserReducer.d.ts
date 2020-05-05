import { AnyAction } from 'redux';
import { UserActions, UserListenerActions, User } from './UserActions';
import { MembersActions, Members } from '../../features/members/MembersActions';
import { MembershipActions, Membership } from '../../features/membership/MembershipActions';
import { AnyMeta } from '../../foundations/ActionMeta';
import { ObjectsCustom } from 'foundations/ObjectsCustom';
import { Space } from 'features/space/SpaceActions';
export interface UsersByIdState<ReceivedUser extends User<ObjectsCustom>> {
    byId: {
        [userId: string]: ReceivedUser;
    };
}
declare type UserReducerActions<StoredUser extends User<ObjectsCustom>> = UserActions<StoredUser, AnyMeta> | UserListenerActions<StoredUser> | MembersActions<Members<ObjectsCustom, Space>, AnyMeta> | MembershipActions<Membership<ObjectsCustom, Space>, AnyMeta>;
export declare type UserReducer<StoredUser extends User<ObjectsCustom>, UserAction extends AnyAction> = (state: UsersByIdState<StoredUser> | undefined, action: UserAction) => UsersByIdState<StoredUser>;
export declare const createUserReducer: <StoredUser extends User<object> = User<import("../../foundations/ObjectsCustom").AnyCustom>, UserAction extends AnyAction = UserReducerActions<StoredUser>>() => UserReducer<StoredUser, UserAction>;
export {};
