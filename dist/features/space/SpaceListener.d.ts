import { Dispatch } from 'redux';
import { SpaceUpdatedEventAction, SpaceDeletedEventAction, SpaceEventMessage, SpaceListenerPayload, SpaceListenerActions, Space } from './SpaceActions';
export declare const spaceUpdated: <ReceivedSpace extends Space<object>>(payload: SpaceEventMessage<ReceivedSpace>) => SpaceUpdatedEventAction<ReceivedSpace>;
export declare const spaceDeleted: <ReceivedSpace extends Space<object>>(payload: SpaceEventMessage<ReceivedSpace>) => SpaceDeletedEventAction<ReceivedSpace>;
export declare const createSpaceListener: <ReceivedSpace extends Space<object>>(dispatch: Dispatch<SpaceListenerActions<ReceivedSpace>>) => {
    space: (payload: SpaceListenerPayload<ReceivedSpace>) => void;
};
