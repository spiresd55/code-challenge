import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {TextField, Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    submitBtn: {
        float: "left",
        marginTop: 10,
    }
});

const CommentForm = (props: any) => {
    const {handleSubmit, pristine, reset, submitting} = props
    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="comment"
                component={({ input }: any) => (
                    <TextField
                        id="outlined-multiline-static"
                        label="Leave A Comment"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth={true}
                        {...input}
                    />)
                }
                type="text"
                placeholder="First Name"
            />
            <Button className={classes.submitBtn}
                    type="submit"
                    color={"primary"}
                    variant="contained">
                Comment
            </Button>
        </form>
    )
};

export default CommentForm;