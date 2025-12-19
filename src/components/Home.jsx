import './Home.css'; 
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="home-hero">
        <h1>Oprit!</h1>
        <p>
          Our Catchprase!
        </p>
      </div>

      <section className="features-section">
        <h2>Info</h2>
        <div className="features-grid">
          
            <div className="feature-card">
              <h3>Something</h3>
              <p>Info</p>
            </div>
            <div className="feature-card">
              <h3>Something</h3>
              <p>Info</p>
            </div>
            <div className="feature-card">
              <h3>Something</h3>
              <p>Info</p>
            </div>


        </div>
      </section>
    </>
  );
}