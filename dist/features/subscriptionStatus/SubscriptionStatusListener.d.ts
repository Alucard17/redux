import { Dispatch } from 'redux';
import { ReconnectedAction, ConnectedAction, SubscriptionStatusResponse } from './SubscribeStatusActions';
export declare const reconnected: (payload: SubscriptionStatusResponse) => ReconnectedAction;
export declare const connected: (payload: SubscriptionStatusResponse) => ConnectedAction;
export declare type SubscriptionStatusListenerActions = ReconnectedAction | ConnectedAction;
export declare const createSubscriptionStatusListener: (dispatch: Dispatch<SubscriptionStatusListenerActions>) => {
    status: (payload: SubscriptionStatusResponse) => void;
};
