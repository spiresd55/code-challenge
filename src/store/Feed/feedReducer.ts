import initialState from "./initialState";
import {FEED_ACTIONS} from "./feedActions";

const reducer = function(state = initialState, action: any) {
    let newState = { ...state };

    switch (action.type) {
        case FEED_ACTIONS.DISPLAY_ERROR:
            newState.error = action.payload.error;
            break;
        default:
            return state;
    }

    return newState;
};

export default reducer;