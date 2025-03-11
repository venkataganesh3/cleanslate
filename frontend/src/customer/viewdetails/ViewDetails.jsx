import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ViewDetails.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaUserCircle } from "react-icons/fa";

function ViewDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { worker } = location.state || {};


  return (
    <div className="profile-container">
      <div className="more-info">More info</div>
      <div className="line"></div>
      <div className="profile-card">
        <div className="avatar">
          <FaUserCircle size={200} color="#800836" />
        </div>
        <div className="details">
          <div className="worker-email">Email: {worker.email}</div>
          <div className="worker-location">
            <FaMapMarkerAlt className="icon" /> {worker.location}
          </div>
          <div className="worker-email-detail">
            <FaEnvelope className="icon" /> {worker.email}
          </div>
          <div className="worker-phone">
            <FaPhone className="icon" /> {worker.phoneNumber}
          </div>
          <div className="worker-job">
            <strong>Job Type:</strong> {worker.employmentType}
          </div>
          <div className="worker-tasks">
          <strong>Tasks:</strong> {worker?.selectedTasks?.join(", ") || "No Tasks Available"}
          </div>
          <button className="book-btn"  onClick={() =>  navigate(`/book/${worker._id}`, {  state: { worker },}) } >  Book Slot  </button>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;
