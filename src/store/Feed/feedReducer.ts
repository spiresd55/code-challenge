import { FEED_ACTIONS } from "./feedActions";
import initialState from "./initialState";

const reducer = function(state = initialState, action: any) {
    let newState = { ...state };

    switch (action.type) {
        case FEED_ACTIONS.DISPLAY_ERROR:
            break;
        case FEED_ACTIONS.CLEAR_ERROR:
            break;
        default:
            return state;
    }

    return newState;
};

export default reducer;