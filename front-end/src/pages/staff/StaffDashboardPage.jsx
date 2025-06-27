import React, { useState, useEffect } from 'react';
import './StaffDashboardPage.css';
import { FaBook, FaClipboardList, FaEnvelope, FaBell, FaCalendarAlt, FaCheck, FaClock, FaExclamationTriangle } from 'react-icons/fa';

// Mock API data
const mockDashboardData = {
  staffName: "Nguyen Van A",
  courseCount: 5,
  surveySentCount: 12,
  pendingMessages: 3,
  unreadNotifications: 4,
  weeklyEvents: [
    { date: "2024-06-10", time: "09:00", title: "Course Review Meeting" },
    { date: "2024-06-12", time: "14:00", title: "Student Consultation" },
    { date: "2024-06-14", time: "10:30", title: "Survey Deadline" }
  ],
  todoList: [
    { id: 1, title: "Review course materials for Drug Prevention", dueDate: "2024-06-11", status: "in-progress" },
    { id: 2, title: "Send survey to Psychology students", dueDate: "2024-06-12", status: "pending" },
    { id: 3, title: "Update program schedule", dueDate: "2024-06-13", status: "pending" },
    { id: 4, title: "Prepare weekly report", dueDate: "2024-06-14", status: "done" }
  ],
  notifications: [
    { id: 101, title: "System Maintenance", content: "The system will be updated at 10 PM tonight.", createdAt: "2024-06-09", isRead: false },
    { id: 102, title: "New Course Assigned", content: "You have been assigned to 'Drug Prevention Basics'.", createdAt: "2024-06-08", isRead: false },
    { id: 103, title: "Survey Results Ready", content: "ASSIST survey results are now available for review.", createdAt: "2024-06-07", isRead: true }
  ]
};

const StaffDashboardPage = () => {
  const [dashboardData, setDashboardData] = useState(mockDashboardData);

  // Mock API call
  useEffect(() => {
    // Simulate API call
    setDashboardData(mockDashboardData);
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'done': return <FaCheck className="status-icon done" />;
      case 'in-progress': return <FaClock className="status-icon in-progress" />;
      case 'pending': return <FaExclamationTriangle className="status-icon pending" />;
      default: return <FaClock className="status-icon pending" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'done': return '#10b981';
      case 'in-progress': return '#2563eb';
      case 'pending': return '#f59e0b';
      default: return '#64748b';
    }
  };

  return (
    <div className="staff-dashboard">
      {/* Welcome Header */}
      <div className="dashboard-header">
        <h1>Welcome back, {dashboardData.staffName}!</h1>
        <p>Here's what's happening with your courses and activities today</p>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card" style={{ borderLeftColor: '#2563eb' }}>
          <div className="stat-icon" style={{ background: '#2563eb' }}><FaBook /></div>
          <div className="stat-content">
            <div className="stat-value">{dashboardData.courseCount}</div>
            <div className="stat-title">Active Courses</div>
          </div>
        </div>
        <div className="stat-card" style={{ borderLeftColor: '#10b981' }}>
          <div className="stat-icon" style={{ background: '#10b981' }}><FaClipboardList /></div>
          <div className="stat-content">
            <div className="stat-value">{dashboardData.surveySentCount}</div>
            <div className="stat-title">Surveys Sent</div>
          </div>
        </div>
        <div className="stat-card" style={{ borderLeftColor: '#f59e0b' }}>
          <div className="stat-icon" style={{ background: '#f59e0b' }}><FaEnvelope /></div>
          <div className="stat-content">
            <div className="stat-value">{dashboardData.pendingMessages}</div>
            <div className="stat-title">Pending Messages</div>
          </div>
        </div>
        <div className="stat-card" style={{ borderLeftColor: '#ef4444' }}>
          <div className="stat-icon" style={{ background: '#ef4444' }}><FaBell /></div>
          <div className="stat-content">
            <div className="stat-value">{dashboardData.unreadNotifications}</div>
            <div className="stat-title">Unread Notifications</div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-content">
        {/* Todo List */}
        <div className="content-section">
          <div className="section-header">
            <h2>Today's Tasks</h2>
            <button className="add-task-btn">+ Add Task</button>
          </div>
          <div className="tasks-list">
            {dashboardData.todoList.map((task) => (
              <div className="task-item" key={task.id}>
                <div className="task-icon" style={{ background: getStatusColor(task.status) }}>
                  {getStatusIcon(task.status)}
                </div>
                <div className="task-content">
                  <h4>{task.title}</h4>
                  <p>Due: {task.dueDate}</p>
                  <div className="task-meta">
                    <span className={`task-status ${task.status}`}>
                      {task.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="content-section">
          {/* Notifications */}
          <div className="section-header">
            <h2>Recent Notifications</h2>
          </div>
          <div className="notifications-list">
            {dashboardData.notifications.map((notification) => (
              <div className={`notification-item ${!notification.isRead ? 'unread' : ''}`} key={notification.id}>
                <div className="notification-icon">
                  <FaBell />
                </div>
                <div className="notification-content">
                  <h4>{notification.title}</h4>
                  <p>{notification.content}</p>
                  <div className="notification-time">{notification.createdAt}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Weekly Calendar */}
          <div className="section-header" style={{ marginTop: 32 }}>
            <h2>This Week's Events</h2>
          </div>
          <div className="weekly-calendar">
            {dashboardData.weeklyEvents.map((event, index) => (
              <div className="calendar-item" key={index}>
                <div className="calendar-date">
                  <FaCalendarAlt />
                  <span>{event.date}</span>
                </div>
                <div className="calendar-content">
                  <h4>{event.title}</h4>
                  <p>{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboardPage; 