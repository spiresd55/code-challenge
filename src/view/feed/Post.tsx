import React, {useState, FunctionComponent} from "react";
import {Card, CardContent, Typography, Button, Divider, CardHeader} from "@material-ui/core";
import CommentList from "./CommentList";
import CommentForm from "./CommentFormContainer";
import { makeStyles } from '@material-ui/core/styles';
import {PostFields} from "../../store/models/Post";

const useStyles = makeStyles({
    root: {
        padding: 10,
        marginTop: 20
    },
    title: {
        fontSize: 14,
        textAlign: "left"
    },
    body: {
        textAlign: "left"
    },
    divider: {
      marginTop: 20
    },
    commentBtn: {
        float: "left"
    }
});

interface ComponentProps {
    post: PostFields;
    onPostClick: (postId: number) => void;
    handleCommentSubmit: (values: any, postId: number) => void;
};

const Post: FunctionComponent<ComponentProps> = ({post, onPostClick, handleCommentSubmit}) => {

    const classes = useStyles();

    //Opens the comments section, the parent container dispatches action to retrieve comments
    const handleClick = () => {
        setIsOpen(!isOpen);

        //Call back to send to parent component
        onPostClick(post.id);
    };

    //This will send the values of the form, and the ID of the post to the parent component
    const onCommentSubmit = (values: any) => {
        handleCommentSubmit(values, post.id)
    };

    //UseState hook
    const [isOpen, setIsOpen] = useState(false);

    return <Card className={classes.root}>
            <CardHeader title={post.title}/>
            <CardContent>
                <Typography
                    variant="body2"
                    className={classes.body}
                    component="p">
                    {post.body}
                </Typography>
                {!isOpen && (
                    <React.Fragment>
                        <Divider className={classes.divider}/>
                        <Button
                        size="small"
                        variant="text"
                        onClick={handleClick}
                        className={classes.commentBtn}>
                        Show Comments
                        </Button>
                    </React.Fragment>
                )}
                {(isOpen && post.comments.length > 0) && (
                    <React.Fragment>
                        <Divider className={classes.divider}/>
                        <Typography className={classes.title}>{post.comments.length} Comments</Typography>
                        <CommentList comments={post.comments}/>
                    </React.Fragment>
                )}
                {(isOpen) && (
                    <CommentForm form={`comment${post.id}`} onSubmit={onCommentSubmit} />
                )}
            </CardContent>
        </Card>;
};

export default Post;