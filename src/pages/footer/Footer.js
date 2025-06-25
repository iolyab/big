import React from 'react';
import classes from './footer.module.scss';
import { Text } from '../../components/shared/title/Text';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={classes.footerSection}>
                <div className={classes.infoImg}>
                    <img src="/images/Logo .svg" alt=''/>
                </div>
                <div className={classes.infoContainer}>
                    <Text className={classes.footerTitle}>Navigation</Text>
                    <ul>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><Link to="/booking">Reservations</Link></li>
                        <li><a href="#menu">Order Online</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>
                <div className={classes.infoContainer}>
                    <Text className={classes.footerTitle}>Contact</Text>
                    <ul>
                        <li>123 City Street</li>
                        <li>+123-456-789</li>
                        <li>littlelemon@dmail.com</li>
                    </ul>
                </div>
                <div className={classes.infoContainer}>
                    <Text className={classes.footerTitle}>Social Media Links</Text>
                    <ul>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Linkedin</a></li>
                    </ul>
                </div>
        </footer>
    );
};

export default Footer;