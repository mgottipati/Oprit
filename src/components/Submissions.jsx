import './Submissions.css';

export default function Submissions() {
  // In a real app, this data would eventually come from a database
  const submissionData = [
    { date: '12/10/2025', location: '123 MINNU ST.', status: 'APPROVED', reward: 'CLAIMED', type: 'success', pts: 250 },
    { date: '12/11/2025', location: '123. SOPHIA ST.', status: 'PENDING APPROVAL', reward: 'UNCLAIMED', type: 'pending', pts: 0 },
    { date: '12/12/2025', location: '123. OPRIT ST', status: 'APPROVED', reward: 'UNCLAIMED', type: 'success', pts: 500 },
    { date: '12/12/2025', location: '123. OPRIT ST', status: 'DENIED', reward: 'NONE', type: 'error', pts: 0 },
  ];

  // Logic to sum up the points
  const totalPoints = submissionData.reduce((acc, curr) => acc + curr.pts, 0);

  return (
    <div className="submissions-page-bg">
      <div className="submissions-container">
        
        {/* Points Summary Header */}
        <div className="points-summary-card nav-style-font">
            <h3 className="points-label">YOUR TOTAL IMPACT POINTS</h3>
            <div className="big-points">{totalPoints}</div>
            <p className="points-subtext">Complete more opportunities to earn rewards!</p>
        </div>

        <div className="submission-row header-row nav-style-font">
          <div>DATE:</div>
          <div>LOCATION:</div>
          <div>STATUS:</div>
          <div>POINTS:</div>
        </div>

        <div className="submission-list">
          {submissionData.map((item, index) => (
            <div className="submission-row data-row nav-style-font" key={index}>
              <div>{item.date}</div>
              <div>{item.location}</div>
              <div className={`status-col ${item.type}`}>
                {item.status}
              </div>
              <div className="pts-val">+{item.pts}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}