import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer-mind py-5">
            <div className="container">
                <div className="row gy-4 align-items-start">
                    {/* 1. Support/Hotline */}
                    <div className="col-12 col-md-3 mb-4 mb-md-0">
                        <div className="fw-bold mb-2">StayClean Support</div>
                        <div className="footer-hotline">Call our hotline</div>
                        <div className="footer-hotline-number">1800 123 456</div>
                    </div>
                    {/* 2. Legal */}
                    <div className="col-6 col-md-2">
                        <div className="fw-bold mb-2">Legal</div>
                        <ul className="footer-list">
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms & Conditions</a></li>
                            <li><a href="/cookies">Cookie Policy</a></li>
                            <li><a href="/report">Report Abuse</a></li>
                        </ul>
                    </div>
                    {/* 3. Contact */}
                    <div className="col-6 col-md-2">
                        <div className="fw-bold mb-2">Contact</div>
                        <ul className="footer-list">
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/help">Help Center</a></li>
                            <li><a href="/media">Media Centre</a></li>
                        </ul>
                    </div>
                    {/* 4. Working with Us */}
                    <div className="col-6 col-md-2">
                        <div className="fw-bold mb-2">Working with Us</div>
                        <ul className="footer-list">
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/volunteer">Volunteering</a></li>
                        </ul>
                    </div>
                    {/* 5. Accessibility */}
                    <div className="col-6 col-md-2">
                        <div className="fw-bold mb-2">Accessibility</div>
                        <ul className="footer-list">
                            <li><a href="/accessibility">Accessibility</a></li>
                        </ul>
                    </div>
                    {/* 6. Social Icons */}
                    <div
                        className="col-12 d-flex justify-content-md-end justify-content-center align-items-center gap-3 mt-4 mt-md-0">
                        {/* Replace # with your links */}
                        <a href="#" className="footer-social-icon" aria-label="Facebook"><i
                            className="fab fa-facebook-f"></i></a>
                        <a href="#" className="footer-social-icon" aria-label="Instagram"><i
                            className="fab fa-instagram"></i></a>
                        <a href="#" className="footer-social-icon" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
                        <a href="#" className="footer-social-icon" aria-label="YouTube"><i
                            className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div
                    className="footer-bottom mt-5 d-flex flex-column flex-md-row align-items-center justify-content-between">
                    <div className="footer-logo mb-3 mb-md-0">
                        {/* Replace with your logo or SVG */}
                        <span className="fw-bold fs-4">StayClean</span>
                    </div>
                    <div className="footer-copyright text-center text-md-end small">
                        © 2025 StayClean. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
} 