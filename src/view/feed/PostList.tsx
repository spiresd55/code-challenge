import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import Post from "./Post";

//@ts-ignore
const PostList = ({posts, onPostClick, handleCommentSubmit}) => {
    return <Grid container
                 direction="row"
                 justify="center"
                 spacing={1}
                 >
            {posts.map((post: any) => (
                <Grid item xs={8}>
                    <Post post={post} onPostClick={onPostClick} handleCommentSubmit={handleCommentSubmit}/>
                </Grid>
            ))}

        </Grid>;
};

export default PostList;