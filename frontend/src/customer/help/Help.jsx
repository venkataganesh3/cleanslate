import React from 'react';
import './Help.css';

function Help() {
  return (
    <div className="help-container">
      <div className="help-info">Help & Support</div>
      <div className="line"></div>

      <div className="admin-details">
        <h2>Contact Admin</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> admin@example.com</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p><strong>Office Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</p>
        <p>If you need assistance, feel free to reach out to our admin team.</p>
      </div>
    </div>
  );
}

export default Help;
