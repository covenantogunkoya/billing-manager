import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import RequestsTable from '../components/requests/RequestsTable';
import Button from '../components/common/Button';
import '../styles/pages/RequestsPage.css';

const RequestsPage = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      date: '2020-04-09',
      name: 'Sample Name',
      customerId: 'PBS001',
      status: 'Pending',
      requestType: 'Renewal',
      section: 'Technical'
    },
    {
      id: 2,
      date: '2020-04-09',
      name: 'Sample Name',
      customerId: 'PBS002',
      status: 'Pending',
      requestType: 'Upgrade',
      section: 'Technical'
    },
    {
      id: 3,
      date: '2020-04-09',
      name: 'Sample Name',
      customerId: 'PBS003',
      status: 'Pending',
      requestType: 'Renewal',
      section: 'Technical'
    },
    {
      id: 4,
      date: '2020-04-09',
      name: 'Sample Name',
      customerId: 'PBS004',
      status: 'Pending',
      requestType: 'Renewal',
      section: 'Technical'
    },
    {
      id: 5,
      date: '2020-04-09',
      name: 'Sample Name',
      customerId: 'PBS005',
      status: 'Pending',
      requestType: 'Others',
      section: 'Technical'
    },
    {
      id: 6,
      date: '2020-04-10',
      name: 'John Doe',
      customerId: 'PBS006',
      status: 'Pending',
      requestType: 'Installation',
      section: 'Sales'
    },
    {
      id: 7,
      date: '2020-04-10',
      name: 'Jane Smith',
      customerId: 'PBS007',
      status: 'Pending',
      requestType: 'Upgrade',
      section: 'Technical'
    },
    {
      id: 8,
      date: '2020-04-11',
      name: 'Michael Johnson',
      customerId: 'PBS008',
      status: 'Pending',
      requestType: 'Renewal',
      section: 'Support'
    },
    {
      id: 9,
      date: '2020-04-11',
      name: 'Sarah Williams',
      customerId: 'PBS009',
      status: 'Pending',
      requestType: 'Cancellation',
      section: 'Billing'
    },
    {
      id: 10,
      date: '2020-04-12',
      name: 'David Brown',
      customerId: 'PBS010',
      status: 'Pending',
      requestType: 'Renewal',
      section: 'Technical'
    },
    {
      id: 11,
      date: '2020-04-12',
      name: 'Emily Davis',
      customerId: 'PBS011',
      status: 'Pending',
      requestType: 'Upgrade',
      section: 'Sales'
    },
    {
      id: 12,
      date: '2020-04-13',
      name: 'James Wilson',
      customerId: 'PBS012',
      status: 'Pending',
      requestType: 'Installation',
      section: 'Technical'
    },
    {
      id: 13,
      date: '2020-04-13',
      name: 'Lisa Anderson',
      customerId: 'PBS013',
      status: 'Pending',
      requestType: 'Renewal',
      section: 'Support'
    },
    {
      id: 14,
      date: '2020-04-14',
      name: 'Robert Taylor',
      customerId: 'PBS014',
      status: 'Pending',
      requestType: 'Others',
      section: 'Technical'
    },
    {
      id: 15,
      date: '2020-04-14',
      name: 'Maria Garcia',
      customerId: 'PBS015',
      status: 'Pending',
      requestType: 'Upgrade',
      section: 'Sales'
    },
    {
      id: 16,
      date: '2020-04-15',
      name: 'Christopher Martinez',
      customerId: 'PBS016',
      status: 'Pending',
      requestType: 'Renewal',
      section: 'Technical'
    },
    {
      id: 17,
      date: '2020-04-15',
      name: 'Jennifer Rodriguez',
      customerId: 'PBS017',
      status: 'Pending',
      requestType: 'Installation',
      section: 'Technical'
    },
    {
      id: 18,
      date: '2020-04-16',
      name: 'Daniel Lee',
      customerId: 'PBS018',
      status: 'Pending',
      requestType: 'Upgrade',
      section: 'Support'
    },
    {
      id: 19,
      date: '2020-04-16',
      name: 'Patricia Thomas',
      customerId: 'PBS019',
      status: 'Pending',
      requestType: 'Renewal',
      section: 'Technical'
    },
    {
      id: 20,
      date: '2020-04-17',
      name: 'Matthew White',
      customerId: 'PBS020',
      status: 'Pending',
      requestType: 'Others',
      section: 'Billing'
    },
    {
      id: 21,
      date: '2020-04-17',
      name: 'Linda Harris',
      customerId: 'PBS021',
      status: 'Pending',
      requestType: 'Upgrade',
      section: 'Technical'
    },
    {
      id: 22,
      date: '2020-04-18',
      name: 'Anthony Clark',
      customerId: 'PBS022',
      status: 'Pending',
      requestType: 'Renewal',
      section: 'Sales'
    },
    {
      id: 23,
      date: '2020-04-18',
      name: 'Barbara Lewis',
      customerId: 'PBS023',
      status: 'Pending',
      requestType: 'Installation',
      section: 'Technical'
    },
    {
      id: 24,
      date: '2020-04-19',
      name: 'Steven Walker',
      customerId: 'PBS024',
      status: 'Pending',
      requestType: 'Renewal',
      section: 'Support'
    },
    {
      id: 25,
      date: '2020-04-19',
      name: 'Elizabeth Hall',
      customerId: 'PBS025',
      status: 'Pending',
      requestType: 'Upgrade',
      section: 'Technical'
    }
  ]);

  const handleAddRequest = () => {
    alert('Add Request Modal - Coming Soon!');
  };

  const handleEditRequest = (request) => {
    alert(`Edit Request: ${request.customerId}`);
  };

  const handleDeleteRequest = (requestId) => {
    if (window.confirm('Are you sure you want to delete this request?')) {
      setRequests(prev => prev.filter(req => req.id !== requestId));
    }
  };

  const handleViewRequest = (request) => {
    alert(`View Request Details: ${request.customerId}`);
  };

  return (
    <div className="requests-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '600', color: '#ffffff', fontFamily: 'Poppins, sans-serif', margin: '0' }}>
          Requests
        </h1>
        <Button 
          variant="primary" 
          icon={Plus}
          onClick={handleAddRequest}
        >
          Add Request
        </Button>
      </div>
      
      <RequestsTable
        requests={requests}
        onAdd={handleAddRequest}
        onEdit={handleEditRequest}
        onDelete={handleDeleteRequest}
        onView={handleViewRequest}
      />
    </div>
  );
};

export default RequestsPage;