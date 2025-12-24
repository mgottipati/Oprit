import { useState, useEffect } from 'react';
import './MyProfile.css';
import defaultPic1 from '../assets/profile1.jpg';
import defaultPic2 from '../assets/profile2.jpeg';
import defaultPic3 from '../assets/profile3.jpg';

const PROFILE_PICS = [defaultPic1, defaultPic2, defaultPic3];

export default function MyProfile() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '', profilePic: PROFILE_PICS[0] });
  const [userProfile, setUserProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('userProfile'));
    if (savedUser && savedUser.email) {
      setUserProfile(savedUser);
      setIsSignedIn(true);
    }
  }, []);

  const handleAction = (e) => {
    e.preventDefault();
    if (isRegistering) {
      // Save info to Local Storage
      localStorage.setItem('userProfile', JSON.stringify(formData));
      setUserProfile(formData);
      setIsSignedIn(true);
      setIsRegistering(false);
      alert("Account created successfully!");
    } else {
      const savedUser = JSON.parse(localStorage.getItem('userProfile'));
      if (savedUser && savedUser.email === formData.email && savedUser.password === formData.password) {
        setUserProfile(savedUser);
        setIsSignedIn(true);
        alert(`Welcome back, ${savedUser.name || 'User'}!`);
      } else {
        alert("Account not found or incorrect password. Please register!");
      }
    }
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setUserProfile(null);
    setFormData({ email: '', password: '', name: '', profilePic: PROFILE_PICS[0] });
  };

  const handleProfilePicChange = (pic) => {
    setFormData({ ...formData, profilePic: pic });
  };

  const handleProfileEdit = (e) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(formData));
    setUserProfile(formData);
    setEditMode(false);
    alert("Profile updated.");
  };

  if (!isSignedIn) {
    return (
      <div className="profile-page-bg">
        <div className="auth-container">
          <header className="auth-header">
            <h1 className="nav-style-font">{isRegistering ? 'REGISTER' : 'SIGN IN'}</h1>
          </header>

          <form className="auth-form nav-style-font" onSubmit={handleAction}>
            {isRegistering && (
              <>
                <div className="form-group">
                  <label>FULL NAME</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>PROFILE PICTURE</label>
                  <div className="profile-pic-options">
                    {PROFILE_PICS.map((pic, idx) => (
                      <img
                        key={pic}
                        src={pic}
                        alt={`Profile option ${idx + 1}`}
                        className={`profile-pic-select${formData.profilePic === pic ? ' selected' : ''}`}
                        onClick={() => handleProfilePicChange(pic)}
                        style={{
                          borderRadius: '50%',
                          width: '64px',
                          height: '64px',
                          border: formData.profilePic === pic ? '3px solid #329832' : '2px solid transparent',
                          marginRight: 8,
                          cursor: 'pointer',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
            <div className="form-group">
              <label>EMAIL</label>
              <input
                type="email"
                placeholder="Enter Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>PASSWORD</label>
              <input
                type="password"
                placeholder="Enter Password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <button type="submit" className="auth-button">
              {isRegistering ? 'CREATE ACCOUNT' : 'LOGIN'}
            </button>
          </form>

          <p className="toggle-text" onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? "Already have an account? Sign In" : "Don't have an account? Register"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page-bg">
      <div className="profile-container">
        <header className="profile-header">
          <h1 className="nav-style-font">MY PROFILE</h1>
          <button className="signout-btn" onClick={handleSignOut}>
            SIGN OUT
          </button>
        </header>
        <div className="profile-info-section">
          <div className="profile-pic-area">
            <img
              src={userProfile.profilePic || PROFILE_PICS[0]}
              alt="Profile"
              className="profile-pic-circle"
              style={{
                borderRadius: '50%',
                width: 128,
                height: 128,
                objectFit: 'cover',
                border: '3px solid #329832',
              }}
            />
            {editMode && (
              <div className="profile-pic-options" style={{ marginTop: 8 }}>
                {PROFILE_PICS.map((pic, idx) => (
                  <img
                    key={pic}
                    src={pic}
                    alt={`Profile option ${idx + 1}`}
                    className={`profile-pic-select${formData.profilePic === pic ? ' selected' : ''}`}
                    onClick={() => handleProfilePicChange(pic)}
                    style={{
                      borderRadius: '50%',
                      width: '46px',
                      height: '46px',
                      border: formData.profilePic === pic ? '2px solid #329832' : '2px solid transparent',
                      marginRight: 6,
                      cursor: 'pointer'
                    }}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="profile-details-area nav-style-font">
            {editMode ? (
              <form onSubmit={handleProfileEdit} className="edit-profile-form">
                <div className="form-group">
                  <label>FULL NAME</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>EMAIL</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <button type="submit" className="auth-button">SAVE CHANGES</button>
                <button type="button" className="cancel-btn" onClick={() => {
                  setEditMode(false);
                  setFormData(userProfile);
                }}>CANCEL</button>
              </form>
            ) : (
              <>
                <h2>{userProfile.name}</h2>
                <p><b>Email:</b> {userProfile.email}</p>
                <div className="profile-stats">
                  <div>
                    <span className="stat-label">Total events attended:</span>
                    <span className="stat-number">3</span>
                  </div>
                  <div>
                    <span className="stat-label">Volunteer hours:</span>
                    <span className="stat-number">12</span>
                  </div>
                </div>
                <button className="edit-profile-btn" onClick={() => {
                  setFormData(userProfile);
                  setEditMode(true);
                }}>EDIT PROFILE</button>
              </>
            )}
          </div>
        </div>
        <section className="profile-badges-section nav-style-font">
          <h3>Achievements</h3>
          <div className="badges-list">
            <span className="badge">🌱 New Volunteer</span>
            <span className="badge">🎉 10+ Hours</span>
            <span className="badge">🧹 Cleanup Crew</span>
          </div>
        </section>
      </div>
    </div>
  );
}