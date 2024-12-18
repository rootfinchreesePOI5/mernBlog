import React, { useState } from 'react'
import { logo, menu, profile } from '../assets/images'
import { NavLink , Link } from 'react-router-dom'

const Navbar = () => {

    const [menubar, setMenu] = useState(false);
    const Menu = () => {
        menubar === false? setMenu(true) : setMenu(false)
    }

  return (
    <header>
        <Link className='logo'>
            <img src={logo} alt="" />
            <h1>Hob<span>son's</span></h1>
    </Link>
        <nav style={ menubar === false ? {transform:"translateX(0)"} : {transform: "translateX(100%)"}}>
            <ul>
                <NavLink to={'/articles'}>Articles</NavLink>
                <NavLink to={'/categories'}>Categories</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>  
            </ul>
        </nav>
        <div className="user">
            <div className="menu" onClick={Menu} >
                <img src={menu} alt="" />
            </div>
            <Link to={'/login'}><img src={profile} alt="" /></Link>
        </div>

    </header>
  )
}

export default Navbar
