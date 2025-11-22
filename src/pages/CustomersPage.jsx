import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import CustomerTable from '../components/customers/CustomerTable';
import Button from '../components/common/Button';
import '../styles/pages/CustomersPage.css';

const CustomersPage = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '08012345678',
      location: 'Lagos/Gbagada/Soluyi',
      address: '123 Sample Street, Soluyi, Gbagada',
      plan: 'Gold',
      amount: 15000.000,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '08012345679',
      location: 'Lagos/Ikeja/Allen',
      address: '45 Allen Avenue, Ikeja',
      plan: 'Platinum',
      amount: 25000.000,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      email: 'michael.j@email.com',
      phone: '08012345680',
      location: 'Lagos/Lekki/Phase 1',
      address: '12 Admiralty Way, Lekki Phase 1',
      plan: 'Premium',
      amount: 30000.000,
      status: 'Inactive'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah.w@email.com',
      phone: '08012345681',
      location: 'Lagos/Victoria Island/VI',
      address: '78 Akin Adesola Street, VI',
      plan: 'Silver',
      amount: 10000.000,
      status: 'Active'
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david.b@email.com',
      phone: '08012345682',
      location: 'Lagos/Ajah/Sangotedo',
      address: '34 Lekki-Epe Expressway, Sangotedo',
      plan: 'Premium+',
      amount: 35000.000,
      status: 'Active'
    },
    {
      id: 6,
      name: 'Emily Davis',
      email: 'emily.d@email.com',
      phone: '08012345683',
      location: 'Lagos/Surulere/Adeniran',
      address: '56 Adeniran Ogunsanya Street, Surulere',
      plan: 'Gold',
      amount: 15000.000,
      status: 'Inactive'
    },
    {
      id: 7,
      name: 'James Wilson',
      email: 'james.w@email.com',
      phone: '08012345684',
      location: 'Lagos/Yaba/Akoka',
      address: '89 Herbert Macaulay Way, Yaba',
      plan: 'Platinum',
      amount: 25000.000,
      status: 'Active'
    },
    {
      id: 8,
      name: 'Lisa Anderson',
      email: 'lisa.a@email.com',
      phone: '08012345685',
      location: 'Lagos/Ikoyi/Banana Island',
      address: '23 Banana Island Road, Ikoyi',
      plan: 'Premium+',
      amount: 50000.000,
      status: 'Active'
    },
    {
      id: 9,
      name: 'Robert Taylor',
      email: 'robert.t@email.com',
      phone: '08012345686',
      location: 'Lagos/Maryland/Ojota',
      address: '67 Ikorodu Road, Maryland',
      plan: 'Silver',
      amount: 10000.000,
      status: 'Active'
    },
    {
      id: 10,
      name: 'Maria Garcia',
      email: 'maria.g@email.com',
      phone: '08012345687',
      location: 'Lagos/Festac/Amuwo',
      address: '90 23 Road, Festac Town',
      plan: 'Gold',
      amount: 15000.000,
      status: 'Inactive'
    },
    {
      id: 11,
      name: 'Christopher Martinez',
      email: 'chris.m@email.com',
      phone: '08012345688',
      location: 'Lagos/Apapa/Wharf',
      address: '12 Wharf Road, Apapa',
      plan: 'Premium',
      amount: 30000.000,
      status: 'Active'
    },
    {
      id: 12,
      name: 'Jennifer Rodriguez',
      email: 'jennifer.r@email.com',
      phone: '08012345689',
      location: 'Lagos/Agege/Ikeja Along',
      address: '45 Oba Ogunji Road, Agege',
      plan: 'Silver',
      amount: 10000.000,
      status: 'Active'
    },
    {
      id: 13,
      name: 'Daniel Lee',
      email: 'daniel.l@email.com',
      phone: '08012345690',
      location: 'Lagos/Badagry/Ajara',
      address: '78 Badagry Expressway',
      plan: 'Platinum',
      amount: 25000.000,
      status: 'Inactive'
    },
    {
      id: 14,
      name: 'Patricia Thomas',
      email: 'patricia.t@email.com',
      phone: '08012345691',
      location: 'Lagos/Oshodi/Mafoluku',
      address: '23 Oshodi-Apapa Expressway',
      plan: 'Gold',
      amount: 15000.000,
      status: 'Active'
    },
    {
      id: 15,
      name: 'Matthew White',
      email: 'matthew.w@email.com',
      phone: '08012345692',
      location: 'Lagos/Mushin/Papa Ajao',
      address: '56 Agege Motor Road, Mushin',
      plan: 'Premium+',
      amount: 35000.000,
      status: 'Active'
    },
    {
      id: 16,
      name: 'Linda Harris',
      email: 'linda.h@email.com',
      phone: '08012345693',
      location: 'Lagos/Epe/Eredo',
      address: '89 Epe-Ijebu Ode Road',
      plan: 'Silver',
      amount: 10000.000,
      status: 'Active'
    },
    {
      id: 17,
      name: 'Anthony Clark',
      email: 'anthony.c@email.com',
      phone: '08012345694',
      location: 'Lagos/Ikorodu/Igbogbo',
      address: '34 Ikorodu Road, Igbogbo',
      plan: 'Platinum',
      amount: 25000.000,
      status: 'Inactive'
    },
    {
      id: 18,
      name: 'Barbara Lewis',
      email: 'barbara.l@email.com',
      phone: '08012345695',
      location: 'Lagos/Alimosho/Egbeda',
      address: '67 Idimu Road, Egbeda',
      plan: 'Premium',
      amount: 30000.000,
      status: 'Active'
    },
    {
      id: 19,
      name: 'Steven Walker',
      email: 'steven.w@email.com',
      phone: '08012345696',
      location: 'Lagos/Ifako-Ijaiye/Ojokoro',
      address: '12 College Road, Ifako',
      plan: 'Gold',
      amount: 15000.000,
      status: 'Active'
    },
    {
      id: 20,
      name: 'Elizabeth Hall',
      email: 'elizabeth.h@email.com',
      phone: '08012345697',
      location: 'Lagos/Kosofe/Ketu',
      address: '45 Demurin Street, Ketu',
      plan: 'Premium+',
      amount: 35000.000,
      status: 'Inactive'
    },
    {
      id: 21,
      name: 'Kevin Allen',
      email: 'kevin.a@email.com',
      phone: '08012345698',
      location: 'Lagos/Somolu/Bariga',
      address: '78 Ikorodu Road, Bariga',
      plan: 'Silver',
      amount: 10000.000,
      status: 'Active'
    },
    {
      id: 22,
      name: 'Nancy Young',
      email: 'nancy.y@email.com',
      phone: '08012345699',
      location: 'Lagos/Ajeromi-Ifelodun/Olodi',
      address: '23 Boundary Road, Ajegunle',
      plan: 'Platinum',
      amount: 25000.000,
      status: 'Active'
    },
    {
      id: 23,
      name: 'Brian King',
      email: 'brian.k@email.com',
      phone: '08012345700',
      location: 'Lagos/Ojo/Okokomaiko',
      address: '56 Badagry Road, Ojo',
      plan: 'Gold',
      amount: 15000.000,
      status: 'Active'
    },
    {
      id: 24,
      name: 'Betty Wright',
      email: 'betty.w@email.com',
      phone: '08012345701',
      location: 'Lagos/Shomolu/Pedro',
      address: '89 Ikorodu Road, Shomolu',
      plan: 'Premium',
      amount: 30000.000,
      status: 'Inactive'
    },
    {
      id: 25,
      name: 'George Lopez',
      email: 'george.l@email.com',
      phone: '08012345702',
      location: 'Lagos/Eti-Osa/Ajah',
      address: '34 Abraham Adesanya Road, Ajah',
      plan: 'Premium+',
      amount: 40000.000,
      status: 'Active'
    }
  ]);

  const handleAddCustomer = (customerData) => {
    setCustomers(prev => [...prev, customerData]);
  };

  const handleEditCustomer = (customerData) => {
    setCustomers(prev => 
      prev.map(customer => 
        customer.id === customerData.id ? customerData : customer
      )
    );
  };

  const handleDeleteCustomer = (customerId) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      setCustomers(prev => prev.filter(customer => customer.id !== customerId));
    }
  };

  return (
    <div className="customers-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '600', color: '#ffffff', fontFamily: 'Poppins, sans-serif', margin: '0' }}>
          Customers
        </h1>
        <Button 
          variant="primary" 
          icon={Plus}
          onClick={() => alert('Add Customer Modal - Coming Soon!')}
        >
          Add Customer
        </Button>
      </div>
      
      <CustomerTable
        customers={customers}
        onAdd={handleAddCustomer}
        onEdit={handleEditCustomer}
        onDelete={handleDeleteCustomer}
      />
    </div>
  );
};

export default CustomersPage;