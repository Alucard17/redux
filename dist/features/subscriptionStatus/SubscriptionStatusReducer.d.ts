import { SubscriptionStatusListenerActions } from './SubscriptionStatusListener';
export interface SubscriptionState {
    channels: string[];
}
export declare const createSubscriptionStatusReducer: () => (state: SubscriptionState | undefined, action: SubscriptionStatusListenerActions) => SubscriptionState;
