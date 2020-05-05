import Pubnub from 'pubnub';
import { Dispatch } from 'redux';
import { MessageReceivedAction, Message } from './MessageActions';
export declare const messageReceived: <MessageType extends Message>(payload: MessageType) => MessageReceivedAction<MessageType>;
export declare const createMessageListener: <MessageType extends Message>(dispatch: Dispatch<MessageReceivedAction<MessageType>>) => {
    message: (payload: Pubnub.MessageEvent) => MessageReceivedAction<MessageType>;
};
