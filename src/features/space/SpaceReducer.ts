import {
  SpaceActions,
  SpaceListenerActions,
  SpaceResponseItem,
  Space,
  SpaceEventMessage,
  SpaceSuccess,
  DeleteSpaceSuccess,
  FetchSpacesSuccess,
  FetchSpaceByIdSuccess,
} from './SpaceActions';
import { SpaceActionType } from './SpaceActionType.enum';
import { MembersActions, Member } from '../members/MembersActions';
import { MembershipActions, Membership, FetchMembershipSuccess } from '../membership/MembershipActions';
import { User } from '../../features/user/UserActions';
import { MembershipActionType } from '../../features/membership/MembershipActionType.enum';

// tag::RDX-025[]
export type SpacesByIdState<SpaceType extends Space, CustomType> = {
  byId: {
    [spaceId: string]: SpaceResponseItem<SpaceType, CustomType>
  },
};
// end::RDX-025[]

const createInitialState = <SpaceType extends Space, CustomType>(): SpacesByIdState<SpaceType, CustomType> => ({
  byId: {},
});

const spaceCreated = <SpaceType extends Space, CustomType>(
  state: SpacesByIdState<SpaceType, CustomType>,
  payload: SpaceSuccess<SpaceType, CustomType>,
) => {
  let newState = {
    byId: { ...state.byId }
  };

  newState.byId[payload.response.data.id] = payload.response.data;

  return newState;
};

const spaceUpdated = <SpaceType extends Space, CustomType>(
  state: SpacesByIdState<SpaceType, CustomType>,
  payload: SpaceSuccess<SpaceType, CustomType>,
) => {
  let newState = {
    byId: { ...state.byId }
  };

  newState.byId[payload.response.data.id] = payload.response.data;

  return newState;
};

const spaceDeleted = <SpaceType extends Space, CustomType>(
  state: SpacesByIdState<SpaceType, CustomType>,
  payload: DeleteSpaceSuccess
) => {
  let newState = {
    byId: { ...state.byId }
  };

  delete newState.byId[payload.request.spaceId];

  return newState;
};

const spacesRetrieved = <SpaceType extends Space, CustomType>(
  state: SpacesByIdState<SpaceType, CustomType>,
  payload: FetchSpacesSuccess<SpaceType, CustomType>,
) => {
  let newState = {
    byId: { ...state.byId }
  };

  payload.response.data.forEach((item) => {
    newState.byId[item.id] = item;
  });

  return newState;
};

const spaceRetrieved = <SpaceType extends Space, CustomType>(
  state: SpacesByIdState<SpaceType, CustomType>,
  payload: FetchSpaceByIdSuccess<SpaceType, CustomType>,
) => {
  let newState = {
    byId: { ...state.byId }
  };

  newState.byId[payload.response.data.id] = payload.response.data;

  return newState;
};

const spaceUpdatedEventReceived = <SpaceType extends Space, CustomType>(
  state: SpacesByIdState<SpaceType, CustomType>,
  payload: SpaceEventMessage<SpaceType, CustomType>,
) => {
  let newState = {
    byId: { ...state.byId }
  };

  newState.byId[payload.data.id] = payload.data;

  return newState;
};

const spaceDeletedEventReceived = <SpaceType extends Space, CustomType>(
  state: SpacesByIdState<SpaceType, CustomType>,
  payload: SpaceEventMessage<SpaceType, CustomType>,
) => {
  let newState = {
    byId: { ...state.byId }
  };

  delete newState.byId[payload.data.id];

  return newState;
}

const membershipRetrieved = <SpaceType extends Space, CustomType>(
  state: SpacesByIdState<SpaceType, CustomType>,
  payload: FetchMembershipSuccess<SpaceType, CustomType>,
) => {
  let newState = state;

  if (payload.response.data.length > 0) {
    newState = {
      byId: {
        ...state.byId
      }
    };

    for (let i = 0; i < payload.response.data.length; i++) {
      let currentMembership = payload.response.data[i];
      
      newState.byId[currentMembership.id] = currentMembership.space;
    }
  }

  return newState;
};

export const createSpaceReducer = <UserType extends User, SpaceType extends Space, MemberType extends Member<CustomType>, MembershipType extends Membership<CustomType>, CustomType, MetaType>() => (
  state: SpacesByIdState<SpaceType, CustomType> = createInitialState<SpaceType, CustomType>(),
  action: SpaceActions<SpaceType, CustomType, MetaType> 
    | SpaceListenerActions<SpaceType, CustomType> 
    | MembersActions<UserType, MemberType, CustomType, MetaType>
    | MembershipActions<SpaceType, MembershipType, CustomType, MetaType>
): SpacesByIdState<SpaceType, CustomType> => {
  switch (action.type) {
    case SpaceActionType.SPACE_CREATED:
      return spaceCreated<SpaceType, CustomType>(state, action.payload);
    case SpaceActionType.SPACE_UPDATED:
      return spaceUpdated<SpaceType, CustomType>(state, action.payload);
    case SpaceActionType.SPACE_DELETED:
      return spaceDeleted<SpaceType, CustomType>(state, action.payload);
    case SpaceActionType.SPACES_RETRIEVED:
      return spacesRetrieved<SpaceType, CustomType>(state, action.payload);
    case SpaceActionType.SPACE_RETRIEVED:
      return spaceRetrieved<SpaceType, CustomType>(state, action.payload);
    case SpaceActionType.SPACE_UPDATED_EVENT:
      return spaceUpdatedEventReceived<SpaceType, CustomType>(state, action.payload);
    case SpaceActionType.SPACE_DELETED_EVENT:
      return spaceDeletedEventReceived<SpaceType, CustomType>(state, action.payload);
    case MembershipActionType.MEMBERSHIP_RETRIEVED:
      return membershipRetrieved<SpaceType, CustomType>(state, action.payload);
    default:
      return state;
  }
};
