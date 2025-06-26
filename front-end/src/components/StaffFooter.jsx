import React from 'react';
import './StaffFooter.css';

const StaffFooter = () => {
    const currentYear = new Date().getFullYear();
    const version = "1.0.0"; 

    return (
        <footer className="staff-footer">
            <p>&copy; {currentYear} Drug Use Prevention Support System. All rights reserved.</p>
            <div className="footer-links">
                <a href="/support">Support</a>
                <span>|</span>
                <a href="/privacy">Privacy Policy</a>
            </div>
            <p>Version {version}</p>
        </footer>
    );
};

export default StaffFooter; 