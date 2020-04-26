import { Dispatch } from 'redux';
import { SpaceDeletedAction, DeletingSpaceAction, ErrorDeletingSpaceAction, DeleteSpaceRequest, DeleteSpaceError, DeleteSpaceSuccess } from '../SpaceActions';
import { SpaceActionType } from '../SpaceActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
export declare const deletingSpace: <Meta extends ActionMeta>(payload: DeleteSpaceRequest, meta?: Meta | undefined) => DeletingSpaceAction<Meta>;
export declare const spaceDeleted: <Meta extends ActionMeta>(payload: DeleteSpaceSuccess, meta?: Meta | undefined) => SpaceDeletedAction<Meta>;
export declare const errorDeletingSpace: <Meta extends ActionMeta>(payload: DeleteSpaceError, meta?: Meta | undefined) => ErrorDeletingSpaceAction<Meta>;
export declare const deleteSpace: <Meta extends ActionMeta = AnyMeta>(request: DeleteSpaceRequest, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: SpaceActionType;
};
