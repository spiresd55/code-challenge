import { attr, Model, ModelType, many } from 'redux-orm';

export interface PostFields {
    userId: number;
    id: number;
    title: string;
    body: string;
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
            case 'CREATE_POSTS': {
                action.payload.posts.forEach((post: any) => {
                   Post.create(post);
                });
                break;
            }
        }

    }
}
