import React from 'react';
import instructorImg from '/images/erwin-pfp.jpg'; // Update path if needed
import courseVideo from '/images/erwin-pfp.jpg'; // Update path if needed

const CourseContent = () => {
  return (
    <main style={{ display: 'flex', gap: '2rem', padding: '2rem', fontFamily: 'Arial, sans-serif', background: 'white'}}>
      {/* Left: Video + Info */}
      <div style={{ flex: 2 }}>
        <div
          style={{
            width: '100%',
            height: '260px',
            background: `url(${courseVideo}) center/cover no-repeat`,
            position: 'relative',
            borderRadius: '10px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '40px',
            }}
          >
          </div>
        </div>

        <h2 style={{ marginTop: '1rem' }}>Course Instructors</h2>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
          <img
            src={instructorImg}
            alt="Jordan Lee"
            style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
          />
          <span style={{ background: '#ddd', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Jordan Lee,</span>
        </div>
        <p style={{ margin: '0.2rem 0' }}>⏱️ 45m</p>
        <p style={{ margin: '0.2rem 0' }}>⭐ 4.8 / 5.0</p>

        <h3 style={{ marginTop: '1rem' }}>Course Description</h3>
        <p style={{ lineHeight: '1.5' }}>
          This course aims to equip individuals with the knowledge and skills necessary to effectively manage drug
          prevention efforts and support services in their communities.
        </p>
      </div>

      {/* Right: Course Overview */}
      <div style={{ flex: 1.5, background: '#d3d3d3', padding: '1.5rem', borderRadius: '10px' }}>
        <h2 style={{ marginTop: 0 }}>Course Overview</h2>

        <div style={{ marginTop: '1rem' }}>
          <div style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
            <span>Introduction</span>
            <span>▶️</span>
          </div>
          <p style={{ marginLeft: '1rem', fontSize: '0.95em' }}>1 video</p>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <div style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
            <span>1. Understanding Drug Abuse</span>
            <span>🔽</span>
          </div>
          <div style={{ marginLeft: '1rem', fontSize: '0.95em' }}>
            <p>2. Prevention Strategies – 5m 30s</p>
            <p>3. Support Services – 4m 15s</p>
            <p>4. Community Resources – 3m 50s</p>
            <p>5. Effective Communication – 6m 20s</p>
          </div>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <div style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
            <span>2. Assessment Techniques</span>
            <span>▶️</span>
          </div>
          <p style={{ marginLeft: '1rem', fontSize: '0.95em' }}>8 videos</p>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <div style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
            <span>3. Engaging Stakeholders</span>
            <span>▶️</span>
          </div>
          <p style={{ marginLeft: '1rem', fontSize: '0.95em' }}>5 videos</p>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <div style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
            <span>Feedback Session</span>
            <span>▶️</span>
          </div>
          <p style={{ marginLeft: '1rem', fontSize: '0.95em' }}>1 video</p>
        </div>
      </div>
    </main>
  );
};

export default CourseContent;
