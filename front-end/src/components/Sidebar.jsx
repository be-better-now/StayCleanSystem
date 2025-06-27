import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaBook, FaFolderOpen, FaCalendarAlt, FaChartBar, FaCogs, FaClipboardList, FaUserCog, FaChevronDown } from 'react-icons/fa';
import './Sidebar.css';

const menuItems = [
    { title: "Dashboard", path: "/staff", icon: <FaTachometerAlt /> },
    { title: "Course Management", path: "/staff/courses", icon: <FaBook /> },
    { title: "Program Management", path: "/staff/programs", icon: <FaFolderOpen /> },
    { title: "Schedule Management", path: "/staff/schedule", icon: <FaCalendarAlt /> },
    { title: "Survey Results", path: "/staff/surveys", icon: <FaClipboardList /> },
    { title: "Reports", path: "/staff/reports", icon: <FaChartBar /> },
    { title: "Settings", path: "/staff/settings", icon: <FaCogs /> },
];

const Sidebar = () => {
    return (
        <aside className="compact-sidebar">
            <nav>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink 
                                to={item.path} 
                                className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}
                                end={item.path === "/staff"}
                                title={item.title}
                            >
                                <span className="sidebar-icon">{item.icon}</span>
                                <span className="sidebar-title">{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar; 