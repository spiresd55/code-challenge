export const MESSAGE_ACTIONS = {
    UPDATE_TYPED_MESSAGE: "UPDATE_TYPED_MESSAGE",
    TYPEWRITE: "TYPEWRITE"
};

const updateTypedMessage = (typedMessage: any) => {
    return { type: MESSAGE_ACTIONS.UPDATE_TYPED_MESSAGE, typedMessage };
};

const typewrite = (msg: any) => {
    return { type: MESSAGE_ACTIONS.TYPEWRITE, msg };
};

export const MESSAGE_ACTION_CREATOR = {
    updateTypedMessage,
    typewrite
};
