import React, {FunctionComponent} from "react";
import {Grid} from "@material-ui/core";
import Post from "./Post";
import {PostFields} from "../../store/models/Post";

interface ComponentProps {
    posts: PostFields[];
    onPostClick: (postId: number) => void;
    handleCommentSubmit: (values: any, postId: number) => void;
}

const PostList: FunctionComponent<ComponentProps> = ({posts, onPostClick, handleCommentSubmit}) => {
    return <Grid container
                 direction="row"
                 justify="center"
                 spacing={1}
                 >
            {posts.map((post: any, index) => (
                <Grid item xs={11} md={8} key={`post${index}`}>
                    <Post post={post} onPostClick={onPostClick} handleCommentSubmit={handleCommentSubmit}/>
                </Grid>
            ))}
        </Grid>;
};

export default PostList;