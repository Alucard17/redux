import { Message } from 'features/message/MessageActions';
import { PresenceEventMessage } from 'features/presence/PresenceActions';
import { Signal } from 'features/signal/SignalActions';
import { User, UserListenerPayload } from 'features/user/UserActions';
import { Space, SpaceListenerPayload } from 'features/space/SpaceActions';
import { Membership, MembershipListenerPayload } from 'features/membership/MembershipActions';
import { NetworkStatusResponse } from 'features/networkStatus/NetworkStatusActions';
import { SubscriptionStatusResponse } from 'features/subscriptionStatus/SubscribeStatusActions';
import { ErrorStatusResponse } from 'features/errorStatus/ErrorStatusActions';
import { ObjectsCustom } from './ObjectsCustom';
export interface PubNubListener {
    message?: (message: Message) => void;
    presence?: (presence: PresenceEventMessage) => void;
    signal?: (signal: Signal) => void;
    user?: (user: UserListenerPayload<User<ObjectsCustom>>) => void;
    space?: (space: SpaceListenerPayload<Space<ObjectsCustom>>) => void;
    membership?: (membership: MembershipListenerPayload<Membership<ObjectsCustom, Space<ObjectsCustom>>>) => void;
    status?: (status: NetworkStatusResponse & SubscriptionStatusResponse & ErrorStatusResponse) => void;
}
/**
 * Combines multiple listener objects into one object that supports all of them.
 *
 * @param listeners Array of listener objects.
 * @returns The combined listener Object.
 */
export declare const combineListeners: (...listeners: PubNubListener[]) => any;
