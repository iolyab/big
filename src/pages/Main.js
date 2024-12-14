import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import BookingForm from './BookingForm';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/BookingForm" element={<BookingForm />} />
            </Routes>
        </main>
    );
};

export default Main;