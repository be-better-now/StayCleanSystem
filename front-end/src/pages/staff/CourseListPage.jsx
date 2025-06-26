import React, { useState } from 'react';
import { FaSearch, FaFilter, FaPlus, FaEdit, FaEye, FaTrash, FaUserPlus } from 'react-icons/fa';
import './StaffPages.css';
import coursesData from '../../mock/courses';

const CourseListPage = () => {
    const [courses, setCourses] = useState(coursesData);

    const handleDelete = async (courseId) => {
        if (window.confirm('Are you sure you want to delete this course?')) {
            setCourses(courses.filter(course => course.id !== courseId));
        }
    };

    const renderContent = () => {
        return (
            <div className="data-table-container">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Program</th>
                            <th>Status</th>
                            <th>Students</th>
                            <th>Created Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => (
                            <tr key={course.id}>
                                <td>{course.name}</td>
                                <td>{course.program}</td>
                                <td>
                                    <span className={`status-badge ${course.status.toLowerCase()}`}>
                                        {course.status}
                                    </span>
                                </td>
                                <td>{course.students}</td>
                                <td>{course.createdDate}</td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="action-btn edit" title="Edit"><FaEdit /></button>
                                        <button className="action-btn view" title="View"><FaEye /></button>
                                        <button className="action-btn assign" title="Assign"><FaUserPlus /></button>
                                        <button className="action-btn delete" title="Delete" onClick={() => handleDelete(course.id)}><FaTrash /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="staff-page">
            <div className="page-header">
                <h1>Course Management</h1>
                <p>Manage and organize your courses</p>
            </div>

            <div className="page-toolbar">
                <div className="toolbar-left">
                    <div className="search-box">
                        <FaSearch />
                        <input type="text" placeholder="Search courses..." />
                    </div>
                    <button className="filter-button"><FaFilter /> Filter</button>
                </div>
                <div className="toolbar-right">
                    <button className="primary-button"><FaPlus /> Create New Course</button>
                </div>
            </div>
            {renderContent()}
            <div className="pagination">
                <button className="pagination-btn">Previous</button>
                <div className="page-numbers">
                    <button className="page-btn active">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                </div>
                <button className="pagination-btn">Next</button>
            </div>
        </div>
    );
};

export default CourseListPage; 