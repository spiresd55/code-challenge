export enum FEED_ACTIONS {
    DISPLAY_ERROR = "DISPLAY_ERROR",
    CLEAR_ERROR = "CLEAR_ERROR",

    //Redux ORM
    CREATE_POSTS = "CREATE_POSTS",
    CREATE_COMMENTS = "CREATE_COMMENTS",

    //Saga watchers
    GET_COMMENTS = "GET_COMMENTS",
    GET_POSTS = "GET_POSTS"
}

const getComments = (postId: number) => {
    return { type: FEED_ACTIONS.GET_COMMENTS, postId};
};

const getPosts = () => {
    return { type: FEED_ACTIONS.GET_POSTS}
};

const createComments = (comments: any) => {
  return { type: FEED_ACTIONS.CREATE_COMMENTS, payload: {comments}}
};

const createPosts = (posts: any) => {
    return { type: FEED_ACTIONS.CREATE_POSTS, payload: {posts}}
};

const displayError = (error: string) => { //TODO: typecheck this
    return { type: FEED_ACTIONS.DISPLAY_ERROR, error };
};

export const FEED_ACTION_CREATOR = {
    getComments,
    getPosts,
    displayError,
    createPosts,
    createComments,
}
