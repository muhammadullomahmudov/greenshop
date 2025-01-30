import React from 'react'
import './Header.css'
import Logo from '../Logo/Logo'
import Navlink from '../Navlink/Navlink'
import Actions from '../Actions/Actions'
const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header__inner">
          <Logo />

          <Navlink />

          <Actions />
        </div>
      </div>
    </header>
  )
}

export default Header