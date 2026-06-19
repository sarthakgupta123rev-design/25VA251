import React from 'react'
import {Link, NavLink} from 'react-router'
import './Nav.jsx';
export default function Galery() {
  return (
    <div>
    <nav className='navbar'>
    <h2 className='logo'>MySite</h2>
    <ul className='nav-link'>
    <li><NavLink to="/" className={({isActive})} => isActive ?"isActive"</li></NavLink></li>
    </ul>
    </nav></div>
  )
}
