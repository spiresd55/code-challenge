import initialState from "./initialState";

const reducer = function(state = initialState, action: any) {
    let newState = { ...state };

    switch (action.type) {
        default:
            return state;
    }

    return newState;
};

export default reducer;