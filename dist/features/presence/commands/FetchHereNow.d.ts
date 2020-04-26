import { Dispatch } from 'redux';
import { HereNowRequest, HereNowError, FetchingHereNowAction, ErrorFetchingHereNowAction, HereNowRetrievedAction, HereNowSuccess } from '../PresenceActions';
import { PresenceActionType } from '../PresenceActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta } from '../../../foundations/ActionMeta';
export declare const fetchingHereNow: <Meta extends ActionMeta>(payload: HereNowRequest, meta?: Meta | undefined) => FetchingHereNowAction<Meta>;
export declare const hereNowRetrieved: <Meta extends ActionMeta>(payload: HereNowSuccess<import("../PresenceActions").Presence<import("../PresenceState").AnyPresenceState>>, meta?: Meta | undefined) => HereNowRetrievedAction<Meta>;
export declare const errorFetchingHereNow: <Meta extends ActionMeta>(payload: HereNowError, meta?: Meta | undefined) => ErrorFetchingHereNowAction<Meta>;
export declare const fetchHereNow: <Meta extends ActionMeta>(request: HereNowRequest, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: PresenceActionType;
};
