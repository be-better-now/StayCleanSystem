import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TestModeToggle = () => {
  const [isTestMode, setIsTestMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check current test mode status
    const testMode = localStorage.getItem('testMode') === 'true';
    setIsTestMode(testMode);
  }, []);

  const toggleTestMode = () => {
    const newTestMode = !isTestMode;
    setIsTestMode(newTestMode);
    localStorage.setItem('testMode', newTestMode.toString());
    
    if (newTestMode) {
      // Set mock user data for test mode
      localStorage.setItem('user', JSON.stringify({
        userName: 'test_staff',
        role: 'Staff',
        email: 'test@example.com'
      }));
      localStorage.setItem('token', 'test_token_' + Date.now());
    } else {
      // Clear test data when disabling test mode
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  };

  const goToStaffDashboard = () => {
    navigate('/staff');
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: 'white',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      border: '2px solid #e5e7eb',
      zIndex: 1000,
      minWidth: '250px'
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#2563eb', fontSize: '16px' }}>
        🧪 Test Mode
      </h3>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ 
          display: 'flex', 
          alignItems: 'center', 
          cursor: 'pointer',
          fontSize: '14px'
        }}>
          <input
            type="checkbox"
            checked={isTestMode}
            onChange={toggleTestMode}
            style={{ marginRight: '8px' }}
          />
          Enable Test Mode (Bypass Login)
        </label>
      </div>

      {isTestMode && (
        <div style={{ marginBottom: '15px' }}>
          <div style={{ 
            background: '#f0fdf4', 
            padding: '8px', 
            borderRadius: '4px',
            border: '1px solid #059669',
            fontSize: '12px',
            color: '#059669'
          }}>
            ✅ Test mode enabled - You can access staff features
          </div>
        </div>
      )}

      {isTestMode && (
        <button
          onClick={goToStaffDashboard}
          style={{
            background: '#2563eb',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            width: '100%'
          }}
        >
          🚀 Go to Staff Dashboard
        </button>
      )}

      <div style={{ 
        marginTop: '10px', 
        fontSize: '12px', 
        color: '#6b7280',
        lineHeight: '1.4'
      }}>
        <strong>Test Mode Features:</strong>
        <ul style={{ margin: '5px 0 0 0', paddingLeft: '15px' }}>
          <li>Access staff pages without login</li>
          <li>Mock data for courses</li>
          <li>Full CRUD operations</li>
          <li>No backend required</li>
        </ul>
      </div>
    </div>
  );
};

export default TestModeToggle; 