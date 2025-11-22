import React from 'react';
import { FileText, Settings, Bell, Users } from 'lucide-react';
import '../../styles/components/Header.css';

const Header = ({ title = '' }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="page-title">{title}</h1>
      </div>
      
      <div className="header-right">
        <button className="header-btn">
          <FileText size={18} />
          <span>Reports</span>
        </button>
        
        <button className="header-btn">
          <Settings size={18} />
          <span>Setup</span>
        </button>

        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>

        <div className="header-user">
          <div className="header-avatar">
            <Users size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;