import { useState } from 'react';
import { User, Lock, Bell as BellIcon } from 'lucide-react';

export default function Settings() {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    studentId: 'STU2023001',
    email: 'john.doe@university.edu',
    phone: '+1 (555) 123-4567',
    dob: '',
    address: ''
  });

  const handleSaveProfile = (e) => {
    e.preventDefault();
    alert('Changes saved successfully!');
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    alert('Password updated successfully!');
  };

  return (
    <div className="settings-page">
      <div className="page-header" style={{ marginBottom: '1.5rem' }}>
        <h2>Settings</h2>
        <p>Manage your account preferences and settings</p>
      </div>

      <div className="settings-container">
        {/* Profile Information */}
        <div className="card settings-card">
          <h3 className="card-title"><User size={20} /> Profile Information</h3>
          <form className="settings-form" onSubmit={handleSaveProfile}>
            <div className="form-row">
              <div className="form-group-sm">
                <label>First Name</label>
                <input type="text" defaultValue={formData.firstName} className="form-input-light" />
              </div>
              <div className="form-group-sm">
                <label>Last Name</label>
                <input type="text" defaultValue={formData.lastName} className="form-input-light" />
              </div>
            </div>

            <div className="form-group-sm">
              <label>Student ID</label>
              <input type="text" defaultValue={formData.studentId} className="form-input-light" disabled style={{ background: '#f8fafc' }} />
            </div>

            <div className="form-row">
              <div className="form-group-sm">
                <label>Email</label>
                <input type="email" defaultValue={formData.email} className="form-input-light" />
              </div>
              <div className="form-group-sm">
                <label>Phone</label>
                <input type="tel" defaultValue={formData.phone} className="form-input-light" />
              </div>
            </div>

            <div className="form-group-sm">
              <label>Date of Birth</label>
              <input type="date" className="form-input-light" />
            </div>

            <div className="form-group-sm">
              <label>Address</label>
              <textarea className="form-input-light" rows="3"></textarea>
            </div>

            <div className="form-actions" style={{ justifyContent: 'flex-end', display: 'flex', marginTop: '1.5rem' }}>
              <button type="submit" className="primary-btn">Save Changes</button>
            </div>
          </form>
        </div>

        {/* Security / Password */}
        <div className="card settings-card">
          <h3 className="card-title"><Lock size={20} /> Security</h3>
          <form className="settings-form" onSubmit={handleUpdatePassword}>
            <div className="form-group-sm">
              <label>Current Password</label>
              <input type="password" placeholder="Enter current password" className="form-input-light" />
            </div>
            <div className="form-group-sm">
              <label>New Password</label>
              <input type="password" placeholder="Enter new password" className="form-input-light" />
            </div>
            <div className="form-group-sm">
              <label>Confirm New Password</label>
              <input type="password" placeholder="Confirm new password" className="form-input-light" />
            </div>
            
            <div className="form-actions" style={{ justifyContent: 'flex-end', display: 'flex', marginTop: '1.5rem' }}>
              <button type="submit" className="primary-btn">Update Password</button>
            </div>
          </form>
        </div>

        {/* Notifications */}
        <div className="card settings-card">
          <h3 className="card-title"><BellIcon size={20} /> Notifications</h3>
          <div className="settings-list">
            <div className="toggle-item">
              <div className="toggle-info">
                <strong>Email Notifications</strong>
                <p>Receive email updates about assignments and exams</p>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>

            <div className="toggle-item">
              <div className="toggle-info">
                <strong>Push Notifications</strong>
                <p>Get notified about new announcements</p>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>

            <div className="toggle-item">
              <div className="toggle-info">
                <strong>SMS Notifications</strong>
                <p>Receive text messages for urgent updates</p>
              </div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
