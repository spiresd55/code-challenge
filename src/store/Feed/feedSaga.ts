import { takeLatest, put, select } from "redux-saga/effects";
import { FEED_ACTIONS, FEED_ACTION_CREATOR } from "./feedActions";
import { UI_ACTION_CREATOR} from "../UI/UIActions";
import FeedService from "../../service/FeedService";

export function* GetComments(action: any) {
    const comments = yield FeedService.getComments(action.postId);

    //TODO: Add Error handler
    yield put(FEED_ACTION_CREATOR.createComments(comments));
}

export function* GetPosts(action: any) {
    yield put(UI_ACTION_CREATOR.displayLoader(true));
    const posts = yield FeedService.getPosts();
    yield put(UI_ACTION_CREATOR.displayLoader(false));

    //Todo: Add Error handler
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
