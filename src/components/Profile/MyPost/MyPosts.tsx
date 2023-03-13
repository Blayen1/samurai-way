import React from "react";
import s from "./MyPost.module.css";
import { Post } from "./Post/Post";


export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

type PropsType = {
  posts: PostType[];
  addPost:(postMessage:string) => void
}
export const MyPosts: React.FC<PropsType> = (props) => {
  let postsElements = props.posts.map((el, index) => (
    <Post key={index} message={el.message} likesCount={el.likesCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    debugger;
    if(newPostElement.current){
      props.addPost(newPostElement.current?.value)
      
    }
  };

  return (
    <div>
      <div className="">My posts</div>
      <div className="">
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      {postsElements}
    </div>
  );
};
