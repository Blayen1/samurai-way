import React from "react";
import { ProfilePageType } from "../../../redux/state";
import s from "./MyPost.module.css";
import { Post } from "./Post/Post";

export const MyPosts: React.FC<ProfilePageType> = (state) => {
  let postsElements = state.posts.map((el, index) => (
    <Post key={index} message={el.message} likesCount={el.likesCount} />
  ));

let newPostElement = React.createRef<HTMLTextAreaElement>();


  const addPost = () => {
    let text = newPostElement.current?.value
    console.log(text);
  };

  return (
    <div>
      <div className="">My posts</div>
      <div className="">
        <textarea ref={newPostElement}></textarea>
        <button onClick={ addPost }>Add post</button>
      </div>
      {postsElements}
    </div>
  );
};
