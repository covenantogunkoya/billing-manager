import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, FileText, ShoppingCart, MessageSquare, Bell, FileSpreadsheet, Mail, LogOut } from 'lucide-react';
import '../../styles/components/Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { path: '/customers', icon: Users, label: 'Customers' },
    { path: '/requests', icon: FileText, label: 'Requests' },
    { path: '/orders', icon: ShoppingCart, label: 'Orders' },
    { path: '/complaints', icon: MessageSquare, label: 'Complaints' },
    { path: '/announcements', icon: Bell, label: 'Announcement' },
    { path: '/bill-generator', icon: FileSpreadsheet, label: 'Bill Generator' },
    { path: '/email-bills', icon: Mail, label: 'Email Bills' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            <FileSpreadsheet size={24} />
          </div>
          <span className="logo-text">Billing Manager System</span>
        </div>
      </div>

      <div className="user-profile">
        <div className="user-avatar">
          <div className="avatar-placeholder">
            <Users size={32} />
          </div>
        </div>
        <div className="user-info">
          <div className="user-name">Sample Name</div>
          <div className="user-role">Admin</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <item.icon size={20} className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <button className="logout-btn">
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;