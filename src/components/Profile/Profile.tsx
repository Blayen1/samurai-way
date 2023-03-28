import React from "react";
import s from "./Profile.module.css";
import { MyPosts } from "./MyPost/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { StoreType } from "../../redux/store";
import { MyPostsContainer } from "./MyPost/MyPostsContainer";
import { RootStateType } from "../../redux/store";



type PropsType = {
  store:StoreType
}

export const Profile: React.FC<PropsType> = ( {store}) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostsContainer store={store} />
    </div>
  );
};
