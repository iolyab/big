import React from 'react';
import TestimonialCard from './TestimonialCard';
import gregory from '../images/Gregory.jpg';

const Cards = () => {
    return (
        <section className="cards-container">
            <TestimonialCard
            img={gregory}
            name="John"
            rating={3}
            comment="The food was delicious"
            />
            <TestimonialCard
            img={gregory}
            name="John"
            rating={4}
            comment="The food was delicious"
            />
            <TestimonialCard
            img={gregory}
            name="John"
            rating={5}
            comment="The food was delicious"
            />
            <TestimonialCard
            img={gregory}
            name="John"
            rating={5}
            comment="The food was delicious"
            />
        </section>
    );
};
export default Cards;