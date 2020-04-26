import { Dispatch } from 'redux';
import { NetworkIssuesEventAction, AccessDeniedEventAction, MalformedResponseEventAction, BadRequestEventAction, DecryptionErrorEventAction, TimeoutConnectionEventAction, RequestMessageCountExceedEventAction, UnknownEventAction, ErrorStatusResponse } from './ErrorStatusActions';
export declare const networkIssues: (payload: ErrorStatusResponse) => NetworkIssuesEventAction;
export declare const accessDenied: (payload: ErrorStatusResponse) => AccessDeniedEventAction;
export declare const malformedResponse: (payload: ErrorStatusResponse) => MalformedResponseEventAction;
export declare const badRequest: (payload: ErrorStatusResponse) => BadRequestEventAction;
export declare const decryptionError: (payload: ErrorStatusResponse) => DecryptionErrorEventAction;
export declare const timeoutConnection: (payload: ErrorStatusResponse) => TimeoutConnectionEventAction;
export declare const requestMessageCountExceeded: (payload: ErrorStatusResponse) => RequestMessageCountExceedEventAction;
export declare const unknown: (payload: ErrorStatusResponse) => UnknownEventAction;
export declare type ErrorStatusListenerActions = NetworkIssuesEventAction | AccessDeniedEventAction | MalformedResponseEventAction | BadRequestEventAction | RequestMessageCountExceedEventAction | DecryptionErrorEventAction | TimeoutConnectionEventAction | UnknownEventAction;
export declare const createErrorStatusListener: (dispatch: Dispatch<ErrorStatusListenerActions>) => {
    status: (payload: ErrorStatusResponse) => void;
};
