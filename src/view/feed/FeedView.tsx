import React, {useEffect} from "react";

//@ts-ignore
const FeedView = ({ test, actions}) => {
    useEffect(() => {
        console.log('Feed View Loaded')
        actions.getPosts();
    }, []); //Reset the message when the msg prop changes

    return <div>Feed</div>;
};

export default FeedView;