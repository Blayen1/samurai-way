import React from "react";
import s from "./Profile.module.css";
import { MyPosts } from "./MyPost/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from "../../redux/state";



type PropsType = {
  state:ProfilePageType
  dispatch:(action:any) => void
}

export const Profile: React.FC<PropsType> = ( {state,dispatch,...restProps} ) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={state.posts} newPostText={state.newPostText} dispatch={dispatch} />
    </div>
  );
};
