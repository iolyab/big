import React from 'react';
import { Text } from '../../components/shared/title/Text';
import classes from './about.module.scss';

const About = () => {
    return(
       <section id="about" className={classes.aboutSection}>
        <div>
        <Text variant='titleName'>Little Lemon</Text>
        <Text variant='secondary'>Chicago</Text>
        <Text variant="description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
        </div>
         <div className={classes.aboutImg}>
                <img src="/images/Mario and Adrian A.jpg" alt=''/>
        </div>
        <div className={classes.aboutImgSecond}>
                <img src="/images/Mario and Adrian B.jpg" alt=''/>
        </div>
       </section>
    )
}

export default About;