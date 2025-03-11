import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from './../../context/AuthContext';
import './UpdateJob.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UpdateJob() {
     const { email } = useContext(AuthContext);
     const [employmentType, setEmploymentType] = useState("");
     const [selectedTasks, setSelectedTasks] = useState([]);
     const [phoneNumber, setPhoneNumber] = useState("");
     const [location, setLocation] = useState("");

     const tasks = ["Dishwashing", "Laundry", "Cleaning", "Help in Arranging", "Packers"];

     useEffect(() => {
         const fetchDetails = async () => {
             try {
                 const res = await axios.post("http://localhost:5000/worker/getjob", { email });
                 const data = res.data;
                 setEmploymentType(data.employmentType || "");
                 setSelectedTasks(data.selectedTasks || []);
                 setPhoneNumber(data.phoneNumber || "");
                 setLocation(data.location || "");
             } catch (error) {
                 console.error("Error fetching worker details:", error);
             }
         };

         if (email) {
             fetchDetails();
         }
     }, [email]);

     const handleEmploymentChange = (type) => {
         setEmploymentType(type);
     };

     const handleTaskSelection = (task) => {
         setSelectedTasks((prevTasks) =>
             prevTasks.includes(task)
                 ? prevTasks.filter((t) => t !== task)
                 : [...prevTasks, task]
         );
     };

     const handleSubmit = async () => {
         const employeeData = {
             employmentType,
             selectedTasks,
             phoneNumber,
             location,
             email
         };
         console.log(employeeData);
         try {
             await axios.put("http://localhost:5000/worker/updatejob", employeeData);
             alert("Details submitted successfully!");
         } catch (error) {
             console.error("Error submitting employee data:", error);
             alert("Failed to submit details!");
         }
     };

     return (
         <div className="dashboard-container">
             <div className="card">
                 <h1 className="title">Change Employment Details</h1>
                 <div className="button-group">
                     <button
                         className={employmentType === "Part-Time" ? "selected" : "button"}
                         onClick={() => handleEmploymentChange("Part-Time")}
                     >
                         Part-Time
                     </button>
                     <button
                         className={employmentType === "Full-Time" ? "selected" : "button"}
                         onClick={() => handleEmploymentChange("Full-Time")}
                     >
                         Full-Time
                     </button>
                 </div>

                 <h2 className="subtitle">Select Work Options</h2>
                 <div className="task-list">
                     {tasks.map((task) => (
                         <label key={task} className="task-item">
                             <input
                                 type="checkbox"
                                 checked={selectedTasks.includes(task)}
                                 onChange={() => handleTaskSelection(task)}
                             />
                             {task}
                         </label>
                     ))}
                 </div>

                 <h2 className="subtitle">Enter Phone Number</h2>
                 <input
                     type="text"
                     value={phoneNumber}
                     onChange={(e) => setPhoneNumber(e.target.value)}
                     placeholder="Enter phone number"
                     className="input"
                 />

                 <h2 className="subtitle">Enter Location</h2>
                 <input
                     type="text"
                     value={location}
                     onChange={(e) => setLocation(e.target.value)}
                     placeholder="Enter location"
                     className="input"
                 />

                 <Link to="/dashboard" className="submit-button" onClick={handleSubmit}>
                     Submit
                 </Link>
             </div>
         </div>
     );
};

export default UpdateJob;
