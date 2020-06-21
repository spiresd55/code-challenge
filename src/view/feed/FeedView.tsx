import React, {useEffect, FunctionComponent} from "react";
import {Grid, CircularProgress} from "@material-ui/core";
import PostList from "./PostList";
import {PostFields} from "../../store/models/Post";
import {makeStyles} from "@material-ui/core";
import {displayLoader} from "../../store/UI/UISelectors";

const useStyles = makeStyles({
    root: {
        marginTop: 60,
    },
    loader: {
        top: "50%",
        position: "fixed"
    }
});

interface ComponentProps {
    actions: any,
    posts: PostFields[];
    displayLoader: boolean;
}

const FeedView: FunctionComponent<ComponentProps> = ({ actions, posts, displayLoader}) => {
    const classes = useStyles();

    useEffect(() => {
        actions.getPosts();
    }, []); //Reset the message when the msg prop changes

    const onPostClick = (postId: number) => {
        actions.getComments(postId);
    };

    const handleCommentSubmit = (values: any, postId: number) => {
        actions.createComment(values.comment, postId);
    };

    return <Grid container
                 className={classes.root}
                 direction="row"
                 justify="center">
                {displayLoader && <CircularProgress className={classes.loader}/> }
                {!displayLoader &&
                    <PostList
                        posts={posts}
                        onPostClick={onPostClick}
                        handleCommentSubmit={handleCommentSubmit}
                    />
                }

            </Grid>;
};

export default FeedView;