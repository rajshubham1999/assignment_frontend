import React from 'react'
import icon from "../../asserts/icon.png"
import './header.css'

function Header() {
  return (
    <div className='header'>
        <img src={icon} alt="icon"/>
    </div>
  )
}

export default Header