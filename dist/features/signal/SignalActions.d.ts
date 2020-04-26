import { SignalActionType } from './SignalActionType.enum';
import { PubNubApiStatus } from '../../foundations/PubNubApi';
export interface Signal {
    channel: string;
    message: object;
    publisher?: string;
    subscription?: string;
    timetoken?: number;
}
export interface SignalRequestOptions<SignalContentType> {
    message: SignalContentType;
    channel: string;
}
export interface SendSignalRequest<SignalContentType> extends SignalRequestOptions<SignalContentType> {
}
export interface SendSignalResponse {
    timetoken: number;
}
export interface SendSignalError<SignalContentType> {
    request: SendSignalRequest<SignalContentType>;
    status: PubNubApiStatus;
}
export interface SendSignalSuccess<SignalContentType> {
    request: SendSignalRequest<SignalContentType>;
    response: SendSignalResponse;
    status: PubNubApiStatus;
}
export interface SignalReceivedAction<SignalType> {
    type: typeof SignalActionType.SIGNAL_RECEIVED;
    payload: SignalType;
}
export interface SendingSignalAction<SignalContentType, MetaType> {
    type: typeof SignalActionType.SENDING_SIGNAL;
    payload: SendSignalRequest<SignalContentType>;
    meta?: MetaType;
}
export interface SignalSentAction<SignalContentType, MetaType> {
    type: typeof SignalActionType.SIGNAL_SENT;
    payload: SendSignalSuccess<SignalContentType>;
    meta?: MetaType;
}
export interface ErrorSendingSignalAction<SignalContentType, MetaType> {
    type: typeof SignalActionType.ERROR_SENDING_SIGNAL;
    payload: SendSignalError<SignalContentType>;
    meta?: MetaType;
}
export declare type SignalActions<SignalType, SignalContentType, MetaType> = SignalReceivedAction<SignalType> | SendingSignalAction<SignalContentType, MetaType> | SignalSentAction<SignalContentType, MetaType> | ErrorSendingSignalAction<SignalContentType, MetaType>;
