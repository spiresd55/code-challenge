import {connect} from "react-redux";
import FeedView from "./FeedView";
import {bindActionCreators} from "redux";
import {FEED_ACTION_CREATOR} from "../../store/Feed/feedActions";
import {postSelector} from "../../store/Feed/feedSelectors";
import {displayLoader } from "../../store/UI/UISelectors";

const mapStateToProps = (state: any) => {
    return {
        posts: postSelector(state),
        displayLoader: displayLoader(state)
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators({ ...FEED_ACTION_CREATOR }, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeedView);
