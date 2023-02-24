import React from "react";
import s from "./Profile.module.css";
import { MyPosts } from "./MyPost/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export type PostPropsType = {
  postData: PostType[];
};

export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};
export const Profile:React.FC<PostPropsType> = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={props.postData} />
    </div>
  );
};
