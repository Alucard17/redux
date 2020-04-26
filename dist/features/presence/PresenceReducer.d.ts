import { AnyAction } from 'redux';
import { PresenceListenerActions } from './PresenceListener';
import { Presence, HereNowRetrievedAction, PresenceStateRetrievedAction } from './PresenceActions';
export interface PresencebyIdState<ReceivedPresence extends Presence> {
    byId: {
        [channelId: string]: {
            name: string;
            occupants: ReceivedPresence[];
            occupancy: number;
        };
    };
    totalOccupancy: number;
}
export declare type PresenceActions<RetrievedPresence extends Presence> = HereNowRetrievedAction<RetrievedPresence> | PresenceStateRetrievedAction<RetrievedPresence> | PresenceListenerActions;
export declare type PresenceReducer<StoredPresence extends Presence, PresenceAction extends AnyAction> = (state: PresencebyIdState<StoredPresence> | undefined, action: PresenceAction) => PresencebyIdState<StoredPresence>;
export declare const createPresenceReducer: <StoredPresence extends Presence<object> = Presence<import("./PresenceState").AnyPresenceState>, PresenceAction extends AnyAction = PresenceActions<StoredPresence>>() => PresenceReducer<StoredPresence, PresenceAction>;
