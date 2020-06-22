import { attr, Model } from 'redux-orm';
import {CommentFields} from "./Comment";
import {FEED_ACTIONS} from "../Feed/feedActions";

export interface PostFields {
    userId: number;
    id: number;
    title: string;
    body: string;
    comments: CommentFields[]; //This will be set with the fk function in Comment.ts
}

export class Post extends Model<typeof Post, PostFields> {
    static modelName = "Post";

    static fields = {
        id: attr(),
        userId: attr(),
        title: attr(),
        body: attr(),
    };

    static reducer(action: any, Post: any, session: any) {
        switch(action.type) {
            case FEED_ACTIONS.CREATE_POSTS: {
                action.payload.posts.forEach((post: any) => {
                   Post.create(post);
                });
                break;
            }
        }

    }
}
