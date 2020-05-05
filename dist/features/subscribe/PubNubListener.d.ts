import { Dispatch } from 'redux';
import { NetworkStatusListenerActions } from '../networkStatus/NetworkStatusListener';
import { SubscriptionStatusListenerActions } from '../subscriptionStatus/SubscriptionStatusListener';
import { ErrorStatusListenerActions } from '../errorStatus/ErrorStatusListener';
import { Message, MessageReceivedAction } from '../../features/message/MessageActions';
import { UserListenerActions, User } from '../../features/user/UserActions';
import { SpaceListenerActions, Space } from '../../features/space/SpaceActions';
import { PresenceListenerActions } from '../../features/presence/PresenceActions';
import { SignalReceivedAction, Signal } from '../../features/signal/SignalActions';
import { MembershipListenerActions, Membership } from '../../features/membership/MembershipActions';
export declare type ListenerActions<MessageType extends Message, SignalType extends Signal, UserType extends User, SpaceType extends Space, MembershipType extends Membership> = MessageReceivedAction<MessageType> | PresenceListenerActions | SignalReceivedAction<SignalType> | UserListenerActions<UserType> | SpaceListenerActions<SpaceType> | MembershipListenerActions<MembershipType> | NetworkStatusListenerActions | SubscriptionStatusListenerActions | ErrorStatusListenerActions;
export declare const createPubNubListener: <MessageType extends Message, SignalType extends Signal, UserType extends User<import("../../foundations/ObjectsCustom").AnyCustom>, SpaceType extends Space<import("../../foundations/ObjectsCustom").AnyCustom>, MembershipType extends Membership<import("../../foundations/ObjectsCustom").AnyCustom, Space<import("../../foundations/ObjectsCustom").AnyCustom>>>(dispatch: Dispatch<ListenerActions<MessageType, SignalType, UserType, SpaceType, MembershipType>>) => any;
/**
 * Combines multiple listener objects into one object that supports all of them.
 *
 * @param listeners Array of listener objects.
 * @returns The combined listener Object.
 */
export declare const combineListeners: (...listeners: any[]) => any;
