import React from 'react'
import s from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

type PropsType = {
    name:string
    id:number
}



export const DialogsItem:React.FC<PropsType> = (props) => {
 
    let path = '/dialogs/' + props.id 

    return (
    <div className={s.dialog}>
              <NavLink to={path}>{props.name}</NavLink>
          </div>
  )
}
