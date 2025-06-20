import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Login.css";
import "./ViewProfile.css";

function ViewProfilePage() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleChange = (field, value) => {
    setUser(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditing(false);
    //TODO: SEND NEW ITEM TO BACKEND TO UPDATE IN DATABASE

    setSuccessMessage("✅ Profile updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  if (!user) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>👤 Profile</h2>
        <p>No user data found. Please log in.</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        <h2 className="profile-title">YOUR PROFILE</h2>

        <form className="profile-form">

  <div className="profile-row">
    <label>First Name:</label>
    <input
      type="text"
      value={user.firstName || ''}
      onChange={(e) => handleChange("firstName", e.target.value)}
      className="profile-input"
      readOnly={!isEditing}
    />
  </div>

  <div className="profile-row">
    <label>Last Name:</label>
    <input
      type="text"
      value={user.lastName || ''}
      onChange={(e) => handleChange("lastName", e.target.value)}
      className="profile-input"
      readOnly={!isEditing}
    />
  </div>

  <div className="profile-row">
    <label>Username:</label>
    <input
      type="text"
      value={user.username || ''}
      onChange={(e) => handleChange("username", e.target.value)}
      className="profile-input"
      readOnly={!isEditing}
    />
  </div>

  <div className="profile-row">
    <label>Email:</label>
    <input
      type="email"
      value={user.email || ''}
      onChange={(e) => handleChange("email", e.target.value)}
      className="profile-input"
      readOnly={!isEditing}
    />
  </div>

  <div className="profile-row">
    <label>Gender:</label>
    <select
      value={user.sex || ''}
      onChange={(e) => handleChange("sex", e.target.value)}
      disabled={!isEditing}
      className="profile-select"
    >
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  </div>

  <div className="profile-row">
    <label>Birth Date:</label>
    <DatePicker
      selected={user.birth ? new Date(user.birth) : null}
      onChange={(date) => handleChange("birth", date)}
      dateFormat="yyyy-MM-dd"
      className="profile-datepicker form-control"
      placeholderText="Birth date"
      readOnly={!isEditing}
      disabled={!isEditing}
    />
  </div>

  <div className="profile-row">
  <label>Address:</label>
  <input
    type="text"
    value={user.address || ''}
    onChange={(e) => handleChange("address", e.target.value)}
    className="profile-input"
    readOnly={!isEditing}
  />
</div>

<div className="profile-row">
  <label>Phone:</label>
  <input
    type="tel"
    value={user.phone || ''}
    onChange={(e) => handleChange("phone", e.target.value)}
    className="profile-input"
    readOnly={!isEditing}
    placeholder="e.g. 0901234567"
  />
</div>

  {!isEditing ? (
    <button type="button" onClick={() => setIsEditing(true)} className="profile-button">
      EDIT PROFILE
    </button>
  ) : (
    <button type="button" onClick={handleSave} className="profile-button save">
      SAVE CHANGES
    </button>
  )}

  {successMessage && (
    <p style={{ color: "green", textAlign: "center", marginTop: 12 }}>
      {successMessage}
    </p>
  )}
</form>

      </div>
    </div>
  );
}

export default ViewProfilePage;
