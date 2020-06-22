import { attr, Model, fk } from 'redux-orm';
import { v4 as uuid } from 'uuid';
import {FEED_ACTIONS} from "../Feed/feedActions";

export interface CommentFields {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}

export class Comment extends Model<typeof Comment, CommentFields> {
    static modelName = "Comment";

    static fields = {
        id: attr(),
        name: attr(),
        email: attr(),
        body: attr(),
        postId: fk({
            to: "Post",
            as: "post",
            relatedName: 'comments'
        })
    };

    static reducer(action: any, Comment: any, session: any) {
        switch(action.type) {
            case FEED_ACTIONS.CREATE_COMMENTS: {
                action.payload.comments.forEach((comment: any) => {
                    Comment.create(comment);
                });
                break;
            }
            case FEED_ACTIONS.CREATE_COMMENT: {
                Comment.create({
                    id: uuid(),
                    name: 'test', //NOTE: This would be set if a user was logged in
                    email: 'test@test.com', //NOTE: This would be set if a user was logged in
                    body: action.payload.body,
                    postId: action.payload.postId,
                });
                break;
            }
        }

    }
}
