const React ='react';
import './HomePage.css';
import {useState, useEffect,useLayoutEffect, useRef } from 'react';
import logo2 from './../assets/logo.png';
import img1 from './../assets/img1.png';
import single from './../assets/singlestar.png'
import service_img from './../assets/img3.png';
import video from './../assets/video.mp4';
import s from './../assets/img3.png';
import img2 from './../assets/img2.png';
import arrow from './../assets/phone.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import star from './../assets/5star.webp';
import team1 from './../assets/assets/team1.jpeg';
import team2 from './../assets/assets/team2.jpeg';
import team3 from './../assets/assets/team3.jpeg';
import team4 from './../assets/assets/team4.jpeg';
const HomePage = ({navig}) => {
    const sections = {
        home: useRef(null),
        about: useRef(null),
        services: useRef(null),
        contact: useRef(null),
      };

      const scrollToSection = (word) => {
        if (sections[word]?.current) {
          sections[word].current.scrollIntoView({ behavior: "smooth" });
        }
      };

      // Auto-scroll when `scrollToWord` prop changes
      useEffect(() => {
        if (navig) {
          scrollToSection(navig);
        }
      }, [navig]);
//        if (window.location.pathname !== '/') {
//     window.location.href = '/';
//   }
    return (
        <div>
            {/* <div className="nav">
                <div className="logo">
                    <img src={logo} alt="" className='logo'/>
                    <h1>CleanSlate</h1>
                </div>
            
                <div className="part2">
                    
                    <h3>Home</h3>
                    <h3>About Us</h3>
                    <h3>Services</h3>
                    <h3>Contact Us</h3>
                </div>
                <a className='started' href=''>Get Started</a>
            </div> */}
            <div className="body" >
                <div id="card1">
                <div className="part1">
                    <div className="title">
                        <img src={single} alt="" />
                        <h4>CLEANING SERVICES</h4>
                    </div>
                    
                    <h1>Cleaning Services for all our needs</h1>
                    <p>We provide reliable and professional cleaning services for homes, offices, and commercial spaces, ensuring a spotless environment tailored to your needs.</p>
                    <Link className='started' to="/getstarted">Get Started</Link>
                </div>
                <div className="part2">
                    <div className="outer-card">
                        <img src={logo2} alt="" className='logo2'/>
                        <div className="inner-card">
                            <img src={img1} alt="" className='img1'/>
                        </div>
                    </div>
                </div>
                <div className="part3">
                    <div className="card1">
                        <h1>10K+</h1>
                        <p>Homes Cleaned</p>
                    </div><br /><br />
                    <div className="card1">
                        <h1>126+</h1>
                        <p>Professional Tools</p>
                    </div><br /><br />
                    <div className="card1">
                        <h1>99%</h1>
                        <p>Satisfied Clients</p>
                    </div>
                </div>
                </div>
                

                <div className="section2">
                    <div className="card1">
                        <img src={s} className="s" alt="" />
                        <h2>Flexible Scheduling</h2>
                        <p>Choose cleaning times that fit your schedule with our hassle-free, flexible booking options.</p>
                    </div>
                    <div className="card1">
                        <img src={s} className="s" alt="" />
                        <h2>Professional Staff</h2>
                        <p>Our experienced and trained staff deliver top-quality cleaning with care and attention to detail.</p>
                    </div>
                    <div className="card1">
                        <img src={s} className="s" alt="" />
                        <h2>Competitive Pricing</h2>
                        <p>Get high-quality cleaning services at affordable and transparent prices.</p>
                    </div>
                </div>

                <div className="section3" ref={sections.about}>
                    <div className="part1">
                        <div className="title">
                            <img src={single} alt="" />
                            <h4>ABOUT US</h4>
                        </div>
                        <h1>Clean Home with Our Professional Cleaning Services</h1>
                        <p>We are committed to providing top-quality cleaning solutions for homes and offices, ensuring a spotless and healthy environment. Our trained professionals use advanced techniques and eco-friendly products to deliver exceptional results. Whether it’s basic cleaning, deep sanitization, or specialized services, we tailor our approach to meet your needs. Experience hassle-free cleaning with a team that values quality, reliability, and customer satisfaction.</p>
                    </div>
                    <div className="part2">
                        <div className="card2">
                            <h2>Experienced</h2>
                            <p className='percent'>98%</p>
                        </div>
                        <progress value={0.98} /><br /><br />
                        <div className="card2">
                            <h2>Reliable</h2>
                            <p className='percent'>86%</p>
                        </div>
                        <progress value={0.86} /><br /><br />
                        <div className="card2">
                            <h2>Skilled & Capable</h2>
                            <p className='percent'>90%</p>
                        </div>
                        <progress value={0.9} /><br /><br />
                        <div className="card2">
                            <h2>Flexible</h2>
                            <p className='percent'>80%</p>
                        </div>
                        <progress value={0.8} />
                    </div>
                    
                </div>

                <div className="section4">
                    <video width="850" height="500" controls >
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>

                <div className="section5" ref={sections.services}>
                        <div className="title">
                            <img src={single} alt="" />
                            <h4>Our Services</h4>
                        </div>
                        <div className="part1">
                            <div className="card3">
                                <h1>Services We Provide</h1>
                                <p>Our professional cleaning services are tailored to your needs, ensuring a clean and spotless environment.</p>
                            </div>
                            <Link className='started' to="/getstarted">All Services</Link>
                        </div>
                        <div className="part2">
                            <div className="box">
                                <img src={service_img} alt="" />
                                <h2>Office Cleaning</h2>
                                <p>Maintain a clean and organized workplace with expert office cleaning services, enhancing productivity and creating a welcoming environment for employees and clients.</p>
                                <a href="">Learn More</a>
                            </div>
                            <div className="box">
                                <img src={service_img} alt="" />
                                <h2>House Cleaning</h2>
                                <p>Keep your home spotless with professional house cleaning services, ensuring a fresh and healthy living space by removing dust, dirt, and stains from every corner.</p>
                                <a href="">Learn More</a>
                            </div>
                            <div className="box">
                                <img src={service_img} alt="" />
                                <h2>Carpet Cleaning</h2>
                                <p> Restore the beauty of your carpets with deep cleaning services that remove stains, dust, and allergens, ensuring a fresh and hygienic space.</p>
                                <a href="">Learn More</a>
                            </div>
                            <div className="box">
                                <img src={service_img} alt="" />
                                <h2>Kitchen Cleaning</h2>
                                <p>Get a sparkling clean kitchen with specialized cleaning services that remove grease, stains, and bacteria, keeping your cooking area hygienic and safe.</p>
                                <a href="">Learn More</a>
                            </div>
                        </div>
                </div>

                <div className="section6">
                    <div className="part1">
                        <div id="card">
                            <div id="big"></div>
                            <img src={img2} alt="" id='img1'/>
                            <img src={logo2} alt="" id='img2'/>
                        </div>
                        
                    </div>
                    <div className="part2">
                        <div className="title">
                            <img src={single} alt="" />
                            <h4>Why Choose Us</h4>
                        </div>
                        <h1>Providing Friendly, Reliable Cleaning Services</h1>
                        <p>Serving <span id="tag">4000+</span> properties every month.</p>
                        <br />
                        <div id="points">
                            <div id="point">
                                <img src={arrow} />
                                <h3>High-Quality Cleaning Services</h3>
                            </div>
                            <p>Our expert team ensures top-notch cleaning using advanced techniques and eco-friendly products, leaving your space spotless and fresh.</p>
                            <br />
                        </div>
                        <div id="points">
                            <div id="point">
                                <img src={arrow} />
                                <h3>Trained and Professional Staff</h3>
                            </div>
                            <p>Our skilled professionals are well-trained in handling various cleaning tasks efficiently, delivering reliable and thorough service every time.</p>
                            <br />
                        </div>
                        <div id="points">
                            <div id="point">
                                <img src={arrow} />
                                <h3>Exceptional Customer Service</h3>
                            </div>
                            <p>We prioritize customer satisfaction with responsive support, personalized cleaning solutions, and a commitment to exceeding expectations.</p>
            
                        </div>
                    </div>
                </div>

                <div className="section7">
                        <div className="title">
                            <img src={single} alt="" />
                            <h4>PRICING TABLE</h4>
                        </div>
                        <h1 className=''>Pricing Plans for Every Budget</h1>
                        <p>We offer flexible and affordable cleaning packages.Choose the plan that fits your budget and enjoy top-quality cleaning services at the best value.</p>
                        <div id="part1">
                            <div id="card4">
                                <div className="title">
                                    <img src={single} alt="" />
                                    <h4>BASIC CLEANING</h4>
                                </div>
                                <h1>$ 350 <span style={{fontSize:'20px'}}>/service</span> </h1>
                                <p> A quick and essential cleaning service covering dusting, sweeping, mopping, and surface cleaning to maintain a tidy and fresh space.</p>
                                <hr />
                                <div id="point">
                                    <img src={arrow} />
                                    <p>60 Minutes Consultation</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>2 Bedroom Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>3 Bathroom Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>1 Living Room Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>7 Days Guarentee</p>
                                </div>
                                <Link to="/getstarted">Get Started</Link>
                            </div>
                            <div id="card4">
                                <div className="title">
                                    <img src={single} alt="" />
                                    <h4>PRO CLEANING</h4>
                                </div>
                                <h1>$ 650 <span style={{fontSize:'20px'}}>/service</span> </h1>
                                <p>A deeper cleaning service that includes scrubbing, disinfecting, and detailed attention to high-touch areas for a healthier and more hygienic environment.</p>
                                <hr />
                                <div id="point">
                                    <img src={arrow} />
                                    <p>90 Minutes Consultation</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>3 Bedroom Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>4 Bathroom Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>1 Living Room Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>7 Days Guarentee</p>
                                </div>
                                <Link to="/getstarted">Get Started</Link>
                            </div>
                            <div id="card4">
                                <div className="title">
                                    <img src={single} alt="" />
                                    <h4>DELUX CLEANING</h4>
                                </div>
                                <h1>$ 950 <span style={{fontSize:'20px'}}>/service</span> </h1>
                                <p>A premium cleaning service with deep sanitization, stain removal, and specialized treatments for carpets, upholstery, and hard-to-reach areas, ensuring a spotless and refreshed space.</p>
                                <hr />
                                <div id="point">
                                    <img src={arrow} />
                                    <p>120 Minutes Consultation</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>4 Bedroom Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>5 Bathroom Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>1 Living Room Cleaning</p>
                                </div>
                                <div id="point">
                                    <img src={arrow} />
                                    <p>7 Days Guarentee</p>
                                </div>
                                <Link to="/getstarted">Get Started</Link>
                            </div>
                        </div>
                </div>
                <div id="section8">
                        <div className="title">
                            <img src={single} alt="" />
                            <h4>OUR TEAM</h4>
                        </div>
                        <h1 className=''>Meet Our Cleaning Team</h1>
                        <div id="cards">
                            <div id="card5">
                                <img src={team1} alt="" />
                                <span id="team">
                                    <h2>James Wong</h2>
                                    <p>Cleaning Supervisor </p>
                                </span>
                                <hr />
                                <a href="">+FOLLOW ON TWITTER</a>
                            </div>
                            <div id="card5">
                                <img src={team2} alt="" />
                                <span id="team">
                                    <h2>Sarah Johnson</h2>
                                    <p>Operations Manager</p>
                                </span>
                                <hr />
                                <a href="">+FOLLOW ON TWITTER</a>
                            </div>
                            <div id="card5">
                                <img src={team3} alt="" />
                                <span id="team">
                                    <h2>David Nguyen</h2>
                                    <p>Cleaning 
                                        Technician
                                    </p>
                                </span>
                                <hr />
                                <a href="">+FOLLOW ON TWITTER</a>
                            </div>
                            <div id="card5">
                                <img src={team4} alt="" />
                                <span id="team">
                                    <h2>Samantha Lee</h2>
                                    <p>Marketing Coordinator</p>
                                </span>
                                <hr />
                                <a href="">+FOLLOW ON TWITTER</a>
                            </div>
                        </div>
                </div>

                <div id="section9">
                        <div className="title">
                            <img src={single} alt="" />
                            <h4>TESTIMONIAL</h4>
                        </div>
                        <h1 className=''>Here What Our Clients Say</h1>
                        <p>We take pride in delivering top-quality cleaning services that our clients love! </p>
                        <div id="testimonial">
                        <div id="box">
                            <div id="box1">
                                <img src={star} alt="" />
                                <p>The deep carpet cleaning was fantastic! Stains I thought were permanent are completely gone</p>
                            </div>
                            <hr />
                            <div id="box2">
                                <div id="part1">
                                    
                                </div>
                                <div id="part2">
                                    <h3>James Smith</h3>
                                    <p>Office Manager</p>
                                </div>
                            </div>
                        </div>
                        <div id="box">
                            <div id="box1">
                                <img src={star} alt="" />
                                <p>Amazing service! My home has never looked this clean. The team was professional and efficient.</p>
                            </div>
                            <hr />
                            <div id="box2">
                                <div id="part1">
                                    
                                </div>
                                <div id="part2">
                                    <h3>Stephen</h3>
                                    <p>Cleaning Manager</p>
                                </div>
                            </div>
                        </div>
                        <div id="box">
                            <div id="box1">
                                <img src={star} alt="" />
                                <p>Our office feels so fresh and organized after their cleaning. Highly recommend!.</p>
                            </div>
                            <hr />
                            <div id="box2">
                                <div id="part1">
                                    
                                </div>
                                <div id="part2">
                                    <h3>John Son</h3>
                                    <p>Office Manager</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                </div>

                <div id="section10" ref={sections.contact}>
                    <h2>Trusted by 50k+ Customers</h2>
                    <div id="part">
                        <img src={star} alt="" />
                        <p>4.4/5  3,841 Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;