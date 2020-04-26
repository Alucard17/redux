import { Message, MessageActions } from './MessageActions';
import { ActionMeta, AnyMeta } from '../../foundations/ActionMeta';
export declare type MessageState<MessageType extends Message> = {
    byId: {
        [channel: string]: MessageType[];
    };
};
export declare const createMessageReducer: <MessageType extends Message = Message, MessageContentType extends object = {}, MessageMetaType extends object = {}, Meta extends ActionMeta = AnyMeta>() => (state: MessageState<MessageType> | undefined, action: MessageActions<MessageType, MessageContentType, MessageMetaType, Meta>) => MessageState<MessageType>;
