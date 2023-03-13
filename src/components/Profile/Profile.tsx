import React from "react";
import s from "./Profile.module.css";
import { MyPosts } from "./MyPost/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from "../../redux/state";

type PropsType = {
  state: ProfilePageType;
};

export const Profile: React.FC<PropsType> = ({ state }) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={state.posts} />
    </div>
  );
};
