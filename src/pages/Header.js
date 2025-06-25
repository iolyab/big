import React from 'react';
import classes from './header.module.scss';
import { Button } from '../components/shared/button/Button';
import { Link } from 'react-router-dom';
import { Text } from '../components/shared/title/Text';




const Header = () => {
    return (
        <header id="header" className={classes.headerContainer}>
            <section>
                <div>
                    <Text variant='titleName'>Little Lemon</Text>
                    <Text variant='secondary'>Chicago</Text>
                    <Text variant="description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
                    <Link to="/Booking"><Button aria-label='On Click' label="Reserve a Table" className={classes.reserveButton}/></Link>
                </div>
                <div className={classes.bannerImg}>
                    <img src="/images/restauranfood.jpg" alt=''/>
                </div>
            </section>
        </header>
    );
};

export default Header;