import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import cleanup from '../assets/cleanup.jpg';

export default function Home() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('userProfile'));
    if (savedUser && savedUser.name) {
      setUserName(savedUser.name);
    }
  }, []);

  return (
    <div className="home-wrapper">
      <div className="hero-banner"></div>

      <div className="content-area">
        <div className="info-box">
          <h2 className="nav-style-font">LEADERBOARD</h2>
          <p>
            coming soon!
          </p>
        </div>
        <div className="info-box">
          <h2 className="nav-style-font">TOP PRIZES</h2>
          <p>
            coming soon!
          </p>
        </div>
      </div>

      <section className="about-section">
        <div className="about-content">
          <div className="mission-box">
            <h2 className="nav-style-font">Our Mission</h2>
            <p>Oprit aims to connect volunteers with local environmental opportunities to create a greener future.
              Oprit aims to connect volunteers with local environmental opportunities to create a greener future
              Oprit aims to connect volunteers with local environmental opportunities to create a greener future
              Oprit aims to connect volunteers with local environmental opportunities to create a greener future
              Oprit aims to connect volunteers with local environmental opportunities to create a greener future
            </p>
          </div>
          <div className="bio-box">
            <h2 className="nav-style-font">About Us</h2>
            <p>We are dedicated to making community service accessible and rewarding for everyone.</p>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="impact-container">
          <h2 className="nav-style-font impact-title">OUR IMPACT</h2>
          <Carousel className="impact-carousel">
            <Carousel.Item>
              <div className="carousel-placeholder">
                <img src={cleanup} alt="First slide" />
              </div>
              <Carousel.Caption>
                <h3>Community Cleanup</h3>
                <p>Cleaning up our local parks together.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-placeholder">
                <p>Volunteer Image 2 Placeholder</p>
              </div>
              <Carousel.Caption>
                <h3>Tree Planting</h3>
                <p>Desc..</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-placeholder">
                <p>Volunteer Image 3 Placeholder</p>
              </div>
              <Carousel.Caption>
                <h3>Tree Planting</h3>
                <p>Another volunteering work pic</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      {/* Contact Information Footer Section */}
      <footer className="contact-footer" style={{
        width: "100vw",
        padding: "1.5em 0",
        background: "#e5ffef",
        textAlign: "center",
        fontSize: "1.01rem",
        color: "#247a40",
        marginTop: "2.5em",
        letterSpacing: "0.4px",
        borderTop: "1.5px solid #baf0d6"
      }}>
        <div>
          <strong>Contact us: </strong>
          {/* Fill out with actual contact information */}
          <span>[email protected] &nbsp;|&nbsp; (123) 456-7890 &nbsp;|&nbsp; Address or other info</span>
        </div>
      </footer>
    </div>
  );
}