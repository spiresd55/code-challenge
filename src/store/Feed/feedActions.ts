export enum FEED_ACTIONS {
    //Redux ORM
    CREATE_POSTS = "CREATE_POSTS",
    CREATE_COMMENTS = "CREATE_COMMENTS",

    //Saga watchers
    GET_COMMENTS = "GET_COMMENTS",
    GET_POSTS = "GET_POSTS",

    //Other
    CREATE_COMMENT = "CREATE_COMMENT",
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

const createComment = (body: string, postId: number) => {
    return { type: FEED_ACTIONS.CREATE_COMMENT, payload: {body, postId}}
};

const createPosts = (posts: any) => {
    return { type: FEED_ACTIONS.CREATE_POSTS, payload: {posts}}
};

export const FEED_ACTION_CREATOR = {
    getComments,
    getPosts,
    createPosts,
    createComments,
    createComment
};
