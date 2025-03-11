import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from './../../context/AuthContext';
import axios from 'axios';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function DashBoard() {
  const { email } = useContext(AuthContext);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.post("http://localhost:5000/worker/getjob", {
          email
        });
        console.log(res);
        setDetails(res.data);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    if (email) {
      fetchDetails();
    }
  }, [email]);

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-avatar">
          <FaUserCircle size={150} color="#0b644c" />
        </div>
        <h1 className="dashboard-title">{details.name}</h1>
        <div className="dashboard-details">
          <h2>Email: {details.email}</h2>
          <h2>Phone Number: {details.phoneNumber}</h2>
          <h2>Employment Type: {details.employmentType}</h2>
          <h2>Location: {details.location}</h2>
          <h2>Selected Tasks: {details.selectedTasks?.join(', ')}</h2>
        </div>
        <Link to="/updatejob" className="update-link">Update Profile</Link>
      </div>
    </div>
  );
}

export default DashBoard;