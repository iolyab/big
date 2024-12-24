import React from 'react';

const TestimonialCard = ({ img, name, rating, comment }) => {
    return (
        <div className="testimonial-card">
            <img src={img} alt={`${name}'s img`} className="testimonial-img" />
            <div className="testimonial-content">
                <h3>{name}</h3>
                <p>{rating}⭐ / 5</p>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;