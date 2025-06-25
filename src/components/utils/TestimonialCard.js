import React from 'react';
import classes from '../cards/cards.module.scss'
import { Text } from '../shared/title/Text';

const TestimonialCard = ({ img, name, rating, comment }) => {
    return (
        <div className={classes.testimonialCard}>
            <img src={img} alt={`${name}'s img`} className={classes.testimonialImg} />
            <div>
                <Text variant="smallTitle" className={classes.name}>{name}</Text>
                <Text className={classes.rating}>⭐{rating}/ 5</Text>
                <Text className={classes.review}>{comment}</Text>
            </div>
        </div>
    );
};

export default TestimonialCard;