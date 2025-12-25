import { useEffect, useState } from 'react';
import './Submissions.css';

export default function Submissions() {
  const [redemptions, setRedemptions] = useState([]);
  const [points, setPoints] = useState(0);

  const submissionData = [
    { date: '12/10/2025', location: '123 MINNU ST.', status: 'APPROVED', type: 'success', pts: 250 },
    { date: '12/11/2025', location: '123. SOPHIA ST.', status: 'PENDING APPROVAL', type: 'pending', pts: 0 },
    { date: '12/12/2025', location: '123. OPRIT ST', status: 'APPROVED', type: 'success', pts: 500 },
    { date: '12/12/2025', location: '123. OPRIT ST', status: 'DENIED', type: 'error', pts: 0 },
  ];

  useEffect(() => {
    const earned = submissionData.reduce((acc, curr) => acc + curr.pts, 0);
    
    const savedProfile = JSON.parse(localStorage.getItem('userProfile')) || { points: 0, spent: 0 };
    const history = JSON.parse(localStorage.getItem('redemptionHistory')) || [];
    
    const spentPoints = history.reduce((acc, curr) => acc + curr.cost, 0);
    const finalBalance = earned - spentPoints;

    setPoints(finalBalance);
    setRedemptions(history);

    localStorage.setItem('userProfile', JSON.stringify({ ...savedProfile, points: finalBalance }));
  }, []);

  return (
    <div className="submissions-page-bg">
      <div className="submissions-container">
        <div className="points-summary-card nav-style-font">
            <h3 className="points-label">YOUR TOTAL IMPACT POINTS</h3>
            <div className="big-points">{points}</div>
            <p className="points-subtext">Earned from volunteering minus redeemed rewards.</p>
        </div>

        <h2 className="section-title nav-style-font">VOLUNTEER HISTORY</h2>
        <div className="submission-row header-row nav-style-font">
          <div>DATE:</div><div>LOCATION:</div><div>STATUS:</div><div>POINTS:</div>
        </div>
        <div className="submission-list">
          {submissionData.map((item, index) => (
            <div className="submission-row data-row nav-style-font" key={index}>
              <div>{item.date}</div><div>{item.location}</div>
              <div className={`status-col ${item.type}`}>{item.status}</div>
              <div className="pts-val">+{item.pts}</div>
            </div>
          ))}
        </div>

        {redemptions.length > 0 && (
          <div className="history-section mt-5">
            <h2 className="section-title nav-style-font">REDEEMED REWARDS</h2>
            <div className="submission-row header-row nav-style-font redemptions-header">
              <div>OFFER:</div><div>VENDOR:</div><div>CODE:</div><div>COST:</div>
            </div>
            {redemptions.map((item, index) => (
              <div className="submission-row data-row nav-style-font" key={index}>
                <div>{item.offer}</div>
                <div>{item.shop}</div>
                <div className="code-text">{item.code}</div>
                <div className="pts-spent">-{item.cost}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}