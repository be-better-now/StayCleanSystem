import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import heroBg from "../assets/premium_photo-1733342579090-03fc5560cc6f.avif";
import { 
  FaUserShield, 
  FaChartLine, 
  FaBookOpen, 
  FaHandsHelping, 
  FaClipboardCheck, 
  FaComments, 
  FaRocket, 
  FaUserFriends, 
  FaCheckCircle, 
  FaUniversity, 
  FaQuoteLeft,
  FaHeart,
  FaGraduationCap,
  FaUsers,
  FaAward,
  FaPlay,
  FaArrowRight,
  FaStar
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserShield size={40} color="#4f46e5" />,
    title: "Safe & Secure",
    desc: "Your privacy and data are protected with enterprise-grade security measures."
  },
  {
    icon: <FaBookOpen size={40} color="#4f46e5" />,
    title: "Expert-Led Courses",
    desc: "Learn from certified professionals and industry experts in substance prevention."
  },
  {
    icon: <FaClipboardCheck size={40} color="#4f46e5" />,
    title: "Personalized Assessment",
    desc: "Get customized recommendations based on your unique situation and goals."
  },
  {
    icon: <FaHandsHelping size={40} color="#4f46e5" />,
    title: "24/7 Support",
    desc: "Access professional guidance and community support whenever you need it."
  },
  {
    icon: <FaChartLine size={40} color="#4f46e5" />,
    title: "Progress Tracking",
    desc: "Monitor your journey with detailed analytics and achievement milestones."
  },
  {
    icon: <FaComments size={40} color="#4f46e5" />,
    title: "Supportive Community",
    desc: "Connect with peers who share similar goals and experiences."
  }
];

const stats = [
  { label: "Active Learners", value: "15,000+", icon: <FaUsers size={24} /> },
  { label: "Expert Courses", value: "100+", icon: <FaGraduationCap size={24} /> },
  { label: "Certified Experts", value: "50+", icon: <FaAward size={24} /> },
  { label: "Success Rate", value: "96%", icon: <FaHeart size={24} /> }
];

const steps = [
  {
    icon: <FaRocket size={32} color="#f59e0b" />,
    title: "Join Our Community",
    desc: "Create your free account and start your journey to a healthier lifestyle."
  },
  {
    icon: <FaUserFriends size={32} color="#f59e0b" />,
    title: "Choose Your Path",
    desc: "Select from our comprehensive range of prevention programs and courses."
  },
  {
    icon: <FaCheckCircle size={32} color="#f59e0b" />,
    title: "Transform Your Life",
    desc: "Track your progress, celebrate milestones, and achieve lasting positive change."
  }
];

const testimonials = [
  {
    quote: "Stay Clean gave me the knowledge and confidence to make better choices. The community support is incredible!",
    name: "Sarah Johnson",
    role: "University Student",
    rating: 5,
    avatar: "SJ"
  },
  {
    quote: "The expert guidance and interactive courses completely changed my perspective. I feel empowered and supported.",
    name: "Michael Chen",
    role: "Young Professional",
    rating: 5,
    avatar: "MC"
  },
  {
    quote: "As a parent, I'm grateful for the resources that help me guide my children toward healthy choices.",
    name: "Emily Rodriguez",
    role: "Parent",
    rating: 5,
    avatar: "ER"
  }
];

const partners = [
  { name: "UNICEF", logo: "🌍" },
  { name: "World Health Organization", logo: "🏥" },
  { name: "Youth Development Foundation", logo: "🌟" },
  { name: "Ministry of Education", logo: "📚" },
  { name: "Mental Health Association", logo: "🧠" },
  { name: "Community Health Network", logo: "🏘️" }
];

const HomePage = () => (
  <div className="homepage-modern">
    {/* Hero Section */}
    <section className="hero-modern" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay">
        <div className="hero-content-modern">
          <div className="hero-badge">
            <FaStar size={16} />
            <span>Trusted by 15,000+ learners worldwide</span>
          </div>
          <h1>Your Journey to a Healthier Life Starts Here</h1>
          <p>Join our supportive community and discover evidence-based strategies for substance prevention, mental wellness, and personal growth. Together, we build stronger, healthier futures.</p>
          <div className="hero-actions">
            <Link to="/register" className="btn-hero-main">
              Start Your Journey
              <FaArrowRight size={16} />
            </Link>
            <Link to="/courses" className="btn-hero-outline">
              <FaPlay size={14} />
              Explore Courses
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">96%</span>
              <span className="hero-stat-label">Success Rate</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">24/7</span>
              <span className="hero-stat-label">Support Available</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">100+</span>
              <span className="hero-stat-label">Expert Courses</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Statistics Section */}
    <section className="stats-modern">
      {stats.map((stat, i) => (
        <div className="stat-item" key={i}>
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </section>

    {/* Features Section */}
    <section className="features-modern">
      <div className="section-header">
        <h2>Why Choose Stay Clean?</h2>
        <p>We're committed to providing you with the best resources and support for your wellness journey</p>
      </div>
      <div className="features-list">
        {features.map((feature, i) => (
          <div className="feature-card-modern" key={i}>
            <div className="feature-icon-modern">{feature.icon}</div>
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* How It Works Section */}
    <section className="howitworks-modern">
      <div className="section-header">
        <h2>Your Journey in Three Simple Steps</h2>
        <p>Getting started is easy and takes just a few minutes</p>
      </div>
      <div className="howitworks-steps">
        {steps.map((step, i) => (
          <div className="howitworks-step" key={i}>
            <div className="step-number">{i + 1}</div>
            <div className="howitworks-icon">{step.icon}</div>
            <div className="howitworks-content">
              <h3 className="howitworks-step-title">{step.title}</h3>
              <p className="howitworks-step-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="testimonials-modern">
      <div className="section-header">
        <h2>What Our Community Says</h2>
        <p>Real stories from real people who transformed their lives</p>
      </div>
      <div className="testimonials-list">
        {testimonials.map((testimonial, i) => (
          <div className="testimonial-card" key={i}>
            <div className="testimonial-rating">
              {[...Array(testimonial.rating)].map((_, index) => (
                <FaStar key={index} size={16} color="#fbbf24" />
              ))}
            </div>
            <div className="testimonial-quote">
              <FaQuoteLeft className="testimonial-quote-icon" />
              {testimonial.quote}
            </div>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{testimonial.avatar}</div>
              <div className="testimonial-info">
                <div className="testimonial-name">{testimonial.name}</div>
                <div className="testimonial-role">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Partners Section */}
    <section className="partners-modern">
      <div className="section-header">
        <h2>Trusted by Leading Organizations</h2>
        <p>We partner with world-renowned institutions to deliver the highest quality education</p>
      </div>
      <div className="partners-list">
        {partners.map((partner, i) => (
          <div className="partner-item" key={i}>
            <div className="partner-logo">{partner.logo}</div>
            <div className="partner-name">{partner.name}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="cta-modern">
      <div className="cta-content">
        <h2>Ready to Transform Your Life?</h2>
        <p>Join thousands of learners who have already started their journey to better health and wellness</p>
        <div className="cta-actions">
          <Link to="/register" className="btn-cta-primary">
            Get Started Today
            <FaArrowRight size={16} />
          </Link>
          <Link to="/courses" className="btn-cta-secondary">
            Browse Courses
          </Link>
        </div>
        <div className="cta-guarantee">
          <FaCheckCircle size={20} color="#10b981" />
          <span>Free to join • No commitment required • Cancel anytime</span>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage; 