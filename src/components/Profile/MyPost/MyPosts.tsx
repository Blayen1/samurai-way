import React from "react";
import { PostType } from "../Profile";
import s from "./MyPost.module.css";
import { Post } from "./Post/Post";


type PropsType = {
    posts:PostType[]
}


export const MyPosts:React.FC<PropsType> = (props) => {
  

  let postsElements = props.posts.map((el) => (
    <Post message={el.message} likesCount={el.likesCount} />
  ));

  return (
    <div>
      <div className="">My posts</div>
      <div className="">
        <textarea name="" id=""></textarea>
        <button>Add post</button>
      </div>
      {postsElements}
    </div>
  );
};
