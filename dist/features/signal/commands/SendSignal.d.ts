import { Dispatch } from 'redux';
import { SendSignalRequest, SendingSignalAction, SignalSentAction, SendSignalSuccess, ErrorSendingSignalAction, SendSignalError } from '../SignalActions';
import { SignalActionType } from '../SignalActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
export declare const sendingSignal: <SignalContentType extends object, Meta extends ActionMeta>(payload: SendSignalRequest<SignalContentType>, meta?: Meta | undefined) => SendingSignalAction<SignalContentType, Meta>;
export declare const signalSent: <SignalContentType extends object, Meta extends ActionMeta>(payload: SendSignalSuccess<SignalContentType>, meta?: Meta | undefined) => SignalSentAction<SignalContentType, Meta>;
export declare const errorSendingSignal: <SignalContentType extends object, Meta extends ActionMeta>(payload: SendSignalError<SignalContentType>, meta?: Meta | undefined) => ErrorSendingSignalAction<SignalContentType, Meta>;
export declare const sendSignal: <SignalContentType extends object = {}, Meta extends ActionMeta = AnyMeta>(request: SendSignalRequest<SignalContentType>, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: SignalActionType;
};
