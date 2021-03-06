import Pubnub from 'pubnub';
import { Dispatch } from 'redux';
import {
  MembershipListenerActions,
  UserMembershipUpdatedOnSpaceEventAction,
  UserAddedToSpaceEventAction,
  UserRemovedFromSpaceEventAction,
  Membership,
  MembershipEventMessage,
  MembershipListenerPayload,
} from './MembershipActions';
import { MembershipActionType } from './MembershipActionType.enum';
import { ObjectsCustom } from 'foundations/ObjectsCustom';
import { Space } from 'features/space/SpaceActions';

const userMembershipUpdatedOnSpace = <
  ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>
>(
  payload: MembershipEventMessage<ReceivedMembership>
): UserMembershipUpdatedOnSpaceEventAction<ReceivedMembership> => ({
  type: MembershipActionType.USER_MEMBERSHIP_UPDATED_ON_SPACE_EVENT,
  payload,
});

const userAddedToSpace = <
  ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>
>(
  payload: MembershipEventMessage<ReceivedMembership>
): UserAddedToSpaceEventAction<ReceivedMembership> => ({
  type: MembershipActionType.USER_ADDED_TO_SPACE_EVENT,
  payload,
});

const userRemovedFromSpace = <
  ReceivedMembership extends Membership<ObjectsCustom, Space<ObjectsCustom>>
>(
  payload: MembershipEventMessage<ReceivedMembership>
): UserRemovedFromSpaceEventAction<ReceivedMembership> => ({
  type: MembershipActionType.USER_REMOVED_FROM_SPACE_EVENT,
  payload,
});

// tag::RDX-method-listener-membership[]
export const createMembershipListener = <
  ReceivedMembership extends Membership<
    ObjectsCustom,
    Space<ObjectsCustom>
  > = Membership
>(
  dispatch: Dispatch<MembershipListenerActions<ReceivedMembership>>
) => ({
  membership: (payload: Pubnub.MembershipEvent) => {
    switch (payload.message.event) {
      case 'create':
        dispatch(
          userAddedToSpace(
            ((payload as unknown) as MembershipListenerPayload<
              ReceivedMembership
            >).message
          )
        );
        break;
      case 'update':
        dispatch(
          userMembershipUpdatedOnSpace(
            ((payload as unknown) as MembershipListenerPayload<
              ReceivedMembership
            >).message
          )
        );
        break;
      case 'delete':
        dispatch(
          userRemovedFromSpace(
            ((payload as unknown) as MembershipListenerPayload<
              ReceivedMembership
            >).message
          )
        );
        break;
      default:
        break;
    }
  },
});
// end::RDX-method-listener-membership[]
