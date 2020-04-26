import { Dispatch } from 'redux';
import { SpaceRequest, UpdatingSpaceAction, SpaceUpdatedAction, ErrorUpdatingSpaceAction, SpaceError, Space, SpaceSuccess } from '../SpaceActions';
import { SpaceActionType } from '../SpaceActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
export declare const updatingSpace: <Meta extends ActionMeta>(payload: SpaceRequest, meta?: Meta | undefined) => UpdatingSpaceAction<Meta>;
export declare const spaceUpdated: <SpaceType extends Space<object>, Meta extends ActionMeta>(payload: SpaceSuccess<SpaceType>, meta?: Meta | undefined) => SpaceUpdatedAction<SpaceType, Meta>;
export declare const errorUpdatingSpace: <Meta extends ActionMeta>(payload: SpaceError, meta?: Meta | undefined) => ErrorUpdatingSpaceAction<Meta>;
export declare const updateSpace: <SpaceType extends Space<object>, Meta extends ActionMeta = AnyMeta>(request: SpaceRequest, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: SpaceActionType;
};
