import { Dispatch } from 'redux';
import { SpaceActionType } from '../SpaceActionType.enum';
import { ErrorFetchingSpaceByIdAction, SpaceRetrievedAction, FetchingSpaceByIdAction, FetchSpaceByIdError, FetchSpaceByIdSuccess, FetchSpaceByIdRequest, Space } from '../SpaceActions';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
export declare const fetchingSpaceById: <Meta extends ActionMeta>(payload: FetchSpaceByIdRequest, meta?: Meta | undefined) => FetchingSpaceByIdAction<Meta>;
export declare const spaceRetrieved: <SpaceType extends Space<object>, Meta extends ActionMeta>(payload: FetchSpaceByIdSuccess<SpaceType>, meta?: Meta | undefined) => SpaceRetrievedAction<SpaceType, Meta>;
export declare const errorFetchingSpaceById: <Meta extends ActionMeta>(payload: FetchSpaceByIdError, meta?: Meta | undefined) => ErrorFetchingSpaceByIdAction<Meta>;
export declare const fetchSpaceById: <SpaceType extends Space<object>, Meta extends ActionMeta = AnyMeta>(request: FetchSpaceByIdRequest, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: SpaceActionType;
};
