import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        number: '',
        comment: '',
        name: '',
        email: '',
    });

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={inputChangeHandler}
                />
            </div>
            <div>
                <label htmlFor="time">Time:</label>
                <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={inputChangeHandler}
                />
            </div>
            <div>
                <label htmlFor="number">Number:</label>
                <input
                    type="number"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={inputChangeHandler}
                />
            </div>
            <div>
                <label htmlFor="comment">Comment:</label>
                <textarea
                    type="comment"
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={inputChangeHandler}
                />
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={inputChangeHandler}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={inputChangeHandler}
                />
            </div>
            <Link to="/ConfirmationForm"><button aria-label='On Click'>Reserve a Table</button></Link>
        </form>
    );
};

export default BookingForm;