import { takeLatest, put, select, delay } from "redux-saga/effects";
import { FEED_ACTIONS, FEED_ACTION_CREATOR } from "./feedActions";
import FeedService from "../../service/FeedService";

/*export function* UpdateTypedMessage(action: any) {
    const { message } = yield select();
    const { msg } = action;
    const { typedMsg } = message;

    yield delay(200); //Delay 200 ms
    const typedMessage = typedMsg + msg.charAt(typedMsg.length);
    yield put({ type: MESSAGE_ACTIONS.UPDATE_TYPED_MESSAGE, typedMessage });
}*/

export function* GetComments(action: any) {
   // yield put(FEED_ACTION_CREATOR.getCommentsSuccess([]))
}

export function* GetPosts(action: any) {
    const posts = yield FeedService.getPosts();
    const comments = yield FeedService.getComments(1);

        yield put({type: "CREATE_POSTS",payload: {
            posts
        }})

    yield put({type: "CREATE_COMMENTS", payload: {comments}});

   // yield put(FEED_ACTION_CREATOR.getPostsSuccess([]))
}

export function* watch() {
    yield takeLatest(FEED_ACTIONS.GET_COMMENTS, GetComments);
    yield takeLatest(FEED_ACTIONS.GET_POSTS, GetPosts);
}

export function feedSagas() {
    return [
        watch()
    ];
}
