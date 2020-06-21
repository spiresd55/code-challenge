import React, {FunctionComponent} from 'react'
import { Field, InjectedFormProps } from 'redux-form'
import {TextField, Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    submitBtn: {
        float: "left",
        marginTop: 10,
    }
});

//Move To Seperate file
const renderTextField = ({
                             input,
                             label,
                             meta: { touched, error },
                             ...custom
                         }: any) => (
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}

        label="Leave A Comment"
        multiline
        rows={4}
        variant="outlined"
        fullWidth={true}
        {...input}
        {...custom}
    />
)

const CommentForm: FunctionComponent<InjectedFormProps> = ({handleSubmit }) => {
    //@ts-ignore
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