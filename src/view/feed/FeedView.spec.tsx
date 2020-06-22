import React from "react";
import {mount} from "enzyme";
import FeedView from "./FeedView";
import '@testing-library/jest-dom'
import {Provider} from "react-redux";

import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("FeedView", () => {
   const initialState = {};
   const store = mockStore(initialState);

   it("Should render without crashing", () => {
      const mockGetPosts = jest.fn();
      const wrapper = mount(<FeedView actions={{getPosts: mockGetPosts}} posts={[]} displayLoader={true}/>);
      expect(wrapper).toBeTruthy();
      expect(mockGetPosts).toHaveBeenCalled();
      expect(wrapper.find("circle").length).toBe(1); //Loader
   });

   it("Should render posts and show comments once user clicks on post. User will submit form.", () => {
      const mockGetPosts = jest.fn();
      const mockGetComments = jest.fn();
      const mockCreateComment = jest.fn();

      const mockComment = {id: 1, postId: 1, name: 'test', email: 'test', body: 'test' };
      const mockPost = {id: 1, userId: 2, title: 'test', body: 'test', comments: [mockComment]};

      const wrapper = mount(
          <Provider store={store}>
            <FeedView actions={{
               getPosts: mockGetPosts,
               createComment: mockCreateComment,
               getComments: mockGetComments}}
             posts={[mockPost]} displayLoader={false}/>
          </Provider>
      );
      expect(wrapper).toBeTruthy();
      expect(mockGetPosts).toHaveBeenCalled();


      //Posts are loaded
      const posts = wrapper.find("Post");
      expect(posts.length).toBe(1);

      //User clicks on first post and opens the comments
      const firstPost = posts.at(0);
      firstPost.find("button").simulate("click");
      expect(mockGetComments).toHaveBeenCalledWith(1);
      const commentText = wrapper.find("CommentList").find("p").text();
      expect(commentText).toBe("test");

      //User Submits a comment
      wrapper.find("CommentForm").props().handleSubmit();
      expect(mockCreateComment).toHaveBeenCalledWith(undefined, 1);
   });
});