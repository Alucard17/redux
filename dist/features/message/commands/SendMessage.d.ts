import { Dispatch } from 'redux';
import { SendMessageRequest, SendingMessageAction, MessageSentAction, SendMessageSuccess, ErrorSendingMessageAction, SendMessageError } from '../MessageActions';
import { MessageActionType } from '../MessageActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
export declare const sendingMessage: <MessageContentType extends object, MessageMeta extends object, Meta extends ActionMeta>(payload: SendMessageRequest<MessageContentType, MessageMeta>, meta?: Meta | undefined) => SendingMessageAction<MessageContentType, MessageMeta, Meta>;
export declare const messageSent: <MessageContentType extends object, MessageMeta extends object, Meta extends ActionMeta>(payload: SendMessageSuccess<MessageContentType, MessageMeta>, meta?: Meta | undefined) => MessageSentAction<MessageContentType, MessageMeta, Meta>;
export declare const errorSendingMessage: <MessageContentType extends object, MessageMeta extends object, Meta extends ActionMeta>(payload: SendMessageError<MessageContentType, MessageMeta>, meta?: Meta | undefined) => ErrorSendingMessageAction<MessageContentType, MessageMeta, Meta>;
export declare const sendMessage: <MessageContentType extends object = {}, MessageMeta extends object = {}, Meta extends ActionMeta = AnyMeta>(request: SendMessageRequest<MessageContentType, MessageMeta>, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: MessageActionType;
};
