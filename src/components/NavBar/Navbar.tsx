import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={s.nav}>
        <div><NavLink to={"/profile"} className={({isActive}) => isActive ? s.active : s.item}>Profile</NavLink></div>
        <div><NavLink to={"/dialogs"} className={({isActive}) => isActive ? s.active : s.item}>Messages</NavLink></div>
        <div><NavLink to="#">News</NavLink></div>
        <div><NavLink to="#">Music</NavLink></div>
        <div><NavLink to="#">Settings</NavLink></div>
    </nav>
  )
}
