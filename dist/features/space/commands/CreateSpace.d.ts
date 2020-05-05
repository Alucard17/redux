import { Dispatch } from 'redux';
import { ErrorCreatingSpaceAction, SpaceCreatedAction, CreatingSpaceAction, SpaceError, SpaceSuccess, SpaceRequest, Space } from '../SpaceActions';
import { SpaceActionType } from '../SpaceActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
export declare const creatingSpace: <Meta extends ActionMeta>(payload: SpaceRequest, meta?: Meta | undefined) => CreatingSpaceAction<Meta>;
export declare const spaceCreated: <SpaceType extends Space<object>, Meta extends ActionMeta>(payload: SpaceSuccess<SpaceType>, meta?: Meta | undefined) => SpaceCreatedAction<SpaceType, Meta>;
export declare const errorCreatingSpace: <Meta extends ActionMeta>(payload: SpaceError, meta?: Meta | undefined) => ErrorCreatingSpaceAction<Meta>;
export declare const createSpace: <SpaceType extends Space<object>, Meta extends ActionMeta = AnyMeta>(request: SpaceRequest, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: SpaceActionType;
};
