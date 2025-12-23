import { useState } from 'react';
import './MyProfile.css';

export default function MyProfile() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const handleAction = (e) => {
    e.preventDefault();
    if (isRegistering) {
      // Save info to the browser's Local Storage
      localStorage.setItem('userProfile', JSON.stringify(formData));
      alert("Account created successfully!");
    } else {
      // Logic for checking login would go here
      const savedUser = JSON.parse(localStorage.getItem('userProfile'));
      if (savedUser && savedUser.email === formData.email) {
        alert(`Welcome back, ${savedUser.name || 'User'}!`);
      } else {
        alert("Account not found. Please register!");
      }
    }
  };

  return (
    <div className="profile-page-bg">
      <div className="auth-container">
        <header className="auth-header">
          <h1 className="nav-style-font">{isRegistering ? 'REGISTER' : 'SIGN IN'}</h1>
        </header>

        <form className="auth-form nav-style-font" onSubmit={handleAction}>
          {isRegistering && (
            <div className="form-group">
              <label>FULL NAME</label>
              <input 
                type="text" 
                placeholder="Enter Name"
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
            </div>
          )}
          <div className="form-group">
            <label>EMAIL</label>
            <input 
              type="email" 
              placeholder="Enter Email"
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
          </div>
          <div className="form-group">
            <label>PASSWORD</label>
            <input 
              type="password" 
              placeholder="Enter Password"
              onChange={(e) => setFormData({...formData, password: e.target.value})} 
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