import { AnyAction } from 'redux';
import { MembershipListenerActions, MembershipActions, Membership } from './MembershipActions';
import { AnyMeta } from '../../foundations/ActionMeta';
import { ObjectsCustom } from 'foundations/ObjectsCustom';
import { User } from 'features/user/UserActions';
export declare type MembershipByUserIdState<ReceivedMembership extends Membership<ObjectsCustom, User<ObjectsCustom>>> = {
    byId: {
        [userId: string]: ReceivedMembership[];
    };
};
declare type MembershipReducerActions<ReceivedMembership extends Membership<ObjectsCustom, User<ObjectsCustom>>> = MembershipActions<ReceivedMembership, AnyMeta> | MembershipListenerActions<ReceivedMembership>;
export declare type MembershipReducer<StoredMembership extends Membership<ObjectsCustom, User<ObjectsCustom>>, MembershipAction extends AnyAction> = (state: MembershipByUserIdState<StoredMembership> | undefined, action: MembershipAction) => MembershipByUserIdState<StoredMembership>;
export declare const createMembershipReducer: <StoredMembership extends Membership<object, User<object>> = Membership<import("../../foundations/ObjectsCustom").AnyCustom, import("../..").Space<import("../../foundations/ObjectsCustom").AnyCustom>>, MembershipAction extends AnyAction = MembershipReducerActions<StoredMembership>>() => MembershipReducer<StoredMembership, MembershipAction>;
export {};
