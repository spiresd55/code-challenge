import feed from "./feedReducer";
import {FEED_ACTIONS} from "./feedActions";

describe("FeedReducer", () => {
    it("should return initial state", () => {
        expect(feed(undefined, {type: "NULL"})).toEqual({
            error: undefined
        })
    });

    it("should set an error", () => {
        expect(feed(undefined, {type: FEED_ACTIONS.DISPLAY_ERROR, payload: {error: 'test'}})).toEqual({
            error: "test"
        })
    });
});