import React from 'react'
import s from './Post.module.css'

type PostPropsType = {
  message:string 
  likesCount:number
}


export const Post:React.FC<PostPropsType> = (props) => {
  return (
    <div className={s.post}>
        <div className={s.item}>
             {props.message}
             {props.likesCount}
        </div>
    </div>
  )
}
