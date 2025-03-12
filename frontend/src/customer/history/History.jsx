import React, { useEffect, useState } from "react";
import axios from "axios";
import "./History.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function History() {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://cleanslate-qf17.vercel.app/book/history")
      .then((res) => setHistory(res.data))
      .catch((err) => console.error("Error fetching history:", err));
  }, []);

  const handleViewDetails = async (email, record) => {
    try {
      console.log("Email:", email);
      const res = await axios.post("https://cleanslate-qf17.vercel.app/getWorker", {
        email: email,
      });
      console.log("Worker ID:", res.data);
      navigate(`/viewdetails/${res.data}`, { state: { worker: res.data } });
    } catch (err) {
      console.error("Error fetching workerId:", err);
    }
  };
  
  return (
    <div className="customer-history">
      <h3 style={{ textAlign: "center" }}>Previous Booking</h3>
      <div className="line"></div>
 
      {history.length === 0 ? (
        <p>No Previous Bookings 😕</p>
      ) : (
        <div className="history-card-container">
          {history.map((record, index) => (
            <div className="history-card" key={index}>
              <h4>{record.name}</h4>
              <p>Job Type: <span>Part-Time</span></p>
              <p>Phone: {record.phone}</p>
              <div className="location">
                <FaMapMarkerAlt className="icon" /> <span>{record.city}</span>
              </div>
              <p>Work Completed Date: {new Date(record.date).toLocaleDateString()}</p>
              <div className="buttons">
                {/* <button
                  className="details-btn"
                  onClick={() => handleViewDetails(record.workerEmail, record)}
                >
                  View Details
                </button> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;
