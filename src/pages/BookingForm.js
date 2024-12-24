import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';



const BookingForm = (props) => {
  
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");
   const [comment, setComment] = useState("");
   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");
   const [times, setTimes] = useState("")

   const handleSubmit = (e) => {
   e.preventDefault();
   props.SubmitForm(e);
   };

   const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <h1>Book your table!</h1>
            </div>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
            </div>
            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                <option value="">Select a Time</option>
               {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests</label>
              <input id="book-guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required></input>
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div>
              <label htmlFor="book-comment">Commment</label>
              <input id="book-comment" value={comment} onChange={(e) => {setComment(e.target.value)}} type={"text"}></input>
            </div>
            <div>
              <label htmlFor="book-name">Name</label>
              <input id="book-name" value={name} onChange={(e) => {setName(e.target.value)}} type={"text"}></input>
            </div>
            <div>
              <label htmlFor="book-email">Email</label>
              <input id="book-email" value={email} onChange={(e) => {setEmail(e.target.value)}} type={"email"}></input>
            </div>
            <div>
              <Link to="/ConfirmationForm"><button aria-label='On Click'>Reserve a Table</button></Link>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;