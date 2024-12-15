import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import BookingForm from './BookingForm';
import Home from './Home';
import ConfirmationForm from './ConfirmationForm';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/BookingForm" element={<BookingForm />} />
                <Route path="/ConfirmationForm" element={<ConfirmationForm />} />
                <Route path="/Home" element={<Home />} />
            </Routes>
        </main>
    );
};

export default Main;