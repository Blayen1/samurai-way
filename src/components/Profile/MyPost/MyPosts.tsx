import React, { ChangeEvent } from "react";
import s from "./MyPost.module.css";
import { Post } from "./Post/Post";

export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

type PropsType = {
  posts: PostType[];
  newPostText: string;
  onPostChange:(newText:string)=>void
  addPost:()=>void
};
export const MyPosts: React.FC<PropsType> = (props) => {
  let postsElements = props.posts.map((el, index) => (
    <Post key={index} message={el.message} likesCount={el.likesCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
      props.addPost()
    
  };

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newText = e.currentTarget.value;
  props.onPostChange(newText)
  };

  return (
    <div>
      <div className="">My posts</div>
      <div className="">
        <textarea
          value={props.newPostText}
          ref={newPostElement}
          onChange={onPostChange}
        />
        <button onClick={addPost}>Add post</button>
      </div>
      {postsElements}
    </div>
  );
};
