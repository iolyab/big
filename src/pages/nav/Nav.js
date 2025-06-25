import React from 'react';
import classes from './nav.module.scss';
import { Link } from 'react-router-dom';



const Nav = () => {
    return (
        <nav className={classes.navbar}>
            <a href='/' className={classes.logo}>
                <img src="/images/Logo .svg" alt='logo'/>
            </a>
            <div className={'menu-icon'}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <ul className={'nav-links'}>
                <li>
                    <a href="#header">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#menu">Menu</a>
                </li>
                <li>
                    <Link to="/booking">Reservations</Link>
                </li>
                <li>
                    <a href="#menu">Order online</a>
                </li>
                <li>
                    <a href="#login">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;