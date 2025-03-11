import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "./../assets/center.png";
import "./GetStarted.css";
import { AuthContext } from "./../context/AuthContext.jsx";

function GetStarted() {
  const navigate = useNavigate();
  const { setUserRole } = useContext(AuthContext);

  const handleJoinWithUs = () => {
    setUserRole("worker");
    navigate("/worker/auth");
  };

  const handleFindWorkers = () => {
    setUserRole("customer");
    navigate("/auth");
  };

  return (
    <div className="get-started-container">
      <img src={img1} alt="Hire in 48 hours" className="banner-image" />
      <div className="button3">
        <button className="join-btn" onClick={handleJoinWithUs}>
          Join with us
        </button>
        <button className="find-workers-btn" onClick={handleFindWorkers}>
          Find Workers
        </button>
      </div>
    </div>
  );
}

export default GetStarted;