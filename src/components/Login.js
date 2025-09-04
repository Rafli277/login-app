import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulasi login - nanti diganti dengan API call ke Spring Boot
      if (credentials.username === 'admin' && credentials.password === 'password') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', credentials.username);
        onLogin(true);
      } else {
        setError('Username atau password salah');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={credentials.username} onChange={handleChange} required placeholder="Masukkan username" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} required placeholder="Masukkan password" />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>

        <div className="demo-credentials">
          <p>Demo credentials:</p>
          <p>
            Username: <strong>admin</strong>
          </p>
          <p>
            Password: <strong>password</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
