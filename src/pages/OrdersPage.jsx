import React, { useState } from "react";
import { Plus } from 'lucide-react';
import OrdersTable from "../components/orders/OrdersTable";
import Button from '../components/common/Button';
import "../styles/pages/OrdersPage.css";

const OrdersPage = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      date: "2020-04-09",
      jobNo: "12345",
      name: "Sample Name",
      plan: "Gold",
      requestType: "Others",
      section: "Core Network",
      status: "Approved",
    },
    {
      id: 2,
      date: "2020-04-09",
      jobNo: "12345",
      name: "Sample Name",
      plan: "Gold",
      requestType: "Others",
      section: "Customer Care",
      status: "Approved",
    },
    {
      id: 3,
      date: "2020-04-09",
      jobNo: "12345",
      name: "Sample Name",
      plan: "Gold",
      requestType: "Others",
      section: "Technical",
      status: "Approved",
    },
    {
      id: 4,
      date: "2020-04-09",
      jobNo: "12345",
      name: "Sample Name",
      plan: "Gold",
      requestType: "Others",
      section: "Core Network",
      status: "Approved",
    },
    {
      id: 5,
      date: "2020-04-09",
      jobNo: "12345",
      name: "Sample Name",
      plan: "Gold",
      requestType: "Others",
      section: "Core Network",
      status: "Approved",
    },
    {
      id: 6,
      date: "2020-04-10",
      jobNo: "12346",
      name: "John Doe",
      plan: "Platinum",
      requestType: "Installation",
      section: "Technical",
      status: "Approved",
    },
    {
      id: 7,
      date: "2020-04-10",
      jobNo: "12347",
      name: "Jane Smith",
      plan: "Premium",
      requestType: "Upgrade",
      section: "Customer Care",
      status: "Approved",
    },
    {
      id: 8,
      date: "2020-04-11",
      jobNo: "12348",
      name: "Michael Johnson",
      plan: "Silver",
      requestType: "Renewal",
      section: "Core Network",
      status: "Approved",
    },
    {
      id: 9,
      date: "2020-04-11",
      jobNo: "12349",
      name: "Sarah Williams",
      plan: "Premium+",
      requestType: "Others",
      section: "Technical",
      status: "Approved",
    },
    {
      id: 10,
      date: "2020-04-12",
      jobNo: "12350",
      name: "David Brown",
      plan: "Gold",
      requestType: "Installation",
      section: "Customer Care",
      status: "Approved",
    },
    {
      id: 11,
      date: "2020-04-12",
      jobNo: "12351",
      name: "Emily Davis",
      plan: "Platinum",
      requestType: "Upgrade",
      section: "Core Network",
      status: "Approved",
    },
    {
      id: 12,
      date: "2020-04-13",
      jobNo: "12352",
      name: "James Wilson",
      plan: "Premium",
      requestType: "Renewal",
      section: "Technical",
      status: "Approved",
    },
    {
      id: 13,
      date: "2020-04-13",
      jobNo: "12353",
      name: "Lisa Anderson",
      plan: "Gold",
      requestType: "Others",
      section: "Customer Care",
      status: "Approved",
    },
    {
      id: 14,
      date: "2020-04-14",
      jobNo: "12354",
      name: "Robert Taylor",
      plan: "Silver",
      requestType: "Installation",
      section: "Core Network",
      status: "Approved",
    },
    {
      id: 15,
      date: "2020-04-14",
      jobNo: "12355",
      name: "Maria Garcia",
      plan: "Premium+",
      requestType: "Upgrade",
      section: "Technical",
      status: "Approved",
    },
    {
      id: 16,
      date: "2020-04-15",
      jobNo: "12356",
      name: "Christopher Martinez",
      plan: "Platinum",
      requestType: "Renewal",
      section: "Customer Care",
      status: "Approved",
    },
    {
      id: 17,
      date: "2020-04-15",
      jobNo: "12357",
      name: "Jennifer Rodriguez",
      plan: "Gold",
      requestType: "Others",
      section: "Core Network",
      status: "Approved",
    },
    {
      id: 18,
      date: "2020-04-16",
      jobNo: "12358",
      name: "Daniel Lee",
      plan: "Premium",
      requestType: "Installation",
      section: "Technical",
      status: "Approved",
    },
    {
      id: 19,
      date: "2020-04-16",
      jobNo: "12359",
      name: "Patricia Thomas",
      plan: "Silver",
      requestType: "Upgrade",
      section: "Customer Care",
      status: "Approved",
    },
    {
      id: 20,
      date: "2020-04-17",
      jobNo: "12360",
      name: "Matthew White",
      plan: "Gold",
      requestType: "Renewal",
      section: "Core Network",
      status: "Approved",
    },
    {
      id: 21,
      date: "2020-04-17",
      jobNo: "12361",
      name: "Linda Harris",
      plan: "Premium+",
      requestType: "Others",
      section: "Technical",
      status: "Approved",
    },
    {
      id: 22,
      date: "2020-04-18",
      jobNo: "12362",
      name: "Anthony Clark",
      plan: "Platinum",
      requestType: "Installation",
      section: "Customer Care",
      status: "Approved",
    },
    {
      id: 23,
      date: "2020-04-18",
      jobNo: "12363",
      name: "Barbara Lewis",
      plan: "Gold",
      requestType: "Upgrade",
      section: "Core Network",
      status: "Approved",
    },
    {
      id: 24,
      date: "2020-04-19",
      jobNo: "12364",
      name: "Steven Walker",
      plan: "Premium",
      requestType: "Renewal",
      section: "Technical",
      status: "Approved",
    },
    {
      id: 25,
      date: "2020-04-19",
      jobNo: "12365",
      name: "Elizabeth Hall",
      plan: "Silver",
      requestType: "Others",
      section: "Customer Care",
      status: "Approved",
    },
  ]);

  const handleAddOrder = () => {
    alert("Add Order Modal - Coming Soon!");
  };

  const handleEditOrder = (order) => {
    alert(`Edit Order: ${order.jobNo}`);
  };

  const handleDeleteOrder = (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      setOrders((prev) => prev.filter((order) => order.id !== orderId));
    }
  };

  return (
    <div className="orders-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '600', color: '#ffffff', fontFamily: 'Poppins, sans-serif', margin: '0' }}>
          Orders
        </h1>
        <Button 
          variant="primary" 
          icon={Plus}
          onClick={handleAddOrder}
        >
          Add Job Order
        </Button>
      </div>
      
      <OrdersTable
        orders={orders}
        onAdd={handleAddOrder}
        onEdit={handleEditOrder}
        onDelete={handleDeleteOrder}
      />
    </div>
  );
};

export default OrdersPage;