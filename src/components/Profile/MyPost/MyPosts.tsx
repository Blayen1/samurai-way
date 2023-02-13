import React from 'react'
import s from './MyPost.module.css'
import { Post } from './Post/Post'

export const MyPosts = () => {
  return (
    <div>
        <div className="">
            My post
        </div>
        <div className="">
            <textarea name="" id="" ></textarea>
            <button >Add post</button>
        </div>
       <Post message={'Hi,how are you?'} likesCount={15}/>
       <Post message={'ya'} likesCount={20}/>
    </div>
  )
}
