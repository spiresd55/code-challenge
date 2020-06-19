import React, {useEffect, useState} from "react";
import {Card, CardContent, Typography, Button, Divider, CardHeader} from "@material-ui/core";
import CommentList from "./CommentList";
import CommentForm from "./CommentFormContainer";
import { makeStyles } from '@material-ui/core/styles';

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


//@ts-ignore
const Post = ({post, onPostClick, handleCommentSubmit}) => {

    const classes = useStyles();

    const handleClick = () => {
        console.log("handling click");
        console.log(isOpen);
        setIsOpen(!isOpen);
        //Call back to send to parent component
        console.log(post.id);
        onPostClick(post.id);
    };

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
                {isOpen && (
                    <React.Fragment>
                        <Divider className={classes.divider}/>
                        <Typography className={classes.title}>{post.comments.length} Comments</Typography>
                        <CommentList comments={post.comments}></CommentList>
                        <CommentForm onSubmit={handleCommentSubmit}/>
                    </React.Fragment>
                )}
            </CardContent>
        </Card>;
};

export default Post;