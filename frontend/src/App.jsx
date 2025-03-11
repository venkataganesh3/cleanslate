import React, { useContext } from 'react';
import HomePage from './homepage/HomePage.jsx';
import './App.css';
import logo from './assets/logo2[1][1].png';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Footer from './footer/Footer.jsx';
import GetStarted from './getstarted/GetStarted.jsx';
import Login from './authentication/Login.jsx';
import SignUp from './authentication/SignUp.jsx';
import Auth from './authentication/Auth.jsx';
import WorkerAuth from './workerauthentication/Auth.jsx';
import { AuthContext } from './context/AuthContext.jsx';
import WLogin from './workerauthentication/WLogin.jsx';
import WSignUp from './workerauthentication/WSignUp.jsx';
import Dashboard from './worker/dashboard/DashBoard.jsx';
import UpdateJob from './worker/updatejob/UpdateJob.jsx';
import FindWorkers from './customer/findworkers/FindWorkers.jsx';
import ViewDetails from './customer/viewdetails/ViewDetails.jsx';
import BookSlot from './customer/bookslot/BookSlot.jsx';
import Bookings from './customer/bookings/Bookings.jsx';
import Tasks from './worker/tasks/Tasks.jsx';
import Help from './customer/help/Help.jsx';
import History from './customer/history/History.jsx';
import { FaSignOutAlt } from 'react-icons/fa';
const App = () => {
  const { token, userRole, logout } = useContext(AuthContext);
  const about = "about";
  const services = "services";
  const contact = "contact";
  // if (window.location.pathname !== '/') {
  //   window.location.href = '/';
  // }
  return (
    <Router>
      <div>
        <div className="nav">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="" className='logo' />
              <h1>CleanSlate</h1>
            </div>
          </Link>

          {token ? (
            userRole === "customer" ? (
              <div className="part2">
                <Link to="/findworkers">Find Workers</Link>
                <Link to="/bookings">Bookings</Link>
                <Link to="/history">History</Link>
                <Link to="/help">Help</Link>
                <FaSignOutAlt className="logout-icon" onClick={logout} />
              </div>
            ) : userRole === "worker" ? (
              <div className="part2">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/tasks">Tasks</Link>
                <Link to="/updatejob">Update Job</Link>
                <FaSignOutAlt className="logout-icon" onClick={logout} />
              </div>
            ) : <div className="sidebar">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/tasks">Tasks</Link>
            <Link to="/updatejob">Update Job</Link>
            <FaSignOutAlt className="logout-icon" onClick={logout} />
          </div>
          ) : (
            
            <div className="part2">
                 
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          )}

          {!token && <Link to="/getstarted" className='started'>Get Started</Link>}
        </div>

        <Routes style={{minHeight:'100vh'}}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HomePage navig={about} />} />
          <Route path="/services" element={<HomePage navig={services} />} />
          <Route path="/contact" element={<HomePage navig={contact} />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/wlogin" element={<WLogin />} />
          <Route path="/wsignup" element={<WSignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth/*" element={token && userRole === "customer" ? <Auth /> : <Navigate to="/login" />} />
          <Route path="worker/auth/*" element={token && userRole === "worker" ? <WorkerAuth /> : <Navigate to="/wlogin" />} />
          <Route path="/updatejob" element={<UpdateJob />} />
          <Route path="/findworkers" element={<FindWorkers />} />
          <Route path="/viewdetails/:id" element={<ViewDetails />} />
          <Route path="/book/:id" element={<BookSlot />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/help" element={<Help />} />
          <Route path="/history" element={<History />} />
        </Routes>
          

      </div>
      <div className="foot">
        {token?(
          <div className="copy">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
        ):(
          <Footer/>
        )}
      </div>
    </Router>
    
  );
};

export default App;