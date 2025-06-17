import React from "react";

const AboutPage = () => (
  <div style={{ background: '#f5f7fa', minHeight: '100vh', padding: '56px 0' }}>
    <div style={{ maxWidth: 1000, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.06)', padding: '56px 48px' }}>
      <h1 style={{ fontWeight: 800, fontSize: 38, color: '#1667d9', marginBottom: 32, letterSpacing: 1 }}>
        About Us
      </h1>
      <section style={{ marginBottom: 40 }}>
        <p style={{ fontSize: 22, color: '#333', lineHeight: 1.8, marginBottom: 18 }}>
          <b>Stay Clean</b> is a web-based support system dedicated to preventing drug use through education, early risk detection, and personalized intervention. Developed by a team of volunteers and health professionals, the platform serves as a safe and accessible space where individuals—especially youth—can learn, reflect, and take action.
        </p>
        <p style={{ fontSize: 22, color: '#333', lineHeight: 1.8 }}>
          The platform offers online training courses, risk assessment tools (such as <b>ASSIST</b> and <b>CRAFFT</b>), and appointment booking with expert counselors. It also supports schools and community organizations in managing outreach activities, tracking impact, and promoting healthier choices.
        </p>
      </section>
      <h2 style={{ fontWeight: 700, fontSize: 28, color: '#1667d9', marginTop: 0, marginBottom: 18 }}>Our Mission</h2>
      <section style={{ marginBottom: 40 }}>
        <p style={{ fontSize: 20, color: '#222', lineHeight: 1.7, marginBottom: 12 }}>
          Our mission is to empower individuals and communities with the knowledge, tools, and support they need to prevent drug use before it begins.
        </p>
        <p style={{ fontSize: 20, color: '#222', lineHeight: 1.7 }}>
          We believe that prevention works best when it is proactive, data-driven, and rooted in human connection. Stay Clean exists to support each step of that journey—building awareness, encouraging safe choices, and strengthening community care.
        </p>
      </section>
      <h2 style={{ fontWeight: 700, fontSize: 28, color: '#1667d9', marginTop: 0, marginBottom: 18 }}>Core Values</h2>
      <ol style={{ fontSize: 20, color: '#222', marginBottom: 24, lineHeight: 1.8, paddingLeft: 32 }}>
        <li><b>Customers at the Center</b><br />We design every feature with the user in mind—ensuring simplicity, privacy, and relevance. Whether someone is seeking help, learning new information, or supporting others, Stay Clean adapts to their needs.</li>
        <li style={{marginTop: 16}}><b>Science-Based Integrity</b><br />Our tools and content are grounded in reliable research and public health standards. We do not compromise on accuracy or quality.</li>
        <li style={{marginTop: 16}}><b>Accessibility for All</b><br />We make prevention resources easy to find, understand, and apply—regardless of age, background, or location.</li>
        <li style={{marginTop: 16}}><b>Empathy and Respect</b><br />We treat every user with compassion. We understand that behind every choice is a story, and behind every question is a need for support.</li>
        <li style={{marginTop: 16}}><b>Collaboration with Communities</b><br />We work hand-in-hand with families, schools, experts, and volunteers to build a network of care and education that reaches far beyond the screen.</li>
      </ol>
    </div>
  </div>
);

export default AboutPage; 