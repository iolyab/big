import React from 'react';
import logo from '../images/Logo .svg';


const Nav = () => {
    return (
        <nav className={'navbar'}>
            <a href='/' className="logo">
                <img src={logo} alt='logo'/>
            </a>
            <div className={'menu-icon'}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <ul className={'nav-links'}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/">Order online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;