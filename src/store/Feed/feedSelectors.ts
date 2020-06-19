import orm from "../models/Orm";
import {createSelector} from "redux-orm";

//A selector that will retrieve posts and its underlying comments
export const postSelector = createSelector(
    orm,
    (session: any) => {
        return session.Post.all().toModelArray().map((post: any) => {
            console.log("post selector");
            console.log(post.comments.toRefArray());
            return {
                ...post.ref,
                comments: post.comments.toRefArray()
            }
        })
    }
);