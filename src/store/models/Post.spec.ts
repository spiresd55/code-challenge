import {Post} from "./Post";
import {FEED_ACTIONS} from "../Feed/feedActions";

describe("Post Model", () => {
    it("Post.ts should create an array of posts", () => {
        const mockPost = {id: 1, userId: 1, title: 'test', body: 'test'};
        Post.create = jest.fn();
        Post.reducer({type: FEED_ACTIONS.CREATE_POSTS, payload: {
                posts: [
                    mockPost
                ]
            }}, Post, {});

        expect(Post.create).toHaveBeenCalledWith(mockPost);
    });
});