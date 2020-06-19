import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import PostList from "./PostList";

//@ts-ignore
const FeedView = ({ test, actions, posts}) => {
    useEffect(() => {
        console.log('Feed View Loaded')
        actions.getPosts();
    }, []); //Reset the message when the msg prop changes

    const onPostClick = (postId: number) => {
        actions.getComments(postId);
    };

    const handleCommentSubmit = (props: any) => {
        console.log(props);
        console.log("submit comment")
    };

    return <Grid container
                 direction="row"
                 justify="center">
                <PostList
                    posts={posts}
                    onPostClick={onPostClick}
                    handleCommentSubmit={handleCommentSubmit}
                />
            </Grid>;
};

export default FeedView;