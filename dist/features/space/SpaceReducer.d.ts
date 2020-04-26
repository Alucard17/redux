import { AnyAction } from 'redux';
import { SpaceActions, SpaceListenerActions, Space } from './SpaceActions';
import { MembershipActions, MembershipRetrievedAction, Membership } from '../membership/MembershipActions';
import { AnyMeta } from '../../foundations/ActionMeta';
import { ObjectsCustom } from '../../foundations/ObjectsCustom';
export declare type SpacesByIdState<ReceivedSpace extends Space<ObjectsCustom>> = {
    byId: {
        [spaceId: string]: ReceivedSpace;
    };
};
declare type SpaceReducerActions<StoredSpace extends Space<ObjectsCustom>> = SpaceActions<StoredSpace, AnyMeta> | SpaceListenerActions<StoredSpace> | MembershipRetrievedAction<Membership, AnyMeta> | MembershipActions<Membership<ObjectsCustom, StoredSpace>, AnyMeta>;
export declare type SpaceReducer<StoredSpace extends Space<ObjectsCustom>, SpaceAction extends AnyAction> = (state: SpacesByIdState<StoredSpace> | undefined, action: SpaceAction) => SpacesByIdState<StoredSpace>;
export declare const createSpaceReducer: <StoredSpace extends Space<object> = Space<import("../../foundations/ObjectsCustom").AnyCustom>, SpaceAction extends AnyAction = SpaceReducerActions<StoredSpace>>() => SpaceReducer<StoredSpace, SpaceAction>;
export {};
