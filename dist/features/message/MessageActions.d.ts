import { MessageActionType } from './MessageActionType.enum';
import { PubNubApiStatus } from '../../foundations/PubNubApi';
export interface Message {
    channel: string;
    message: object;
    publisher?: string;
    subscription?: string;
    timetoken?: number;
}
export interface MessageRequestOptions<MessageContentType, MessageMetaType> {
    message: MessageContentType;
    channel: string;
    storeInHistory?: boolean;
    sendByPost?: boolean;
    meta?: MessageMetaType;
    ttl?: number;
}
export interface SendMessageRequest<MessageContentType, MessageMetaType> extends MessageRequestOptions<MessageContentType, MessageMetaType> {
}
export interface SendMessageResponse {
    timetoken: number;
}
export interface SendMessageError<MessageContentType, MessageMetaType> {
    request: SendMessageRequest<MessageContentType, MessageMetaType>;
    status: PubNubApiStatus;
}
export interface SendMessageSuccess<MessageContentType, MessageMetaType> {
    request: SendMessageRequest<MessageContentType, MessageMetaType>;
    response: SendMessageResponse;
    status: PubNubApiStatus;
}
export interface MessageReceivedAction<MessageType> {
    type: typeof MessageActionType.MESSAGE_RECEIVED;
    payload: MessageType;
}
export interface SendingMessageAction<MessageContentType, MessageMetaType, MetaType> {
    type: typeof MessageActionType.SENDING_MESSAGE;
    payload: SendMessageRequest<MessageContentType, MessageMetaType>;
    meta?: MetaType;
}
export interface MessageSentAction<MessageContentType, MessageMetaType, MetaType> {
    type: typeof MessageActionType.MESSAGE_SENT;
    payload: SendMessageSuccess<MessageContentType, MessageMetaType>;
    meta?: MetaType;
}
export interface ErrorSendingMessageAction<MessageContentType, MessageMetaType, MetaType> {
    type: typeof MessageActionType.ERROR_SENDING_MESSAGE;
    payload: SendMessageError<MessageContentType, MessageMetaType>;
    meta?: MetaType;
}
export interface MessageHistoryRequestOptions {
    channel: string;
    reverse?: boolean;
    count?: number;
    stringifiedTimeToken?: boolean;
    includeMeta?: boolean;
    start?: string;
    end?: string;
}
export interface FetchMessageHistoryRequest extends MessageHistoryRequestOptions {
}
export interface FetchMessageHistoryResponse<MessageContentType> {
    startTimeToken: number;
    messages: [{
        timetoken: string;
        entry: MessageContentType;
    }];
    endTimeToken: number;
}
export interface FetchMessageHistoryError {
    request: FetchMessageHistoryRequest;
    status: PubNubApiStatus;
}
export interface FetchMessageHistorySuccess<MessageContentType> {
    request: FetchMessageHistoryRequest;
    response: FetchMessageHistoryResponse<MessageContentType>;
    status: PubNubApiStatus;
}
export interface FetchingMessageHistoryAction<MetaType> {
    type: typeof MessageActionType.FETCHING_MESSAGE_HISTORY;
    payload: FetchMessageHistoryRequest;
    meta?: MetaType;
}
export interface MessageHistoryRetrievedAction<MessageContentType, MetaType> {
    type: typeof MessageActionType.MESSAGE_HISTORY_RETRIEVED;
    payload: FetchMessageHistorySuccess<MessageContentType>;
    meta?: MetaType;
}
export interface ErrorFetchingMessageHistoryAction<MetaType> {
    type: typeof MessageActionType.ERROR_FETCHING_MESSAGE_HISTORY;
    payload: FetchMessageHistoryError;
    meta?: MetaType;
}
export declare type MessageActions<MessageType, MessageContentType, MessageMetaType, MetaType> = MessageReceivedAction<MessageType> | SendingMessageAction<MessageContentType, MessageMetaType, MetaType> | MessageSentAction<MessageContentType, MessageMetaType, MetaType> | ErrorSendingMessageAction<MessageContentType, MessageMetaType, MetaType> | FetchingMessageHistoryAction<MetaType> | MessageHistoryRetrievedAction<MessageContentType, MetaType> | ErrorFetchingMessageHistoryAction<MetaType>;
