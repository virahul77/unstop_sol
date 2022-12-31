import React, { useState } from 'react'
import bookSeats from './util/BookSeat';
import {bookedSeats} from './util/BookSeat';


const BookForm = ({setShowList}) => {
  const availableSeats = 80 - bookedSeats.size;
  const [name,setName] = useState('');
  const [seats,setSeats] = useState('');
  const [error,setError] = useState('')
  const handleSubmit =()=> {
    if(!seats) return setError('please enter number of seats'); 
    if(seats < 0) return setError('seat number can not be negative');
    if(seats>availableSeats) return setError('value exceeds availbale seats');
    let x = bookSeats(Number(seats));
    console.log(x);
    setShowList(true)
    setError('');
  }
  return (
    <div className="form">
        <h1>Book Online Tickets</h1>
        <p>Enter You Name</p>
        <input type="text" value={name}
        onChange={(e)=>setName(e.target.value)} />
        <p>Enter Number of Seats</p>
        <input type="number" value={seats} 
        onChange={(e)=>setSeats(e.target.value)} min='0'/>
        <br />
        <small>{error}</small>
        <br />
        <p>Available Seats : {availableSeats}</p>
        <br />
        <button onClick={handleSubmit}>Book Ticket &nbsp;&rarr;</button>
      </div>
  )
}

export default BookForm