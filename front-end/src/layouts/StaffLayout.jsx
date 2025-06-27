import React from 'react';
import { Outlet } from 'react-router-dom';
import StaffHeader from '../components/StaffHeader';
import StaffFooter from '../components/StaffFooter';
import Sidebar from '../components/Sidebar';
import './StaffLayout.css';

const StaffLayout = () => {
  return (
    <div className="staff-layout">
      <StaffHeader />
      <div className="staff-body-container">
        <Sidebar />
        <main className="staff-content-area">
          <Outlet />
        </main>
      </div>
      <StaffFooter />
    </div>
  );
};

export default StaffLayout; 