import Pubnub from 'pubnub';
import { Dispatch } from 'redux';
import { SignalReceivedAction, Signal } from './SignalActions';
export declare const signalReceived: <SignalType extends Signal>(payload: SignalType) => SignalReceivedAction<SignalType>;
export declare const createSignalListener: <SignalType extends Signal>(dispatch: Dispatch<SignalReceivedAction<SignalType>>) => {
    signal: (payload: Pubnub.SignalEvent) => SignalReceivedAction<SignalType>;
};
