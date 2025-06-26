import React, { useState } from 'react';
import { FaBook, FaUsers, FaChartBar, FaCog, FaPlus, FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const StaffDemoPage = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newCourse, setNewCourse] = useState({ name: '', program: '', description: '' });

  // Mock data
  const mockCourses = [
    { id: 1, name: "Drug Prevention Basics", program: "Health Education", status: "Active", students: 45 },
    { id: 2, name: "Substance Abuse Awareness", program: "Public Health", status: "Active", students: 32 },
    { id: 3, name: "Mental Health Support", program: "Psychology", status: "Draft", students: 0 },
    { id: 4, name: "Community Outreach", program: "Social Work", status: "Active", students: 28 },
    { id: 5, name: "Youth Education Program", program: "Education", status: "Active", students: 56 }
  ];

  const mockSurveys = [
    { id: 1, title: "Risk Assessment Survey", responses: 120, status: "Active" },
    { id: 2, title: "Program Feedback", responses: 85, status: "Active" },
    { id: 3, title: "Community Needs", responses: 45, status: "Draft" }
  ];

  const mockPrograms = [
    { id: 1, name: "Youth Prevention Program", participants: 150, status: "Active" },
    { id: 2, name: "Adult Education", participants: 75, status: "Active" },
    { id: 3, name: "Family Support", participants: 30, status: "Planning" }
  ];

  const handleCreateCourse = () => {
    if (newCourse.name && newCourse.program) {
      alert(`Course "${newCourse.name}" created successfully!`);
      setNewCourse({ name: '', program: '', description: '' });
      setShowCreateModal(false);
    }
  };

  const handleDelete = (type, id) => {
    if (window.confirm(`Are you sure you want to delete this ${type} (ID: ${id})?`)) {
      alert(`${type} with ID ${id} deleted successfully!`);
    }
  };

  const renderCourses = () => (
    <div className="demo-section">
      <div className="demo-header">
        <h3>📚 Course Management</h3>
        <button 
          className="demo-btn primary"
          onClick={() => setShowCreateModal(true)}
        >
          <FaPlus /> Create New Course
        </button>
      </div>
      
      <div className="demo-table">
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Program</th>
              <th>Status</th>
              <th>Students</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockCourses.map(course => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.program}</td>
                <td>
                  <span className={`status ${course.status.toLowerCase()}`}>
                    {course.status}
                  </span>
                </td>
                <td>{course.students}</td>
                <td>
                  <div className="actions">
                    <button className="action-btn view" title="View">
                      <FaEye />
                    </button>
                    <button className="action-btn edit" title="Edit">
                      <FaEdit />
                    </button>
                    <button 
                      className="action-btn delete" 
                      title="Delete"
                      onClick={() => handleDelete('course', course.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSurveys = () => (
    <div className="demo-section">
      <div className="demo-header">
        <h3>📋 Survey Management</h3>
        <button className="demo-btn primary">
          <FaPlus /> Create Survey
        </button>
      </div>
      
      <div className="demo-cards">
        {mockSurveys.map(survey => (
          <div key={survey.id} className="demo-card">
            <h4>{survey.title}</h4>
            <p>Responses: {survey.responses}</p>
            <span className={`status ${survey.status.toLowerCase()}`}>
              {survey.status}
            </span>
            <div className="card-actions">
              <button className="demo-btn small">View Results</button>
              <button className="demo-btn small">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPrograms = () => (
    <div className="demo-section">
      <div className="demo-header">
        <h3>👥 Program Management</h3>
        <button className="demo-btn primary">
          <FaPlus /> Create Program
        </button>
      </div>
      
      <div className="demo-cards">
        {mockPrograms.map(program => (
          <div key={program.id} className="demo-card">
            <h4>{program.name}</h4>
            <p>Participants: {program.participants}</p>
            <span className={`status ${program.status.toLowerCase()}`}>
              {program.status}
            </span>
            <div className="card-actions">
              <button className="demo-btn small">Manage</button>
              <button className="demo-btn small">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="demo-section">
      <h3>📊 Analytics Dashboard</h3>
      <div className="analytics-grid">
        <div className="analytics-card">
          <h4>Total Courses</h4>
          <div className="number">5</div>
        </div>
        <div className="analytics-card">
          <h4>Active Students</h4>
          <div className="number">161</div>
        </div>
        <div className="analytics-card">
          <h4>Surveys</h4>
          <div className="number">3</div>
        </div>
        <div className="analytics-card">
          <h4>Programs</h4>
          <div className="number">3</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="staff-demo-page">
      <div className="demo-header-main">
        <h1>🧪 Staff Functionality Demo</h1>
        <p>This is a demo of all staff features. You can interact with all components!</p>
      </div>

      {/* Navigation Tabs */}
      <div className="demo-tabs">
        <button 
          className={`tab ${activeTab === 'courses' ? 'active' : ''}`}
          onClick={() => setActiveTab('courses')}
        >
          <FaBook /> Courses
        </button>
        <button 
          className={`tab ${activeTab === 'surveys' ? 'active' : ''}`}
          onClick={() => setActiveTab('surveys')}
        >
          <FaChartBar /> Surveys
        </button>
        <button 
          className={`tab ${activeTab === 'programs' ? 'active' : ''}`}
          onClick={() => setActiveTab('programs')}
        >
          <FaUsers /> Programs
        </button>
        <button 
          className={`tab ${activeTab === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          <FaCog /> Analytics
        </button>
      </div>

      {/* Content */}
      <div className="demo-content">
        {activeTab === 'courses' && renderCourses()}
        {activeTab === 'surveys' && renderSurveys()}
        {activeTab === 'programs' && renderPrograms()}
        {activeTab === 'analytics' && renderAnalytics()}
      </div>

      {/* Create Course Modal */}
      {showCreateModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Create New Course</h3>
            <div className="form-group">
              <label>Course Name:</label>
              <input
                type="text"
                value={newCourse.name}
                onChange={(e) => setNewCourse({...newCourse, name: e.target.value})}
                placeholder="Enter course name"
              />
            </div>
            <div className="form-group">
              <label>Program:</label>
              <input
                type="text"
                value={newCourse.program}
                onChange={(e) => setNewCourse({...newCourse, program: e.target.value})}
                placeholder="Enter program"
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                value={newCourse.description}
                onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                placeholder="Enter description"
              />
            </div>
            <div className="modal-actions">
              <button className="demo-btn" onClick={() => setShowCreateModal(false)}>
                Cancel
              </button>
              <button className="demo-btn primary" onClick={handleCreateCourse}>
                Create Course
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .staff-demo-page {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .demo-header-main {
          text-align: center;
          margin-bottom: 30px;
        }

        .demo-header-main h1 {
          color: #2563eb;
          margin-bottom: 10px;
        }

        .demo-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
          border-bottom: 2px solid #e5e7eb;
        }

        .tab {
          padding: 12px 24px;
          border: none;
          background: none;
          cursor: pointer;
          border-bottom: 3px solid transparent;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
        }

        .tab.active {
          border-bottom-color: #2563eb;
          color: #2563eb;
          font-weight: bold;
        }

        .demo-section {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .demo-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .demo-btn {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 14px;
        }

        .demo-btn.primary {
          background: #2563eb;
          color: white;
        }

        .demo-btn.small {
          padding: 4px 8px;
          font-size: 12px;
        }

        .demo-table table {
          width: 100%;
          border-collapse: collapse;
        }

        .demo-table th,
        .demo-table td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }

        .demo-table th {
          background: #f8fafc;
          font-weight: bold;
        }

        .status {
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: bold;
        }

        .status.active {
          background: #f0fdf4;
          color: #059669;
        }

        .status.draft {
          background: #fef3c7;
          color: #d97706;
        }

        .status.planning {
          background: #f3e8ff;
          color: #7c3aed;
        }

        .actions {
          display: flex;
          gap: 5px;
        }

        .action-btn {
          padding: 6px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
        }

        .action-btn.view {
          background: #3b82f6;
          color: white;
        }

        .action-btn.edit {
          background: #f59e0b;
          color: white;
        }

        .action-btn.delete {
          background: #ef4444;
          color: white;
        }

        .demo-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .demo-card {
          background: #f8fafc;
          padding: 20px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }

        .demo-card h4 {
          margin: 0 0 10px 0;
          color: #1f2937;
        }

        .card-actions {
          display: flex;
          gap: 10px;
          margin-top: 15px;
        }

        .analytics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .analytics-card {
          background: #f8fafc;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          border: 1px solid #e5e7eb;
        }

        .analytics-card .number {
          font-size: 2rem;
          font-weight: bold;
          color: #2563eb;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal {
          background: white;
          padding: 30px;
          border-radius: 8px;
          min-width: 400px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
        }

        .modal-actions {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default StaffDemoPage; 