import { Signal, SignalActions } from './SignalActions';
import { ActionMeta, AnyMeta } from '../../foundations/ActionMeta';
export declare type SignalState<SignalType extends Signal> = {
    byId: {
        [channel: string]: SignalType[];
    };
};
export declare const createSignalReducer: <SignalType extends Signal = Signal, SignalContentType extends object = {}, Meta extends ActionMeta = AnyMeta>() => (state: SignalState<SignalType> | undefined, action: SignalActions<SignalType, SignalContentType, Meta>) => SignalState<SignalType>;
