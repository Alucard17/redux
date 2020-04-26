import { NetworkStatusListenerActions } from './NetworkStatusListener';
export interface NetworkStatusState {
    isConnected: boolean;
}
declare type NetworkStatusInitializerFunction = () => boolean;
export declare const createNetworkStatusReducer: (initializer: boolean | NetworkStatusInitializerFunction) => (state: NetworkStatusState | undefined, action: NetworkStatusListenerActions) => NetworkStatusState;
export {};
