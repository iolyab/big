import React from 'react';
import guests from './Guests';

const Reviews = () => {
    return (
        <div className='reviews-container'>
            <div className='reviews-header'>
                <h2>Our guests!</h2>
            </div>
            <div className='reviews-cards'>
                {
                    guests.map(guests => <div key={guests.id} className='reviews-items'>
                        <img src={guests.image} alt="" className='reviewsimg'/>
                        <div>
                            <div>
                                <h5>{guests.name}</h5>
                                <h4>{guests.rating}</h4>
                                <p>{guests.comment}</p>
                            </div>
                        </div>
                    </div>)
                };
            </div>
        </div>
    );
};

export default Reviews;