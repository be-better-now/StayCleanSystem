import React from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";

const HomePage = () => (
    <div className="homepage-container">
        {/* Hero Section */}
        <section className="hero-section d-flex align-items-center justify-content-center text-center w-100">
            <div className="hero-content w-100">
                <h1 className="display-3 fw-bold mb-3">Stay Clean</h1>
                <p className="lead mb-4">
                    Empowering communities to prevent substance abuse through education, support, and technology.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                    <Link to="/login" className="btn btn-primary btn-lg">Get Started</Link>
                    <Link to="/courses" className="btn btn-outline-light btn-lg">View Courses</Link>
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="features-section w-100 py-5">
            <h2 className="h3 mb-4 text-center fw-bold">Key Features</h2>
            <div className="row justify-content-center g-4">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card feature-card h-100 text-center shadow-sm">
                        <div className="card-body">
                            <div className="feature-icon mb-3">
                                <span role="img" aria-label="Account" style={{fontSize: "2.5rem"}}>👤</span>
                            </div>
                            <h5 className="card-title fw-bold">Easy Account Access</h5>
                            <p className="card-text">Register and login quickly to access all system features.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card feature-card h-100 text-center shadow-sm">
                        <div className="card-body">
                            <div className="feature-icon mb-3">
                                <span role="img" aria-label="Program" style={{fontSize: "2.5rem"}}>🎯</span>
                            </div>
                            <h5 className="card-title fw-bold">Prevention Programs</h5>
                            <p className="card-text">Join and track your progress in various prevention programs.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card feature-card h-100 text-center shadow-sm">
                        <div className="card-body">
                            <div className="feature-icon mb-3">
                                <span role="img" aria-label="Survey" style={{fontSize: "2.5rem"}}>📝</span>
                            </div>
                            <h5 className="card-title fw-bold">Risk Assessment Surveys</h5>
                            <p className="card-text">Take surveys to assess and understand your risk level.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card feature-card h-100 text-center shadow-sm">
                        <div className="card-body">
                            <div className="feature-icon mb-3">
                                <span role="img" aria-label="Consultation" style={{fontSize: "2.5rem"}}>💬</span>
                            </div>
                            <h5 className="card-title fw-bold">Expert Consultation</h5>
                            <p className="card-text">Book appointments and get advice from experienced consultants.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card feature-card h-100 text-center shadow-sm">
                        <div className="card-body">
                            <div className="feature-icon mb-3">
                                <span role="img" aria-label="Courses" style={{fontSize: "2.5rem"}}>🎓</span>
                            </div>
                            <h5 className="card-title fw-bold">Online Courses</h5>
                            <p className="card-text">Participate in interactive courses to enhance your knowledge.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card feature-card h-100 text-center shadow-sm">
                        <div className="card-body">
                            <div className="feature-icon mb-3">
                                <span role="img" aria-label="Resources" style={{fontSize: "2.5rem"}}>📚</span>
                            </div>
                            <h5 className="card-title fw-bold">Resource Library</h5>
                            <p className="card-text">Read blogs, documents, and guides for more information.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default HomePage; 