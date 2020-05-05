import Pubnub from 'pubnub';
import { Dispatch } from 'redux';
import { MembershipListenerActions, Membership } from './MembershipActions';
import { Space } from 'features/space/SpaceActions';
export declare const createMembershipListener: <ReceivedMembership extends Membership<object, Space<object>> = Membership<import("../../foundations/ObjectsCustom").AnyCustom, Space<import("../../foundations/ObjectsCustom").AnyCustom>>>(dispatch: Dispatch<MembershipListenerActions<ReceivedMembership>>) => {
    membership: (payload: Pubnub.MembershipEvent) => void;
};
