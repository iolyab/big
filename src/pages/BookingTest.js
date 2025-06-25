import React, { useState } from 'react';

function BookingTest() {
    const [name, setName] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor="name">Name:
                        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}></input>
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default BookingTest;