import React from 'react'
import s from './Profile.module.css'
import { MyPosts } from './MyPost/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = () => {
  return (
    <div className={s.content}>
        
        <ProfileInfo />  
        <MyPosts />

    </div>
  )
}
