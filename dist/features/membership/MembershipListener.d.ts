import { Dispatch } from 'redux';
import { MembershipListenerActions, MembershipListenerPayload, Membership } from './MembershipActions';
import { Space } from '../space/SpaceActions';
export declare const createMembershipListener: <ReceivedMembership extends Membership<object, Space<object>> = Membership<import("../../foundations/ObjectsCustom").AnyCustom, Space<import("../../foundations/ObjectsCustom").AnyCustom>>>(dispatch: Dispatch<MembershipListenerActions<ReceivedMembership>>) => {
    membership: (payload: MembershipListenerPayload<ReceivedMembership>) => void;
};
