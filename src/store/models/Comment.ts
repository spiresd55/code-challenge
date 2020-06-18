import { attr, Model, fk, ModelType } from 'redux-orm';

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
            case 'CREATE_COMMENTS': {
                action.payload.comments.forEach((comment: any) => {
                    Comment.create(comment);
                });
                break;
            }
        }

    }
}
