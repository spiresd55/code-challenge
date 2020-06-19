import React, {useEffect} from "react";
import {Grid, Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    header: {
        textAlign: "left",
        "& span": {
            fontSize: 12,
        }
    },
    body: {
        fontSize: 14,
        textAlign: "left"
    },
    root: {
      marginBottom: 10
    }
});

//@ts-ignore
const CommentList = ({comments}) => {
    const classes = useStyles();

    return <Grid container
                 direction="row"
                 className={classes.root}
                 justify="center">
        {comments.map((comment: any) => (
            <Grid item xs={12}>
                <Typography component="div" variant="subtitle1" className={classes.header}>
                    <Typography component="span" variant={"inherit"} color="textSecondary">{comment.email}</Typography>
                </Typography>
                <Typography className={classes.body}>{comment.body}</Typography>
            </Grid>
        ))}

    </Grid>;
};

export default CommentList;