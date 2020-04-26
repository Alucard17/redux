import { SpacesRetrievedAction, Space } from './SpaceActions';
import { ActionMeta, AnyMeta } from '../../foundations/ActionMeta';
interface SpaceListState {
    spaceIds: string[];
}
export declare const createSpaceListReducer: <SpaceType extends Space<object> = Space<import("../../foundations/ObjectsCustom").AnyCustom>, Meta extends ActionMeta = AnyMeta>() => (state: SpaceListState | undefined, action: SpacesRetrievedAction<SpaceType, Meta>) => SpaceListState;
export {};
