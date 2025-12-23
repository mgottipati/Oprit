import { useState } from 'react';
import './FindOpportunities.css';

export default function FindOpportunities() {
  const [zipCode, setZipCode] = useState('');
  const [mapLocation, setMapLocation] = useState('USA'); // Default view
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const handleSearch = (e) => {
    e.preventDefault();
    if (zipCode.trim() !== '') {
      setMapLocation(zipCode); // This updates the iframe URL
    }
  };

  const mapSrc = `https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=volunteering+in+${mapLocation}`;

  return (
    <div className="opportunities-page-bg">
      <div className="opportunities-container">
        <header className="opp-title-box">
          <h1 className="nav-style-font">FIND OPPORTUNITIES</h1>
        </header>

        <div className="search-section">
          <form className="search-form nav-style-font" onSubmit={handleSearch}>
            <div className="form-row">
              <label>ZIP CODE:</label>
              <input 
                type="text" 
                placeholder="Enter Zip" 
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
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
            <button type="submit" className="submit-btn">SUBMIT</button>
          </form>
        </div>

        <div className="results-section">
          <header className="results-header">
            <h2 className="nav-style-font">OPPORTUNITIES AVAILABLE NEAR {mapLocation.toUpperCase()}</h2>
          </header>
          <div className="map-container">
            <iframe
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={mapSrc}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}