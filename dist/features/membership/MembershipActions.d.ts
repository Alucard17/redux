import Pubnub from 'pubnub';
import { MembershipActionType } from './MembershipActionType.enum';
import { ActionMeta } from '../../foundations/ActionMeta';
import { ObjectsCustom, AnyCustom } from 'foundations/ObjectsCustom';
import { Space } from 'features/space/SpaceActions';
export declare type FetchMembershipsCallback<MembershipType extends Membership<ObjectsCustom, Space<ObjectsCustom>>> = (status: Pubnub.PubnubStatus, response: FetchMembershipResponse<MembershipType>) => void;
export declare type MembershipCallback<MembershipType extends Membership<ObjectsCustom, Space<ObjectsCustom>>> = (status: Pubnub.PubnubStatus, response: MembershipResponse<MembershipType>) => void;
export interface Membership<CustomMembershipFields extends ObjectsCustom = AnyCustom, ReceivedSpace extends Space<ObjectsCustom> = Space> {
    id: string;
    custom?: CustomMembershipFields;
    space?: ReceivedSpace;
    created?: string;
    updated?: string;
    eTag?: string;
}
export interface MembershipPage {
    next?: string;
    prev?: string;
}
export interface MembershipFetchRequestOptions {
    limit?: number;
    page?: MembershipPage;
    include?: {
        customFields?: boolean;
        spaceFields?: boolean;
        customSpaceFields?: boolean;
        totalCount?: boolean;
    };
}
export interface FetchMembershipRequest extends MembershipFetchRequestOptions {
    userId: string;
}
export interface FetchMembershipResponse<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>> {
    status: number;
    data: ReceivedMembership[];
}
export declare type MembershipRequest<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>> = {
    userId: string;
    spaces: ReceivedMembership[];
};
export declare type MembershipLeaveRequest = {
    userId: string;
    spaces: string[];
};
export interface MembershipResponse<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>> {
    status: number;
    data: ReceivedMembership[];
}
export interface MembershipEventItem<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>> {
    userId: string;
    spaceId: string;
    custom: ReceivedMembership['custom'];
}
export interface MembershipEventMessage<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>> {
    data: MembershipEventItem<ReceivedMembership>;
    event: string;
    type: string;
}
export declare type MembershipListenerPayload<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>> = Membership> = {
    message: MembershipEventMessage<ReceivedMembership>;
};
export interface FetchMembershipSuccess<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>> {
    request: FetchMembershipRequest;
    response: FetchMembershipResponse<ReceivedMembership>;
    status: Pubnub.PubnubStatus;
}
export interface FetchMembershipError {
    request: FetchMembershipRequest;
    status: Pubnub.PubnubStatus;
}
export interface MembershipSuccess<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>> {
    request: MembershipRequest<ReceivedMembership>;
    response: MembershipResponse<ReceivedMembership>;
    status: Pubnub.PubnubStatus;
}
export interface MembershipError<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>> {
    request: MembershipRequest<ReceivedMembership>;
    status: Pubnub.PubnubStatus;
}
export interface FetchingMembershipAction<Meta extends ActionMeta> {
    type: typeof MembershipActionType.FETCHING_MEMBERSHIP;
    payload: FetchMembershipRequest;
    meta?: Meta;
}
export interface MembershipRetrievedAction<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembershipActionType.MEMBERSHIP_RETRIEVED;
    payload: FetchMembershipSuccess<ReceivedMembership>;
    meta?: Meta;
}
export interface ErrorFetchingMembershipAction<Meta extends ActionMeta> {
    type: typeof MembershipActionType.ERROR_FETCHING_MEMBERSHIP;
    payload: FetchMembershipError;
    meta?: Meta;
    error: true;
}
export interface UpdatingMembershipAction<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembershipActionType.UPDATING_MEMBERSHIP;
    payload: MembershipRequest<ReceivedMembership>;
    meta?: Meta;
}
export interface MembershipUpdatedAction<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembershipActionType.MEMBERSHIP_UPDATED;
    payload: MembershipSuccess<ReceivedMembership>;
    meta?: Meta;
}
export interface ErrorUpdatingMembershipAction<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembershipActionType.ERROR_UPDATING_MEMBERSHIP;
    payload: MembershipError<ReceivedMembership>;
    meta?: Meta;
    error: true;
}
export interface JoiningSpacesAction<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembershipActionType.JOINING_SPACES;
    payload: MembershipRequest<ReceivedMembership>;
    meta?: Meta;
}
export interface SpacesJoinedAction<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembershipActionType.SPACES_JOINED;
    payload: MembershipSuccess<ReceivedMembership>;
    meta?: Meta;
}
export interface ErrorJoiningSpacesAction<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembershipActionType.ERROR_JOINING_SPACES;
    payload: MembershipError<ReceivedMembership>;
    meta?: Meta;
    error: true;
}
export interface LeavingSpacesAction<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembershipActionType.LEAVING_SPACES;
    payload: MembershipRequest<ReceivedMembership>;
    meta?: Meta;
}
export interface SpacesLeftAction<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembershipActionType.SPACES_LEFT;
    payload: MembershipSuccess<ReceivedMembership>;
    meta?: Meta;
}
export interface ErrorLeavingSpacesAction<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>, Meta extends ActionMeta> {
    type: typeof MembershipActionType.ERROR_LEAVING_SPACES;
    payload: MembershipError<ReceivedMembership>;
    meta?: Meta;
    error: true;
}
export interface UserAddedToSpaceEventAction<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>> {
    type: typeof MembershipActionType.USER_ADDED_TO_SPACE_EVENT;
    payload: MembershipEventMessage<ReceivedMembership>;
}
export interface UserRemovedFromSpaceEventAction<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>> {
    type: typeof MembershipActionType.USER_REMOVED_FROM_SPACE_EVENT;
    payload: MembershipEventMessage<ReceivedMembership>;
}
export interface UserMembershipUpdatedOnSpaceEventAction<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>> {
    type: typeof MembershipActionType.USER_MEMBERSHIP_UPDATED_ON_SPACE_EVENT;
    payload: MembershipEventMessage<ReceivedMembership>;
}
export declare type MembershipActions<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>, Meta extends ActionMeta> = FetchingMembershipAction<Meta> | MembershipRetrievedAction<ReceivedMembership, Meta> | ErrorFetchingMembershipAction<Meta> | UpdatingMembershipAction<ReceivedMembership, Meta> | MembershipUpdatedAction<ReceivedMembership, Meta> | ErrorUpdatingMembershipAction<ReceivedMembership, Meta> | JoiningSpacesAction<ReceivedMembership, Meta> | SpacesJoinedAction<ReceivedMembership, Meta> | ErrorJoiningSpacesAction<ReceivedMembership, Meta> | LeavingSpacesAction<ReceivedMembership, Meta> | SpacesLeftAction<ReceivedMembership, Meta> | ErrorLeavingSpacesAction<ReceivedMembership, Meta>;
export declare type MembershipListenerActions<ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>> = UserAddedToSpaceEventAction<ReceivedMembership> | UserRemovedFromSpaceEventAction<ReceivedMembership> | UserMembershipUpdatedOnSpaceEventAction<ReceivedMembership>;
