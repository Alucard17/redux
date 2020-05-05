import { Dispatch } from 'redux';
import { FetchMessageHistoryError, FetchingMessageHistoryAction, ErrorFetchingMessageHistoryAction, MessageHistoryRetrievedAction, FetchMessageHistorySuccess } from '../../message/MessageActions';
import { MessageActionType } from '../../message/MessageActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta } from '../../../foundations/ActionMeta';
export declare const fetchingMessageHistory: <Meta extends ActionMeta>(payload: import("../MessageActions").MessageHistoryRequestOptions, meta?: Meta | undefined) => FetchingMessageHistoryAction<Meta>;
export declare const messageHistoryRetrieved: <MessageContentType, Meta extends ActionMeta>(payload: FetchMessageHistorySuccess<MessageContentType>, meta?: Meta | undefined) => MessageHistoryRetrievedAction<MessageContentType, Meta>;
export declare const errorFetchingMessageHistory: <Meta extends ActionMeta>(payload: FetchMessageHistoryError, meta?: Meta | undefined) => ErrorFetchingMessageHistoryAction<Meta>;
export declare const fetchMessageHistory: <MessageContentType, Meta extends ActionMeta>(request: import("../MessageActions").MessageHistoryRequestOptions, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: MessageActionType;
};
