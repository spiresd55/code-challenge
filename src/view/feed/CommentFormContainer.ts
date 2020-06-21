import CommentForm from "./CommentForm";
import { reduxForm } from 'redux-form'
import { compose } from 'redux';


export default compose(
    reduxForm({}),
)(CommentForm);