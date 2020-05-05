import Pubnub from 'pubnub';
import { MembersActionType } from './MembersActionType.enum';
import { ActionMeta } from '../../foundations/ActionMeta';
import { ObjectsCustom, AnyCustom } from 'foundations/ObjectsCustom';
import { Space } from 'features/space/SpaceActions';
import { User } from 'features/user/UserActions';
export declare type FetchMembersCallback<MembersType extends Members<ObjectsCustom, Space<ObjectsCustom>>> = (status: Pubnub.PubnubStatus, response: FetchMembersResponse<MembersType>) => void;
export declare type MembersCallback<MembersType extends Members<ObjectsCustom, Space<ObjectsCustom>>> = (status: Pubnub.PubnubStatus, response: MembersResponse<MembersType>) => void;
export interface MemberPage {
    next?: string;
    prev?: string;
}
export interface Members<CustomMemberFields extends ObjectsCustom = AnyCustom, ReceivedUser extends User<ObjectsCustom> = User> {
    id: string;
    custom?: CustomMemberFields;
    user?: ReceivedUser;
    created?: string;
    updated?: string;
    eTag?: string;
}
export declare type MembersRequest<ReceivedMembers extends Members<ObjectsCustom, User<ObjectsCustom>>> = {
    spaceId: string;
    users: ReceivedMembers[];
};
export interface MembersResponse<ReceivedMembers extends Members<ObjectsCustom, User<ObjectsCustom>>> {
    status: number;
    data: ReceivedMembers[];
}
export interface MembersFetchRequestOptions {
    limit?: number;
    page?: MemberPage;
    include?: {
        customFields?: boolean;
        userFields?: boolean;
        customUserFields?: boolean;
        totalCount?: boolean;
    };
}
export interface MembersFetchRequestOptions {
    limit?: number;
    page?: MemberPage;
    include?: {
        customFields?: boolean;
        userFields?: boolean;
        customUserFields?: boolean;
        totalCount?: boolean;
    };
}
export interface FetchMembersRequest extends MembersFetchRequestOptions {
    spaceId: string;
}
export interface FetchMembersResponse<ReceivedMembers extends Members<ObjectsCustom, User<ObjectsCustom>>> {
    status: number;
    data: ReceivedMembers[];
}
export interface FetchMembersSuccess<ReceivedMembers extends Members<ObjectsCustom, User<ObjectsCustom>>> {
    request: FetchMembersRequest;
    response: FetchMembersResponse<ReceivedMembers>;
    status: Pubnub.PubnubStatus;
}
export interface FetchMembersError {
    request: FetchMembersRequest;
    status: Pubnub.PubnubStatus;
}
export interface MembersSuccess<ReceivedMembers extends Members<ObjectsCustom, User<ObjectsCustom>>> {
    request: MembersRequest<ReceivedMembers>;
    response: MembersResponse<ReceivedMembers>;
    status: Pubnub.PubnubStatus;
}
export interface MembersError<ReceivedMembers extends Members<ObjectsCustom, User<ObjectsCustom>>> {
    request: MembersRequest<ReceivedMembers>;
    status: Pubnub.PubnubStatus;
}
export interface FetchingMembersAction<Meta> {
    type: typeof MembersActionType.FETCHING_MEMBERS;
    payload: FetchMembersRequest;
    meta?: Meta;
}
export interface MembersRetrievedAction<ReceivedMembers extends Members<ObjectsCustom, User<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembersActionType.MEMBERS_RETRIEVED;
    payload: FetchMembersSuccess<ReceivedMembers>;
    meta?: Meta;
}
export interface ErrorFetchingMembersAction<Meta> {
    type: typeof MembersActionType.ERROR_FETCHING_MEMBERS;
    payload: FetchMembersError;
    meta?: Meta;
    error: true;
}
export interface UpdatingMembersAction<ReceivedMembers extends Members<ObjectsCustom, User<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembersActionType.UPDATING_MEMBERS;
    payload: MembersRequest<ReceivedMembers>;
    meta?: Meta;
}
export interface MembersUpdatedAction<ReceivedMembers extends Members<ObjectsCustom, User<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembersActionType.MEMBERS_UPDATED;
    payload: MembersSuccess<ReceivedMembers>;
    meta?: Meta;
}
export interface ErrorUpdatingMembersAction<ReceivedMembers extends Members<ObjectsCustom, User<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembersActionType.ERROR_UPDATING_MEMBERS;
    payload: MembersError<ReceivedMembers>;
    meta?: Meta;
    error: true;
}
export interface AddingMembersAction<ReceivedMembers extends Members<ObjectsCustom, User<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembersActionType.ADDING_MEMBERS;
    payload: MembersRequest<ReceivedMembers>;
    meta?: Meta;
}
export interface MembersAddedAction<ReceivedMembers extends Members<ObjectsCustom, User<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembersActionType.MEMBERS_ADDED;
    payload: MembersSuccess<ReceivedMembers>;
    meta?: Meta;
}
export interface ErrorAddingMembersAction<ReceivedMembers extends Members<ObjectsCustom, User<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembersActionType.ERROR_ADDING_MEMBERS;
    payload: MembersError<ReceivedMembers>;
    meta?: Meta;
    error: true;
}
export interface RemovingMembersAction<ReceivedMembers extends Members<ObjectsCustom, User<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembersActionType.REMOVING_MEMBERS;
    payload: MembersRequest<ReceivedMembers>;
    meta?: Meta;
}
export interface MembersRemovedAction<ReceivedMembers extends Members<ObjectsCustom, User<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembersActionType.MEMBERS_REMOVED;
    payload: MembersSuccess<ReceivedMembers>;
    meta?: Meta;
}
export interface ErrorRemovingMembersAction<ReceivedMembers extends Members<ObjectsCustom, User<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembersActionType.ERROR_REMOVING_MEMBERS;
    payload: MembersError<ReceivedMembers>;
    meta?: Meta;
    error: true;
}
export declare type MembersActions<ReceivedMembers extends Members<ObjectsCustom, User<ObjectsCustom>>, Meta extends ActionMeta> = FetchingMembersAction<Meta> | MembersRetrievedAction<ReceivedMembers, Meta> | ErrorFetchingMembersAction<Meta> | UpdatingMembersAction<ReceivedMembers, Meta> | MembersUpdatedAction<ReceivedMembers, Meta> | ErrorUpdatingMembersAction<ReceivedMembers, Meta> | AddingMembersAction<ReceivedMembers, Meta> | MembersAddedAction<ReceivedMembers, Meta> | ErrorAddingMembersAction<ReceivedMembers, Meta> | RemovingMembersAction<ReceivedMembers, Meta> | MembersRemovedAction<ReceivedMembers, Meta> | ErrorRemovingMembersAction<ReceivedMembers, Meta>;
