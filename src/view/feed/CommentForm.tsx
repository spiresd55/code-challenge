import React, {FunctionComponent} from 'react'
import { Field, InjectedFormProps } from 'redux-form'
import {TextField, Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    submitBtn: {
        float: "left",
        marginTop: 10,
    }
});

//TODO: Move To Seperate file and make label customizable
const renderTextField = ({
     input,
     label,
     meta: { touched, error },
     ...custom
}: any) => (
    <TextField
        label="Leave A Comment"
        multiline
        rows={4}
        variant="outlined"
        fullWidth={true}
        {...input}
        {...custom}
    />
);

const CommentForm: FunctionComponent<InjectedFormProps> = ({handleSubmit }) => {
    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="comment"
                component={renderTextField}
                type="text"
                label={"Leave A Comment"}
                placeholder="Comment"
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