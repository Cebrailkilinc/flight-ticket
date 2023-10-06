import React from 'react'
import NavbarLanguage from './components/NavbarLanguage';
import NavbarLogin from './components/NavbarLogin';
import NavbarRegister from './components/NavbarRegister';
import "./styles/navbar.scss"
import { Link } from 'react-router-dom';

const NavbarLayout = () => {
  return (
    <div className='navbar'>
      <Link style={{paddingLeft: 13, textDecoration: 'none'}} to={"/"}>
        <div className='navbar-left-child' >
          FLY PGS
        </div>
      </Link>
      <div className='navbar-right-child' >
        <div className='navbar-login' ><NavbarLogin /></div>
        <div className='navbar-register' ><NavbarRegister /></div>
        <div className='navbar-language' ><NavbarLanguage /></div>
      </div>
    </div>
  )
}

export default NavbarLayout;
