import {Comment} from "./Comment";
import {FEED_ACTIONS} from "../Feed/feedActions";
import { v4 as uuid } from 'uuid';

jest.mock('uuid');

describe("Comment Model", () => {
   it("Comment.ts should create an array of comments", () => {
       const mockComment = {id: 1, name: 'test', email: 'test', body: 1, postId: 2};
       Comment.create = jest.fn();
       Comment.reducer({type: FEED_ACTIONS.CREATE_COMMENTS, payload: {
           comments: [
               mockComment
           ]
       }}, Comment, {});

       expect(Comment.create).toHaveBeenCalledWith(mockComment);
   });

    it("Comment.ts should create a comment", () => {
        const mockComment = {id: undefined, name: 'test', email: 'test@test.com', body: "test", postId: 1};
        Comment.create = jest.fn();
        Comment.reducer({type: FEED_ACTIONS.CREATE_COMMENT, payload: {
                body: 'test',
                postId: 1
            }}, Comment, {});

        expect(Comment.create).toHaveBeenCalledWith(mockComment);
        expect(uuid).toHaveBeenCalled();
    })
});