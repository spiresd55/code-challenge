export class FeedService {
    baseUrl: string;
    constructor() {
        this.baseUrl = "https://jsonplaceholder.typicode.com";
    }

    async getPosts() {
        const results = await fetch(`${this.baseUrl}/posts`);
        if(results.status !== 200) {
            return [];
        } else {
            return results.json();
        }
    }

    async getComments(postId: number) {
        const results = await fetch(`${this.baseUrl}/comments>postId=${postId}`);
        if(results.status !== 200) {
            return [];
        } else {
            return results.json();
        }
    }
}

export default new FeedService();