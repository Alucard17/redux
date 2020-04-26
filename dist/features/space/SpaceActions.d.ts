import { SpaceActionType } from './SpaceActionType.enum';
import { ObjectsCustom, AnyCustom } from '../../foundations/ObjectsCustom';
import { ActionMeta } from '../../foundations/ActionMeta';
import { PubNubApiStatus } from '../../foundations/PubNubApi';
export interface Space<CustomSpaceFields extends ObjectsCustom = AnyCustom> {
    id: string;
    name: string;
    description?: string;
    custom?: CustomSpaceFields;
    created?: string;
    updated?: string;
    eTag?: string;
}
export interface SpacePage {
    next?: string;
    prev?: string;
}
export interface SpaceRequestOptions {
    limit?: number;
    page?: SpacePage;
    include?: {
        totalCount?: boolean;
        customFields?: boolean;
    };
}
export interface SpaceEventMessage<ReceivedSpace extends Space<ObjectsCustom>> {
    data: ReceivedSpace;
    event: string;
    type: string;
}
export declare type SpaceListenerPayload<ReceivedSpace extends Space<ObjectsCustom>> = {
    message: SpaceEventMessage<ReceivedSpace>;
};
export declare type FetchSpacesRequest = SpaceRequestOptions;
declare type FetchSpacesRequest = SpaceRequestOptions;
export interface FetchSpacesResponse<ReceivedSpace extends Space<ObjectsCustom>> {
    status: string;
    data: ReceivedSpace[];
}
export interface FetchSpacesError {
    request: FetchSpacesRequest;
    status: PubNubApiStatus;
}
export interface FetchSpacesSuccess<ReceivedSpace extends Space<ObjectsCustom>> {
    request: FetchSpacesRequest;
    response: FetchSpacesResponse<ReceivedSpace>;
    status: PubNubApiStatus;
}
export interface SpaceRequest extends Space<ObjectsCustom>, SpaceRequestOptions {
}
export interface SpaceSuccess<ReceivedSpace extends Space<ObjectsCustom>> {
    request: SpaceRequest;
    response: SpaceResponse<ReceivedSpace>;
    status: PubNubApiStatus;
}
export interface SpaceResponse<ReceivedSpace extends Space<ObjectsCustom>> {
    status: string;
    data: ReceivedSpace;
}
export interface SpaceError {
    request: SpaceRequest;
    status: PubNubApiStatus;
}
export interface FetchSpaceByIdRequest extends SpaceRequestOptions {
    spaceId: string;
}
export interface FetchSpaceByIdSuccess<ReceivedSpace extends Space<ObjectsCustom>> {
    request: FetchSpaceByIdRequest;
    response: SpaceResponse<ReceivedSpace>;
    status: PubNubApiStatus;
}
export interface FetchSpaceByIdError {
    request: FetchSpaceByIdRequest;
    status: PubNubApiStatus;
}
export interface DeleteSpaceRequest {
    spaceId: string;
}
export interface DeleteSpaceResponse {
    status: number;
    request: DeleteSpaceRequest;
}
export interface DeleteSpaceSuccess {
    request: DeleteSpaceRequest;
    response: DeleteSpaceResponse;
    status: PubNubApiStatus;
}
export interface DeleteSpaceError {
    request: DeleteSpaceRequest;
    status: PubNubApiStatus;
}
export interface FetchingSpacesAction<Meta extends ActionMeta> {
    type: typeof SpaceActionType.FETCHING_SPACES;
    payload: FetchSpacesRequest;
    meta?: Meta;
}
export interface SpacesRetrievedAction<ReceivedSpace extends Space<ObjectsCustom>, Meta extends ActionMeta> {
    type: typeof SpaceActionType.SPACES_RETRIEVED;
    payload: FetchSpacesSuccess<ReceivedSpace>;
    meta?: Meta;
}
export interface ErrorFetchingSpacesAction<Meta extends ActionMeta> {
    type: typeof SpaceActionType.ERROR_FETCHING_SPACES;
    payload: FetchSpacesError;
    meta?: Meta;
    error: true;
}
export interface FetchingSpaceByIdAction<Meta extends ActionMeta> {
    type: typeof SpaceActionType.FETCHING_SPACE_BY_ID;
    payload: FetchSpaceByIdRequest;
    meta?: Meta;
}
export interface SpaceRetrievedAction<ReceivedSpace extends Space<ObjectsCustom>, Meta extends ActionMeta> {
    type: typeof SpaceActionType.SPACE_RETRIEVED;
    payload: FetchSpaceByIdSuccess<ReceivedSpace>;
    meta?: Meta;
}
export interface ErrorFetchingSpaceByIdAction<Meta extends ActionMeta> {
    type: typeof SpaceActionType.ERROR_FETCHING_SPACE_BY_ID;
    payload: FetchSpaceByIdError;
    meta?: Meta;
    error: true;
}
export interface CreatingSpaceAction<Meta extends ActionMeta> {
    type: typeof SpaceActionType.CREATING_SPACE;
    payload: SpaceRequest;
    meta?: Meta;
}
export interface SpaceCreatedAction<ReceivedSpace extends Space<ObjectsCustom>, Meta extends ActionMeta> {
    type: typeof SpaceActionType.SPACE_CREATED;
    payload: SpaceSuccess<ReceivedSpace>;
    meta?: Meta;
}
export interface ErrorCreatingSpaceAction<Meta extends ActionMeta> {
    type: typeof SpaceActionType.ERROR_CREATING_SPACE;
    payload: SpaceError;
    meta?: Meta;
    error: true;
}
export interface UpdatingSpaceAction<Meta extends ActionMeta> {
    type: typeof SpaceActionType.UPDATING_SPACE;
    payload: SpaceRequest;
    meta?: Meta;
}
export interface SpaceUpdatedAction<ReceivedSpace extends Space<ObjectsCustom>, Meta extends ActionMeta> {
    type: typeof SpaceActionType.SPACE_UPDATED;
    payload: SpaceSuccess<ReceivedSpace>;
    meta?: Meta;
}
export interface ErrorUpdatingSpaceAction<Meta extends ActionMeta> {
    type: typeof SpaceActionType.ERROR_UPDATING_SPACE;
    payload: SpaceError;
    meta?: Meta;
    error: true;
}
export interface DeletingSpaceAction<Meta extends ActionMeta> {
    type: typeof SpaceActionType.DELETING_SPACE;
    payload: DeleteSpaceRequest;
    meta?: Meta;
}
export interface SpaceDeletedAction<Meta extends ActionMeta> {
    type: typeof SpaceActionType.SPACE_DELETED;
    payload: DeleteSpaceSuccess;
    meta?: Meta;
}
export interface ErrorDeletingSpaceAction<Meta extends ActionMeta> {
    type: typeof SpaceActionType.ERROR_DELETING_SPACE;
    payload: DeleteSpaceError;
    meta?: Meta;
    error: true;
}
export interface SpaceUpdatedEventAction<ReceivedSpace extends Space<ObjectsCustom>> {
    type: typeof SpaceActionType.SPACE_UPDATED_EVENT;
    payload: SpaceEventMessage<ReceivedSpace>;
}
export interface SpaceDeletedEventAction<ReceivedSpace extends Space<ObjectsCustom>> {
    type: typeof SpaceActionType.SPACE_DELETED_EVENT;
    payload: SpaceEventMessage<ReceivedSpace>;
}
export declare type SpaceActions<ReceivedSpace extends Space<ObjectsCustom>, Meta extends ActionMeta> = FetchingSpacesAction<Meta> | SpacesRetrievedAction<ReceivedSpace, Meta> | ErrorFetchingSpacesAction<Meta> | FetchingSpaceByIdAction<Meta> | SpaceRetrievedAction<ReceivedSpace, Meta> | ErrorFetchingSpaceByIdAction<Meta> | CreatingSpaceAction<Meta> | SpaceCreatedAction<ReceivedSpace, Meta> | ErrorCreatingSpaceAction<Meta> | UpdatingSpaceAction<Meta> | SpaceUpdatedAction<ReceivedSpace, Meta> | ErrorUpdatingSpaceAction<Meta> | DeletingSpaceAction<Meta> | SpaceDeletedAction<Meta> | ErrorDeletingSpaceAction<Meta>;
export declare type SpaceListenerActions<ReceivedSpace extends Space<ObjectsCustom>> = SpaceUpdatedEventAction<ReceivedSpace> | SpaceDeletedEventAction<ReceivedSpace>;
export {};
