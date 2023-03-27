import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'


export const Header = () => {
  return (
    <div>
        <ul className='list'>
            <NavLink to={"/"} className={({ isActive }) =>
              isActive ? "active--link link" : "link"
            }>
              Home
            </NavLink>
            <NavLink to={"/users"} className={({ isActive }) =>
              isActive ? "active--link link" : "link"
            }>
                Users
            </NavLink>
            <NavLink to={"/posts"} className={({ isActive }) =>
              isActive ? "active--link link" : "link"
            }>
                Posts
            </NavLink>
        </ul>
    </div>
  )
}
