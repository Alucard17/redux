import { AnyAction } from 'redux';
import { MembersActions, Members } from './MembersActions';
import { MembershipListenerActions, Membership } from '../../features/membership/MembershipActions';
import { ObjectsCustom } from '../../foundations/ObjectsCustom';
import { Space } from '../space/SpaceActions';
import { AnyMeta } from '../../foundations/ActionMeta';
export declare type MembersBySpaceIdState<ReceivedMembers extends Members<ObjectsCustom, Space<ObjectsCustom>>> = {
    byId: {
        [spaceId: string]: ReceivedMembers[];
    };
};
declare type MembersReducerActions<ReceivedMembers extends Members<ObjectsCustom, Space<ObjectsCustom>>> = MembersActions<ReceivedMembers, AnyMeta> | MembershipListenerActions<Membership>;
export declare type MembersReducer<StoredMembers extends Members<ObjectsCustom, Space<ObjectsCustom>>, MembersAction extends AnyAction> = (state: MembersBySpaceIdState<StoredMembers> | undefined, action: MembersAction) => MembersBySpaceIdState<StoredMembers>;
export declare const createMembersReducer: <StoredMembers extends Members<object, Space<object>> = Members<import("../../foundations/ObjectsCustom").AnyCustom, import("../..").User<import("../../foundations/ObjectsCustom").AnyCustom>>, MembersAction extends AnyAction = MembersReducerActions<StoredMembers>>() => MembersReducer<StoredMembers, MembersAction>;
export {};
