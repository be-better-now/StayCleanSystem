import React from "react";
import "./Footer.css";
import ShieldLogo from "../assets/shield-logo.svg";

const Footer = () => (
  <footer className="footer-modern">
    <div className="footer-inner">
      <div className="footer-brand">
        <img src={ShieldLogo} alt="Logo" className="footer-logo" />
        <span className="footer-title">Stay Clean</span>
        <p className="footer-desc">Empowering communities to prevent substance abuse through education, support, and technology.</p>
        <div className="footer-hotline"><strong>Hotline:</strong> 1800 123 456</div>
        <div className="footer-apps">
          <a href="#" aria-label="App Store"><i className="fab fa-apple"></i></a>
          <a href="#" aria-label="Google Play"><i className="fab fa-google-play"></i></a>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div className="footer-cols">
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Partners</a>
          <a href="#">Press</a>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <a href="#">Blog</a>
          <a href="#">Courses</a>
          <a href="#">Programs</a>
          <a href="#">Events</a>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
          <a href="#">Community</a>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <form className="footer-newsletter" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email address" />
            <button type="submit"><i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </div>
    <div className="footer-legal">
      <span>© {new Date().getFullYear()} Stay Clean. All rights reserved.</span>
      <span className="footer-legal-links">
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
      </span>
    </div>
  </footer>
);

export default Footer; 