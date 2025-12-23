import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap'; // Add this import
import './Home.css';

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
        </div>
        <div className="info-box">
          <h2 className="nav-style-font">TOP PRIZES</h2>
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

      {/* --- NEW OUR IMPACT SECTION --- */}
      <section className="impact-section">
        <div className="impact-container">
          <h2 className="nav-style-font impact-title">OUR IMPACT</h2>
          <Carousel className="impact-carousel">
            <Carousel.Item>
              <div className="carousel-placeholder">
                <p>Volunteer Image 1 Placeholder</p>
                {/* Once you have images, use: <img src={yourImage1} alt="First slide" /> */}
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
                <p>Helping restore the local canopy.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </div>
  );
}