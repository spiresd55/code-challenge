import {runSaga} from "@redux-saga/core";
import {GetPosts, watch, GetComments, feedSagas} from "./feedSaga";
import {FEED_ACTIONS} from "./feedActions";
import {UI_ACTIONS} from "../UI/UIActions";
import FeedService from "../../service/FeedService";

jest.mock("../../service/FeedService");

describe("FeedSaga", () => {
    it("should run getPosts saga", async () => {
        FeedService.getPosts.mockImplementation(() => {
            return [];
        });

        const dispatched = [];

        await runSaga({
            dispatch: (action) => dispatched.push(action),
            getState: () => ({state: 'test'})
        }, GetPosts, []);

        expect(dispatched).toEqual([
            {type: UI_ACTIONS.DISPLAY_LOADER, payload: {show: true}},
            {type: UI_ACTIONS.DISPLAY_LOADER, payload: {show: false}},
            {type: FEED_ACTIONS.CREATE_POSTS, payload: {posts: []}},
        ]);

        expect(FeedService.getPosts).toHaveBeenCalled();
    });

    it("should run GetComments saga", async () => {
        FeedService.getComments.mockImplementation(() => {
            return [];
        });

        const dispatched = [];

        await runSaga({
            dispatch: (action) => dispatched.push(action),
            getState: () => ({state: 'test'})
        }, GetComments, []);

        expect(dispatched).toEqual([
            {type: FEED_ACTIONS.CREATE_COMMENTS, payload: {comments: []}},
        ]);
    });


    it('should watch feed', async() => {
        const dispatched = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action),
            getState: () => ({ state: 'test' }),
        }, watch);

        expect(dispatched).toEqual([]);
    });

    it("should export the saga", () => {
       expect(feedSagas()).toBeTruthy();
    });

});