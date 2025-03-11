import React, { useState ,useContext} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './bookslot.css';
import { AuthContext } from '../../context/AuthContext';
function BookSlot() {
  const location = useLocation();
  const { worker } = location.state;
   const { email } = useContext(AuthContext);
  const navigate = useNavigate();
    console.log(worker.email);
    console.log(email);
  const [form, setForm] = useState({
    name: '',
    address: '',
    city: '',
    phone: '',
    email: email, // Customer Email
    workerEmail: worker.email // Employee Email
  });
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/book/bookings', form);
      alert('Booking Confirmed ✅');
      navigate('/findworkers'); 
    } catch (err) {
      console.error('Error in Booking:', err);
      alert('Booking Failed ❌');
    }
  };

  return (
    <div className="booking-container">
       <div className="more-info">Book Slot</div>
       <div className="line"></div>
      <form onSubmit={handleSubmit}>
        <h3>Enter Details </h3>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Street Address" onChange={handleChange} required />
        <input type="text" name="city" placeholder="Town/City" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <button type="submit" className="book-btn">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookSlot;
