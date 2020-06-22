import FeedService from "./FeedService";

describe("FeedService", () => {

    beforeEach(() => {
        //@ts-ignore
        fetch.resetMocks();
    });

    it("getPosts() should successfully return posts", async () => {
        fetch.mockResponseOnce(JSON.stringify({posts: []}));
        const response = await FeedService.getPosts();
        expect(response).toEqual({posts: []});
    });

    it("getPosts() should return empty array on error", async () => {
        fetch.mockResponseOnce({}, {status: 500});
        const response = await FeedService.getPosts();
        expect(response).toEqual([])
    });

    it("getComments() should successfully return comments", async () => {
        fetch.mockResponseOnce(JSON.stringify({comments: []}));
        const response = await FeedService.getComments(1);
        expect(response).toEqual({comments: []});
    });

    it("getComments() should return empty array on error", async () => {
        fetch.mockResponseOnce({}, {status: 500});
        const response = await FeedService.getComments(1);
        expect(response).toEqual([])
    });
});