import { takeLatest, put, select, delay } from "redux-saga/effects";
import { MESSAGE_ACTIONS } from "./msgActions";

export function* UpdateTypedMessage(action: any) {
    const { message } = yield select();
    const { msg } = action;
    const { typedMsg } = message;

    yield delay(200); //Delay 200 ms
    const typedMessage = typedMsg + msg.charAt(typedMsg.length);
    yield put({ type: MESSAGE_ACTIONS.UPDATE_TYPED_MESSAGE, typedMessage });
}

export function* watchTypings() {
    yield takeLatest(MESSAGE_ACTIONS.TYPEWRITE, UpdateTypedMessage);
}

export function msgSagas() {
    return [watchTypings()];
}
