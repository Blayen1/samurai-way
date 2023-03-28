import React, { ChangeEvent } from "react";
import { StoreType } from "../../../redux/store";
import { RootStateType } from "../../../redux/store";
import s from "./MyPost.module.css";
import { MyPosts } from "./MyPosts";
import { Post } from "./Post/Post";

export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

type PropsType = {
  store:StoreType
};
export const MyPostsContainer: React.FC<PropsType> = (props) => {
 
let state = props.store.getState()

  const addPost = () => {
      props.store.dispatch({type:'ADD-POST'})
    
  };

  const onPostChange = (newText:string) => {
    props.store.dispatch({type: 'UPDATE-NEW-POST-TEXT',newText:newText})

  };

  return (<MyPosts addPost={addPost} onPostChange={onPostChange} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
  );
};
