import { takeLatest, put, select } from "redux-saga/effects";
import { FEED_ACTIONS, FEED_ACTION_CREATOR } from "./feedActions";
import FeedService from "../../service/FeedService";

export function* GetComments(action: any) {
   // yield put(FEED_ACTION_CREATOR.getCommentsSuccess([]))
    const { postId } = yield select();
    console.log('Get comments saga', postId);
    const comments = yield FeedService.getComments(action.postId);

    //TODO: error
    yield put(FEED_ACTION_CREATOR.createComments(comments));
}

export function* GetPosts(action: any) {
    const posts = yield FeedService.getPosts();

    //Todo: error
    yield put(FEED_ACTION_CREATOR.createPosts(posts));
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
