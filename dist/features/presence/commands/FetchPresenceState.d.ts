import { Dispatch } from 'redux';
import { PresenceStateRequest, PresenceStateError, FetchingPresenceStateAction, ErrorFetchingPresenceStateAction, PresenceStateRetrievedAction, PresenceStateSuccess } from '../PresenceActions';
import { PresenceActionType } from '../PresenceActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta } from '../../../foundations/ActionMeta';
export declare const fetchingPresenceState: <Meta extends ActionMeta>(payload: PresenceStateRequest, meta?: Meta | undefined) => FetchingPresenceStateAction<Meta>;
export declare const presenceStateRetrieved: <Meta extends ActionMeta>(payload: PresenceStateSuccess, meta?: Meta | undefined) => PresenceStateRetrievedAction<Meta>;
export declare const errorFetchingPresenceState: <Meta extends ActionMeta>(payload: PresenceStateError, meta?: Meta | undefined) => ErrorFetchingPresenceStateAction<Meta>;
export declare const fetchPresenceState: <Meta extends ActionMeta>(request: PresenceStateRequest, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: PresenceActionType;
};
