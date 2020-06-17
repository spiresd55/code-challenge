import { FEED_ACTIONS } from "./feedActions";
import initialState from "./initialState";

const reducer = function(state = initialState, action: any) {
    let newState = { ...state };

    switch (action.type) {
        case FEED_ACTIONS.GET_COMMENTS_SUCCESS:
            break;
        case FEED_ACTIONS.GET_POSTS_SUCCESS:
            break;
        default:
            return state;
    }

    return newState;
};

export default reducer;