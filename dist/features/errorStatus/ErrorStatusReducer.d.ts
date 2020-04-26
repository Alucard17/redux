import { ErrorStatusListenerActions } from './ErrorStatusListener';
import { ErrorStatusResponse } from './ErrorStatusActions';
export interface ErrorState {
    networkIssues: ErrorStatusResponse[];
    accessDenied: ErrorStatusResponse[];
    malformedResponse: ErrorStatusResponse[];
    badRequest: ErrorStatusResponse[];
    requestMessageCountExceeded: ErrorStatusResponse[];
    decryptionError: ErrorStatusResponse[];
    timeoutConnection: ErrorStatusResponse[];
    unknown: ErrorStatusResponse[];
}
export declare const createErrorStatusReducer: () => (state: ErrorState | undefined, action: ErrorStatusListenerActions) => ErrorState;
