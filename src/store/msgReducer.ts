import { MESSAGE_ACTIONS } from "./msgActions";

const defaultState = {
    typedMsg: ""
};

const reducer = function(state = defaultState, action: any) {
    let newState = { ...state };

    switch (action.type) {
        case MESSAGE_ACTIONS.UPDATE_TYPED_MESSAGE:
            newState.typedMsg = action.typedMessage;
            break;
        default:
            return state;
    }

    return newState;
};

export default reducer;