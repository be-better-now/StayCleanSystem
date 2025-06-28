import React from "react";
import { FaUsers, FaHeartbeat, FaBookOpen, FaUserMd, FaHandsHelping, FaEnvelope, FaUniversity, FaGlobe, FaPhoneAlt, FaAward, FaChartLine, FaShieldAlt, FaLightbulb, FaGraduationCap, FaHandshake, FaLeaf, FaEye, FaBalanceScale } from "react-icons/fa";

const team = [
  { name: "Dr. Anna Nguyen", role: "Founder & Executive Director", avatar: "AN", bio: "PhD in Public Health, 15+ years in substance abuse prevention" },
  { name: "Dr. David Tran", role: "Clinical Director", avatar: "DT", bio: "Licensed Clinical Psychologist, specializing in adolescent mental health" },
  { name: "Linh Pham", role: "Community Outreach Director", avatar: "LP", bio: "Former educator with 10+ years in community development" },
  { name: "Minh Le", role: "Technology Lead", avatar: "ML", bio: "Software engineer focused on accessible healthcare technology" },
  { name: "Sarah Johnson", role: "Research Coordinator", avatar: "SJ", bio: "MPH graduate with expertise in behavioral health research" },
  { name: "Michael Chen", role: "Youth Programs Manager", avatar: "MC", bio: "Certified prevention specialist with youth engagement focus" },
];

const partners = [
  { name: "UNICEF", icon: <FaGlobe color="#2563eb" />, type: "International Organization" },
  { name: "Ministry of Education", icon: <FaUniversity color="#f59e0b" />, type: "Government Agency" },
  { name: "Mental Health Association", icon: <FaHeartbeat color="#ef4444" />, type: "Healthcare Organization" },
  { name: "National Drug Prevention Council", icon: <FaShieldAlt color="#10b981" />, type: "Policy Organization" },
  { name: "Community Health Network", icon: <FaHandsHelping color="#6366f1" />, type: "Healthcare Network" },
  { name: "Youth Development Institute", icon: <FaGraduationCap color="#f97316" />, type: "Educational Institution" },
];

const achievements = [
  { icon: <FaAward color="#f59e0b" />, number: "15,000+", label: "Active Users", description: "Individuals actively engaged in prevention programs" },
  { icon: <FaChartLine color="#10b981" />, number: "96%", label: "Success Rate", description: "Participants report improved decision-making skills" },
  { icon: <FaUsers color="#2563eb" />, number: "50+", label: "Expert Counselors", description: "Licensed professionals providing support" },
  { icon: <FaBookOpen color="#8b5cf6" />, number: "200+", label: "Educational Resources", description: "Comprehensive prevention materials available" },
];

const methodology = [
  { title: "Evidence-Based Approach", description: "All our programs are grounded in scientific research and proven prevention strategies", icon: <FaBalanceScale color="#2563eb" /> },
  { title: "Personalized Learning", description: "Adaptive content that meets individual needs and learning styles", icon: <FaLightbulb color="#f59e0b" /> },
  { title: "Community-Centered", description: "Building strong networks of support through local partnerships and engagement", icon: <FaHandshake color="#10b981" /> },
  { title: "Continuous Improvement", description: "Regular evaluation and updates based on user feedback and outcomes", icon: <FaEye color="#8b5cf6" /> },
];

const AboutPage = () => (
  <div style={{ background: '#f5f7fa', minHeight: '100vh', padding: '40px 0' }}>
    <div style={{ maxWidth: 1000, margin: '0 auto', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.06)', padding: '48px 32px' }}>
      <h1 style={{ fontWeight: 800, fontSize: 42, color: '#1667d9', marginBottom: 16, letterSpacing: 1, textAlign: 'center' }}>
        About Stay Clean
      </h1>
      <p style={{ textAlign: 'center', color: '#64748b', fontSize: 20, marginBottom: 40, maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
        Empowering individuals and communities with evidence-based drug prevention strategies, comprehensive mental wellness support, and accessible educational resources for a healthier future.
      </p>

      {/* Who We Are */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, color: '#2563eb', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <FaUsers /> Who We Are
        </h2>
        <p style={{ fontSize: 18, color: '#222', lineHeight: 1.8, marginBottom: 16 }}>
          <b>Stay Clean</b> is a comprehensive, volunteer-driven initiative dedicated to drug prevention and mental wellness. Founded in 2020, we bring together health professionals, educators, researchers, and community leaders to create a safe, supportive, and scientifically-grounded platform for everyone—especially youth, families, and vulnerable populations.
        </p>
        <p style={{ fontSize: 18, color: '#222', lineHeight: 1.8, marginBottom: 0 }}>
          Our organization operates on the principle that prevention is more effective than treatment. We believe that by providing accessible, evidence-based resources and building strong community networks, we can significantly reduce substance abuse and promote mental well-being across all demographics.
        </p>
      </section>

      {/* Our Mission & Vision */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, color: '#2563eb', marginBottom: 16 }}>Our Mission & Vision</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 24 }}>
          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 24, borderLeft: '4px solid #2563eb' }}>
            <h3 style={{ fontWeight: 700, fontSize: 22, color: '#2563eb', marginBottom: 12 }}>Mission</h3>
            <p style={{ fontSize: 16, color: '#444', lineHeight: 1.7, marginBottom: 0 }}>
              To empower individuals and communities with the knowledge, tools, and support they need to prevent drug use before it begins, while promoting mental wellness and building resilient, healthy communities.
            </p>
          </div>
          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 24, borderLeft: '4px solid #10b981' }}>
            <h3 style={{ fontWeight: 700, fontSize: 22, color: '#10b981', marginBottom: 12 }}>Vision</h3>
            <p style={{ fontSize: 16, color: '#444', lineHeight: 1.7, marginBottom: 0 }}>
              A world where every individual has access to effective prevention resources, where communities are equipped to support mental wellness, and where substance abuse is significantly reduced through education and early intervention.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, color: '#2563eb', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <FaBookOpen /> What We Offer
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 24, border: '1px solid #e2e8f0' }}>
            <FaBookOpen color="#4f46e5" size={32} style={{ marginBottom: 12 }} />
            <h3 style={{ fontWeight: 700, fontSize: 20, color: '#2563eb', marginBottom: 8 }}>Comprehensive Courses</h3>
            <p style={{ fontSize: 16, color: '#444', lineHeight: 1.6, marginBottom: 0 }}>
              Interactive online prevention courses designed for different age groups, covering topics from basic drug education to advanced coping strategies and mental health awareness.
            </p>
          </div>
          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 24, border: '1px solid #e2e8f0' }}>
            <FaHeartbeat color="#ef4444" size={32} style={{ marginBottom: 12 }} />
            <h3 style={{ fontWeight: 700, fontSize: 20, color: '#2563eb', marginBottom: 8 }}>Risk Assessment Tools</h3>
            <p style={{ fontSize: 16, color: '#444', lineHeight: 1.6, marginBottom: 0 }}>
              Professional screening tools including ASSIST and CRAFFT assessments, providing early detection and personalized intervention recommendations.
            </p>
          </div>
          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 24, border: '1px solid #e2e8f0' }}>
            <FaUserMd color="#10b981" size={32} style={{ marginBottom: 12 }} />
            <h3 style={{ fontWeight: 700, fontSize: 20, color: '#2563eb', marginBottom: 8 }}>Expert Support Network</h3>
            <p style={{ fontSize: 16, color: '#444', lineHeight: 1.6, marginBottom: 0 }}>
              Access to licensed counselors, prevention specialists, and mental health professionals through our secure platform and referral system.
            </p>
          </div>
          <div style={{ background: '#f8fafc', borderRadius: 12, padding: 24, border: '1px solid #e2e8f0' }}>
            <FaHandsHelping color="#f59e0b" size={32} style={{ marginBottom: 12 }} />
            <h3 style={{ fontWeight: 700, fontSize: 20, color: '#2563eb', marginBottom: 8 }}>Community Programs</h3>
            <p style={{ fontSize: 16, color: '#444', lineHeight: 1.6, marginBottom: 0 }}>
              School partnerships, workshops, outreach programs, and community events designed to build supportive networks and promote prevention awareness.
            </p>
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, color: '#2563eb', marginBottom: 16 }}>Our Methodology</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
          {methodology.map((item, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '2px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ marginBottom: 16 }}>{item.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: '#2563eb', marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontSize: 15, color: '#444', lineHeight: 1.6, marginBottom: 0 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, color: '#2563eb', marginBottom: 16 }}>Core Values</h2>
        <div style={{ background: '#f8fafc', borderRadius: 12, padding: 32, border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: 20, color: '#2563eb', marginBottom: 8 }}>Empathy & Respect</h3>
              <p style={{ fontSize: 16, color: '#444', lineHeight: 1.6, marginBottom: 0 }}>
                We treat every individual with compassion, dignity, and understanding, recognizing that each person's journey is unique and valuable.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: 20, color: '#2563eb', marginBottom: 8 }}>Evidence-Based Integrity</h3>
              <p style={{ fontSize: 16, color: '#444', lineHeight: 1.6, marginBottom: 0 }}>
                All our content and programs are grounded in scientific research, clinical best practices, and proven prevention methodologies.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: 20, color: '#2563eb', marginBottom: 8 }}>Accessibility & Inclusion</h3>
              <p style={{ fontSize: 16, color: '#444', lineHeight: 1.6, marginBottom: 0 }}>
                We ensure our resources are accessible to all, regardless of background, location, or socioeconomic status.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: 20, color: '#2563eb', marginBottom: 8 }}>Collaboration & Partnership</h3>
              <p style={{ fontSize: 16, color: '#444', lineHeight: 1.6, marginBottom: 0 }}>
                We work closely with families, schools, healthcare providers, and community organizations to build comprehensive support networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, color: '#2563eb', marginBottom: 16, textAlign: 'center' }}>Our Impact</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
          {achievements.map((achievement, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 24, textAlign: 'center', border: '2px solid #e2e8f0' }}>
              <div style={{ marginBottom: 12 }}>{achievement.icon}</div>
              <div style={{ fontWeight: 800, fontSize: 28, color: '#2563eb', marginBottom: 4 }}>{achievement.number}</div>
              <div style={{ fontWeight: 700, fontSize: 16, color: '#2563eb', marginBottom: 8 }}>{achievement.label}</div>
              <div style={{ fontSize: 14, color: '#64748b', lineHeight: 1.5 }}>{achievement.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, color: '#2563eb', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <FaUsers /> Leadership Team
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {team.map((member, i) => (
            <div key={i} style={{ background: '#f8fafc', borderRadius: 12, padding: 24, border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#2563eb', color: '#fff', fontWeight: 700, fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{member.avatar}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 18, color: '#2563eb' }}>{member.name}</div>
                  <div style={{ color: '#64748b', fontSize: 14, fontWeight: 600 }}>{member.role}</div>
                </div>
              </div>
              <p style={{ fontSize: 14, color: '#444', lineHeight: 1.6, marginBottom: 0 }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, color: '#2563eb', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <FaGlobe /> Strategic Partners
        </h2>
        <p style={{ fontSize: 18, color: '#444', lineHeight: 1.7, marginBottom: 24 }}>
          We collaborate with leading organizations across healthcare, education, and community development to maximize our impact and reach.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
          {partners.map((partner, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 10, padding: 20, border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: 24 }}>{partner.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#2563eb' }}>{partner.name}</div>
                <div style={{ fontSize: 13, color: '#64748b' }}>{partner.type}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Future Goals */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, color: '#2563eb', marginBottom: 16 }}>Future Goals</h2>
        <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', borderRadius: 12, padding: 32, border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: 20, color: '#2563eb', marginBottom: 8 }}>Expansion & Reach</h3>
              <p style={{ fontSize: 16, color: '#444', lineHeight: 1.6, marginBottom: 0 }}>
                Expand our programs to reach 100,000+ users across multiple regions, with localized content and culturally-appropriate resources.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: 20, color: '#2563eb', marginBottom: 8 }}>Technology Innovation</h3>
              <p style={{ fontSize: 16, color: '#444', lineHeight: 1.6, marginBottom: 0 }}>
                Develop AI-powered personalized learning experiences and mobile applications for enhanced accessibility and engagement.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: 20, color: '#2563eb', marginBottom: 8 }}>Research & Development</h3>
              <p style={{ fontSize: 16, color: '#444', lineHeight: 1.6, marginBottom: 0 }}>
                Conduct longitudinal studies on prevention effectiveness and contribute to the global body of knowledge on substance abuse prevention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section style={{ marginBottom: 0 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, color: '#2563eb', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <FaEnvelope /> Get In Touch
        </h2>
        <div style={{ background: '#f8fafc', borderRadius: 12, padding: 32, border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24, marginBottom: 24 }}>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: '#2563eb', marginBottom: 8 }}>General Inquiries</h3>
              <div style={{ fontSize: 16, color: '#444', marginBottom: 4 }}>
                <FaEnvelope style={{ marginRight: 8 }} /> Email: <a href="mailto:info@stayclean.org" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>info@stayclean.org</a>
              </div>
              <div style={{ fontSize: 16, color: '#444' }}>
                <FaPhoneAlt style={{ marginRight: 8 }} /> Hotline: <a href="tel:+1234567890" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>+1 234 567 890</a>
              </div>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: '#2563eb', marginBottom: 8 }}>Support & Counseling</h3>
              <div style={{ fontSize: 16, color: '#444', marginBottom: 4 }}>
                <FaUserMd style={{ marginRight: 8 }} /> Support: <a href="mailto:support@stayclean.org" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>support@stayclean.org</a>
              </div>
              <div style={{ fontSize: 16, color: '#444' }}>
                <FaHeartbeat style={{ marginRight: 8 }} /> Crisis: <a href="tel:+1234567891" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>+1 234 567 891</a>
              </div>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: '#2563eb', marginBottom: 8 }}>Partnerships</h3>
              <div style={{ fontSize: 16, color: '#444', marginBottom: 4 }}>
                <FaHandshake style={{ marginRight: 8 }} /> Partnerships: <a href="mailto:partnerships@stayclean.org" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>partnerships@stayclean.org</a>
              </div>
              <div style={{ fontSize: 16, color: '#444' }}>
                <FaUniversity style={{ marginRight: 8 }} /> Education: <a href="mailto:education@stayclean.org" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>education@stayclean.org</a>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', paddingTop: 16, borderTop: '1px solid #e2e8f0' }}>
            <p style={{ fontSize: 16, color: '#64748b', marginBottom: 0 }}>
              <FaLeaf style={{ marginRight: 8 }} /> 
              Stay Clean is a registered 501(c)(3) non-profit organization. All services are provided free of charge to ensure accessibility for all.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default AboutPage; 