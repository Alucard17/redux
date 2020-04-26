import { PubNub } from './PubNubApi';
/**
 * Describe thunk middleware context
 */
export interface PubnubThunkContext {
    pubnub: {
        api: PubNub;
    };
}
