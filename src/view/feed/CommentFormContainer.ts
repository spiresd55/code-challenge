import CommentForm from "./CommentForm";
import { Field, reduxForm } from 'redux-form'

export default reduxForm({
    form: 'comment'
})(CommentForm)