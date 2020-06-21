import initialState from "./initialState";
import {UI_ACTIONS} from "./UIActions";

const reducer = function(state = initialState, action: any) {
    let newState = { ...state };

    switch (action.type) {
        case UI_ACTIONS.DISPLAY_LOADER:
            newState.displayLoader = action.payload.show;
            break;
        default:
            return state;
    }

    return newState;
};

export default reducer;