export enum UI_ACTIONS {
    DISPLAY_LOADER = "DISPLAY_LOADER",
}

const displayLoader = (show: boolean) => {
    return { type: UI_ACTIONS.DISPLAY_LOADER, payload: {show}};
};

export const UI_ACTION_CREATOR = {
    displayLoader,
};