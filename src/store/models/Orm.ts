import {ORM} from "redux-orm";
import {Post} from "./Post";
import {Comment} from "./Comment";

const ormInstance = new ORM({
    //@ts-ignore
    stateSelector: state => state.entities,
});
ormInstance.register(Post, Comment);

export default ormInstance;