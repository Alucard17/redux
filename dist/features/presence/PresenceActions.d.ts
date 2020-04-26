import { PresenceActionType } from './PresenceActionType.enum';
import { PresenceState, AnyPresenceState } from './PresenceState';
import { ActionMeta } from '../../foundations/ActionMeta';
import { PubNubApiStatus } from '../../foundations/PubNubApi';
export interface Presence<PresenceStateFields extends PresenceState = AnyPresenceState> {
    uuid: string;
    state?: PresenceStateFields;
}
export interface PresenceEventMessage<ReceivedPresence extends Presence = Presence> {
    action: string;
    channel: string;
    occupancy: number;
    state?: ReceivedPresence['state'];
    subscription?: string;
    timestamp: number;
    timetoken: string;
    uuid: string;
}
export interface HereNowRequest {
    channels?: string[];
    channelGroups?: string[];
}
export interface HereNowResponse<ReceivedPresence extends Presence = Presence> {
    totalChannels: number;
    totalOccupancy: number;
    channels: {
        [channelId: string]: {
            name: string;
            occupants: ReceivedPresence[];
            occupancy: number;
        };
    };
}
export declare type PresenceStateResponse = PresenceState;
export interface HereNowSuccess<ReceivedPresence extends Presence = Presence> {
    request: HereNowRequest;
    response: HereNowResponse<ReceivedPresence>;
    status: PubNubApiStatus;
}
export interface HereNowError {
    request: HereNowRequest;
    status: PubNubApiStatus;
}
export interface PresenceStateRequest {
    uuid?: string;
    channels?: string[];
    channelGroups?: string[];
}
export interface PresenceStateSuccess {
    request: PresenceStateRequest;
    response: PresenceStateResponse;
    status: PubNubApiStatus;
}
export interface PresenceStateError {
    request: PresenceStateRequest;
    status: PubNubApiStatus;
}
export interface FetchingHereNowAction<Meta extends ActionMeta> {
    type: PresenceActionType.FETCHING_HERE_NOW;
    payload: HereNowRequest;
    meta?: Meta;
}
export interface HereNowRetrievedAction<Meta extends ActionMeta> {
    type: PresenceActionType.HERE_NOW_RETRIEVED;
    payload: HereNowSuccess;
    meta?: Meta;
}
export interface ErrorFetchingHereNowAction<Meta extends ActionMeta> {
    type: PresenceActionType.ERROR_FETCHING_HERE_NOW;
    payload: HereNowError;
    meta?: Meta;
}
export interface FetchingPresenceStateAction<Meta extends ActionMeta> {
    type: PresenceActionType.FETCHING_PRESENCE_STATE;
    payload: PresenceStateRequest;
    meta?: Meta;
}
export interface PresenceStateRetrievedAction<Meta extends ActionMeta> {
    type: PresenceActionType.PRESENCE_STATE_RETRIEVED;
    payload: PresenceStateSuccess;
    meta?: Meta;
}
export interface ErrorFetchingPresenceStateAction<Meta extends ActionMeta> {
    type: PresenceActionType.ERROR_FETCHING_PRESENCE_STATE;
    payload: PresenceStateError;
    meta?: Meta;
}
export interface JoinEventAction {
    type: typeof PresenceActionType.JOIN_EVENT;
    payload: PresenceEventMessage;
}
export interface LeaveEventAction {
    type: typeof PresenceActionType.LEAVE_EVENT;
    payload: PresenceEventMessage;
}
export interface TimeoutEventAction {
    type: typeof PresenceActionType.TIMEOUT_EVENT;
    payload: PresenceEventMessage;
}
export interface StateChangeEventAction {
    type: typeof PresenceActionType.STATE_CHANGE_EVENT;
    payload: PresenceEventMessage;
}
