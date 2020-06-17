export enum FEED_ACTIONS {
    GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS",
    GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
    ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS",
    GET_COMMENTS = "GET_COMMENTS",
    GET_POSTS = "GET_POSTS"
}

const getComments = (postId: number) => {
    return { type: FEED_ACTIONS.GET_COMMENTS, postId};
};

const getPosts = () => {
    return { type: FEED_ACTIONS.GET_POSTS}
};

const getCommentsSuccess = (comments: any[]) => { //TODO: typecheck this
    return { type: FEED_ACTIONS.GET_COMMENTS_SUCCESS, comments };
};

const getPostsSuccess = (posts: any[]) => { //TODO: Typecheck this
    return { type: FEED_ACTIONS.GET_POSTS_SUCCESS, posts}
};


export const FEED_ACTION_CREATOR = {
    getComments,
    getPosts,
    getCommentsSuccess,
    getPostsSuccess
};
