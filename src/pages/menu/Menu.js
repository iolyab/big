import React from 'react';
import specials from '../../components/utils/Specials';
import { Button } from '../../components/shared/button/Button';
import classes from './menu.module.scss'
import { Text } from '../../components/shared/title/Text';




const Menu = () => {
    return (
        <section id="menu" className={classes.menuContainer}>
            <div className={classes.menuHeader}>
                <Text className={classes.customTitle}>This week's specials!</Text>
                <Button label="Online Menu" className={classes.menuBtn}/>
            </div>
            <div className={classes.cards}>
                {
                    specials.map(specials => <div key={specials.id} className={classes.menuItems}>
                        <img src={specials.image} alt='' className={classes.menuImg}/>
                        <div className={classes.menuContent}>
                            <div className={classes.menuHeading}>
                                <Text variant="smallTitle">{specials.title}</Text>
                                <Text className={classes.price}>${specials.price}</Text>
                            </div>
                        <Text variant="description" className={classes.menuDescription}>{specials.description}</Text>
                        <Button label="Order a delivery" variant="orderBtn" />
                        </div>
                    </div>)
                }
            </div>
        </section>
    )
}

export default Menu;