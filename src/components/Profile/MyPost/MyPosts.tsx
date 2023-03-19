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
  dispatch:(action?:any) => void
  newPostText: string;
};
export const MyPosts: React.FC<PropsType> = (props) => {
  let postsElements = props.posts.map((el, index) => (
    <Post key={index} message={el.message} likesCount={el.likesCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
      props.dispatch({type:'ADD-POST'})
    
  };

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newText = e.currentTarget.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT',newText:newText})

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
