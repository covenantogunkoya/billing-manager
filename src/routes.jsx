import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import CustomersPage from './pages/CustomersPage';
import OrdersPage from './pages/OrdersPage';
import RequestsPage from './pages/RequestsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      {
        path: 'customers',
        element: <CustomersPage />
      },
      {
        path: 'requests',
        element: <RequestsPage /> 
      },
      {
        path: 'orders',
        element: <OrdersPage />
      },
      {
        path: 'complaints',
        element: <div style={{padding: '20px', color: 'white'}}>Complaints Page - Coming Soon</div>
      },
      {
        path: 'announcements',
        element: <div style={{padding: '20px', color: 'white'}}>Announcements Page - Coming Soon</div>
      },
      {
        path: 'bill-generator',
        element: <div style={{padding: '20px', color: 'white'}}>Bill Generator Page - Coming Soon</div>
      },
      {
        path: 'email-bills',
        element: <div style={{padding: '20px', color: 'white'}}>Email Bills Page - Coming Soon</div>
      }
    ]
  }
]);