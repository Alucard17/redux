import { Dispatch } from 'redux';
import { NetworkUpEventAction, NetworkDownEventAction, NetworkStatusResponse } from './NetworkStatusActions';
export declare const networkUp: () => NetworkUpEventAction;
export declare const networkDown: () => NetworkDownEventAction;
export declare type NetworkStatusListenerActions = NetworkUpEventAction | NetworkDownEventAction;
export declare const createNetworkStatusListener: (dispatch: Dispatch<NetworkStatusListenerActions>) => {
    status: (payload: NetworkStatusResponse) => void;
};
