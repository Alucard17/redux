import { Dispatch } from 'redux';
import { ErrorFetchingSpacesAction, SpacesRetrievedAction, FetchingSpacesAction, FetchSpacesError, Space, FetchSpacesSuccess } from '../SpaceActions';
import { SpaceActionType } from '../SpaceActionType.enum';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';
export declare const fetchingSpaces: <Meta extends ActionMeta>(payload: import("../SpaceActions").SpaceRequestOptions, meta?: Meta | undefined) => FetchingSpacesAction<Meta>;
export declare const spacesRetrieved: <SpaceType extends Space<object>, Meta extends ActionMeta>(payload: FetchSpacesSuccess<SpaceType>, meta?: Meta | undefined) => SpacesRetrievedAction<SpaceType, Meta>;
export declare const errorFetchingSpaces: <Meta extends ActionMeta>(payload: FetchSpacesError, meta?: Meta | undefined) => ErrorFetchingSpacesAction<Meta>;
export declare const fetchSpaces: <SpaceType extends Space<object>, Meta extends ActionMeta = AnyMeta>(request?: import("../SpaceActions").SpaceRequestOptions, meta?: Meta | undefined) => {
    (dispatch: Dispatch<import("redux").AnyAction>, _getState: any, { pubnub }: PubnubThunkContext): Promise<void>;
    type: SpaceActionType;
};
