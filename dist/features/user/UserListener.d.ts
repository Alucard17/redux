import Pubnub from 'pubnub';
import { Dispatch } from 'redux';
import { UserUpdatedEventAction, UserDeletedEventAction, UserListenerActions, User, UserEventMessage } from './UserActions';
export declare const userUpdated: <UserType extends User<object>>(payload: UserEventMessage<UserType>) => UserUpdatedEventAction<UserType>;
export declare const userDeleted: <UserType extends User<object>>(payload: UserEventMessage<UserType>) => UserDeletedEventAction<UserType>;
export declare const createUserListener: <UserType extends User<object> = User<import("../../foundations/ObjectsCustom").AnyCustom>>(dispatch: Dispatch<UserListenerActions<UserType>>) => {
    user: (payload: Pubnub.UserEvent) => void;
};
