import React from 'react';
import TestimonialCard from '../utils/TestimonialCard';
import { Text } from '../shared/title/Text';
import classes from './cards.module.scss'


const Cards = () => {
    return (
        <div className={classes.testContainer}>
            <Text className={classes.customTitle}>Testimonials</Text>
        <div className={classes.cardsContainer}>
            <TestimonialCard
            img= "/images/Gregory.jpg"
            name="Gregory"
            rating={3}
            comment="Nice presentation, but the portions were smaller than expected."
            />
            <TestimonialCard
            img="/images/woman.jpg"
            name="Maria"
            rating={4}
            comment="Loved the cozy atmosphere and the salad was spot on!"
            />
            <TestimonialCard
            img="/images/man.jpg"
            name="John"
            rating={5}
            comment="Everything was perfect—from the friendly staff to the unforgettable dishes!"
            />
            <TestimonialCard
            img="/images/woman1.jpg"
            name="Lisa"
            rating={5}
            comment="Absolutely incredible food and service — can’t wait to come back!"
            />
        </div>
        </div>
    );
};
export default Cards;