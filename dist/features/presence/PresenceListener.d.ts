import { Dispatch } from 'redux';
import { JoinEventAction, LeaveEventAction, TimeoutEventAction, StateChangeEventAction, PresenceEventMessage } from './PresenceActions';
export declare const userJoin: (payload: PresenceEventMessage<import("./PresenceActions").Presence<import("./PresenceState").AnyPresenceState>>) => JoinEventAction;
export declare const userLeave: (payload: PresenceEventMessage<import("./PresenceActions").Presence<import("./PresenceState").AnyPresenceState>>) => LeaveEventAction;
export declare const userTimeout: (payload: PresenceEventMessage<import("./PresenceActions").Presence<import("./PresenceState").AnyPresenceState>>) => TimeoutEventAction;
export declare const userStateChange: (payload: PresenceEventMessage<import("./PresenceActions").Presence<import("./PresenceState").AnyPresenceState>>) => StateChangeEventAction;
export declare type PresenceListenerActions = JoinEventAction | LeaveEventAction | TimeoutEventAction | StateChangeEventAction;
export declare const createPresenceListener: (dispatch: Dispatch<PresenceListenerActions>) => {
    presence: (payload: PresenceEventMessage<import("./PresenceActions").Presence<import("./PresenceState").AnyPresenceState>>) => void;
};
