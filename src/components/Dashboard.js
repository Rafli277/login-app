import React from 'react';
import './Dashboard.css';

const Dashboard = ({ onLogout }) => {
  const user = localStorage.getItem('user');

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        <div className="welcome-card">
          <h2>Selamat datang, {user}!</h2>
          <p>Anda berhasil login ke aplikasi.</p>
          <p>Fitur ini nantinya akan terhubung dengan backend Spring Boot.</p>
        </div>

        <div className="features">
          <h3>Fitur yang akan datang:</h3>
          <ul>
            <li>✅ Autentikasi dengan JWT</li>
            <li>✅ Koneksi ke database MySQL/PostgreSQL</li>
            <li>✅ CRUD operations</li>
            <li>✅ API endpoints dengan Spring Security</li>
            <li>✅ Refresh token mechanism</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// PASTIKAN EXPORT DEFAULT ADA!
export default Dashboard;
