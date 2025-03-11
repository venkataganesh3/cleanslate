import React from 'react';
import './Footer.css';
import single from '../assets/logo2[1][1].png';
import youtube from '../assets/Youtube.png';
import twitter from '../assets/Twitter.png';
import instagram from '../assets/Instagram.png';
import Location from '../assets/Location.png';
import Phone from '../assets/phone.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div id="foot1">
                <div id='log'>
                    <img src={single} alt="" />
                    <h1>CleanSlate</h1>
                </div>
                <p>HouseHold Freelancer is a full-stack web platform that connects customers with skilled workers for household tasks. Users can hire freelancers for various services, while workers can register, update their profiles, and receive job bookings.</p>
                <div id="logos">
                    <img src={twitter} alt="" />
                    <img src={youtube} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
            <div id="foot2">
                <h3>Quick Links</h3>
                <Link to="/">Home</Link>
                <Link to="about">About Us</Link>
                <Link to="services">Services</Link>
                <Link to="contact">Contact Us</Link>
            </div>
            <div id="foot3">
                <h3>Services</h3>
                <p>Home Cleaning</p>
                <p>Office Cleaning</p>
                <p>Carpet Cleaning</p>
                <p>Window Cleaning</p>
            </div>
            <div id="foot4">
                <h3>Contact Us</h3>
                <p>Our support and sales team is available 24/7 to answer your queries</p>
                <div id="loc">
                    <img src={Location} alt="" />
                    <p>123 Main St,Suite 500,New York,NY 10001</p>
                </div>
                <div id="loc">
                    <img src={Phone} alt="" />
                    <p>123 Main St,Suite 500,New York,NY 10001</p>
                </div>
            </div>
            
        </footer>
        <div className="copy">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;