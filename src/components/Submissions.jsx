import './Submissions.css';

export default function Submissions() {
  const submissionData = [
    { date: '12/10/2025', location: '123 MINNU ST.', status: 'APPROVED', reward: 'CLAIMED', type: 'success' },
    { date: '12/11/2025', location: '123. SOPHIA ST.', status: 'PENDING APPROVAL', reward: 'UNCLAIMED', type: 'pending' },
    { date: '12/12/2025', location: '123. OPRIT ST', status: 'APPROVED', reward: 'UNCLAIMED', type: 'success' },
    { date: '12/12/2025', location: '123. OPRIT ST', status: 'DENIED', reward: 'NONE', type: 'error' },
  ];

  // Helper to get the icon based on status
  const getStatusIcon = (type) => {
    if (type === 'success') return '●'; // Or use a checkmark symbol
    if (type === 'pending') return '○'; // Or use a clock symbol
    return '✕'; // For errors/denied
  };

  return (
    <div className="submissions-page-bg">
      <div className="submissions-container">
        <header className="submissions-title-box">
          <h1 className="nav-style-font">SUBMISSIONS</h1>
        </header>

        <div className="submission-row header-row nav-style-font">
          <div>DATE:</div>
          <div>LOCATION:</div>
          <div>STATUS:</div>
          <div>REWARD:</div>
        </div>

        <div className="submission-list">
          {submissionData.map((item, index) => (
            <div className="submission-row data-row nav-style-font" key={index}>
              <div>{item.date}</div>
              <div>{item.location}</div>
              <div className={`status-col ${item.type}`}>
                <span className="status-icon">{getStatusIcon(item.type)}</span>
                {item.status}
              </div>
              <div>{item.reward}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}