import React, { useState } from 'react';
import { FaPlus, FaBook, FaChartBar, FaFolderOpen, FaUsers } from 'react-icons/fa';
import './FloatingActionButton.css';

const FloatingActionButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const quickActions = [
        {
            icon: <FaBook />,
            label: 'New Course',
            action: () => window.location.href = '/staff/courses/new',
            color: '#2563eb'
        },
        {
            icon: <FaChartBar />,
            label: 'New Survey',
            action: () => window.location.href = '/staff/surveys/new',
            color: '#f59e0b'
        },
        {
            icon: <FaFolderOpen />,
            label: 'New Program',
            action: () => window.location.href = '/staff/programs/new',
            color: '#10b981'
        },
        {
            icon: <FaUsers />,
            label: 'Assign Students',
            action: () => window.location.href = '/staff/courses/assign',
            color: '#ef4444'
        }
    ];

    return (
        <div className="fab-container">
            {isOpen && (
                <div className="fab-actions">
                    {quickActions.map((action, index) => (
                        <button
                            key={index}
                            className="fab-action"
                            style={{ 
                                backgroundColor: action.color,
                                animationDelay: `${index * 0.1}s`
                            }}
                            onClick={action.action}
                            title={action.label}
                        >
                            {action.icon}
                            <span className="fab-label">{action.label}</span>
                        </button>
                    ))}
                </div>
            )}
            <button
                className={`fab-main ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                title="Quick Actions"
            >
                <FaPlus />
            </button>
        </div>
    );
};

export default FloatingActionButton; 