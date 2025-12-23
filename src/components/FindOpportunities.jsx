import { useState } from 'react';
import './FindOpportunities.css';

export default function FindOpportunities() {
  const [zip, setZip] = useState('');
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const mapSource = `https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=environmental+volunteer+opportunities+in+${zip || 'USA'}`;

  return (
    <div className="opportunities-page-bg">
      <div className="opportunities-container">
        
        <header className="opp-title-box">
          <h1 className="nav-style-font">FIND OPPORTUNITIES</h1>
        </header>

        <div className="search-section">
          <form className="search-form nav-style-font">
            <div className="form-row">
              <label>ZIP CODE:</label>
              <input 
                type="text" 
                placeholder="Enter Zip" 
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label>SITE TYPE:</label>
              <select defaultValue="">
                <option value="" disabled>SELECT TYPE</option>
                <option value="park">PARK</option>
                <option value="street">STREET</option>
                <option value="school">SCHOOL</option>
              </select>
            </div>
            <button type="button" className="submit-btn">SUBMIT</button>
          </form>
        </div>

        <div className="results-section">
          <header className="results-header">
            <h2 className="nav-style-font">OPPORTUNITIES AVAILABLE</h2>
          </header>
          
          <div className="map-container">
            <iframe
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={mapSource}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}