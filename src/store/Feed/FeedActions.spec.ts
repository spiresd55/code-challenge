import {FEED_ACTION_CREATOR, FEED_ACTIONS} from "./FeedActions";

describe("FeedActions", () => {
    it("getComments() should return an action creator", () => {
       expect(FEED_ACTION_CREATOR.getComments(1)).toEqual({
           type: FEED_ACTIONS.GET_COMMENTS,
           postId: 1
       });
    });

    it("getPosts() should return an action creator", () => {
        expect(FEED_ACTION_CREATOR.getPosts()).toEqual({
            type: FEED_ACTIONS.GET_POSTS,
        });
    });

    it("createComments() should return an action creator", () => {
        expect(FEED_ACTION_CREATOR.createComments([])).toEqual({
            type: FEED_ACTIONS.CREATE_COMMENTS,
            payload: {
                comments: []
            }
        });
    });

    it("createComment() should return an action creator", () => {
        expect(FEED_ACTION_CREATOR.createComment("test", 1)).toEqual({
            type: FEED_ACTIONS.CREATE_COMMENT,
            payload: {
                body: "test",
                postId: 1
            }
        });
    });

    it("createPosts() should return an action creator", () => {
        expect(FEED_ACTION_CREATOR.createPosts([])).toEqual({
            type: FEED_ACTIONS.CREATE_POSTS,
            payload: {
               posts: []
            }
        });
    });
});