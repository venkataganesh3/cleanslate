import React, { useEffect, useState } from "react";
import axios from "axios";
import './Bookings.css';

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/book/bookings")
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => console.error("Error fetching bookings:", err));
  }, []);

  const deleteBooking = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/book/bookings/${id}`);
      alert("Booking Completed ✅");
      setBookings(bookings.filter((booking) => booking._id !== id));
    } catch (err) {
      console.error("Error deleting booking:", err);
      alert("Failed to Delete ❌");
    }
  };
  

  return (
    <div className="booking-container">
      <h2>All Bookings </h2>
      <div className="line"></div>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Worker Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.name}</td>
              <td>{booking.address}</td>
              <td>{booking.city}</td>
              <td>{booking.phone}</td>
              <td>{booking.email}</td>
              <td>{booking.workerEmail}</td>
              <td>
                <button onClick={() => deleteBooking(booking._id)} className="delete-btn">
                  Completed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {bookings.length === 0 && <p>No Bookings Found 😕</p>}
    </div>
  );
}

export default Bookings;
