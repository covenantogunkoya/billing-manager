import React, { useState } from 'react';
import { Edit, Trash2, Printer } from 'lucide-react';
import SearchBar from '../common/SearchBar';
import Pagination from '../common/Pagination';
import Button from '../common/Button';
import { Plus } from 'lucide-react';
import '../../styles/components/OrdersTable.css';

const OrdersTable = ({ orders = [], onAdd, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const filteredOrders = orders.filter(order => 
    order.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.jobNo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.plan?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = filteredOrders.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentOrders = filteredOrders.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getPlanBadgeClass = (plan) => {
    const planMap = {
      'Gold': 'plan-gold',
      'Platinum': 'plan-platinum',
      'Premium': 'plan-premium',
      'Silver': 'plan-silver',
      'Premium+': 'plan-premium-plus'
    };
    return planMap[plan] || 'plan-default';
  };

  return (
    <div className="orders-table-container">
      <div className="orders-table-inner">
        <div className="table-header">
          <div className="table-controls">
            <div className="entries-control">
              <label>Show</label>
              <select 
                value={itemsPerPage} 
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="entries-select"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <label>entries</label>
            </div>
          </div>

          <div className="table-actions">
            <SearchBar 
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="table-wrapper">
          <table className="custom-table">
            <thead>
              <tr>
                <th>DATE</th>
                <th>JO NO.</th>
                <th>NAME</th>
                <th>PLAN</th>
                <th>REQUEST TYPE</th>
                <th>SECTION</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.length > 0 ? (
                currentOrders.map((order) => (
                  <tr key={order.id} className="order-row">
                    <td>{formatDate(order.date)}</td>
                    <td className="order-jobno">{order.jobNo}</td>
                    <td className="order-name">{order.name}</td>
                    <td>
                      <span className={`plan-badge ${getPlanBadgeClass(order.plan)}`}>
                        {order.plan}
                      </span>
                    </td>
                    <td className="order-request">{order.requestType}</td>
                    <td className="order-section">{order.section}</td>
                    <td>
                      <span className="status-badge status-approved">{order.status}</span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          className="action-btn action-edit"
                          onClick={() => onEdit(order)}
                          title="Edit"
                        >
                          <Edit size={16} />
                        </button>
                        <button 
                          className="action-btn action-delete"
                          onClick={() => onDelete(order.id)}
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                        <button 
                          className="action-btn action-print"
                          title="Print"
                        >
                          <Printer size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="no-data">No orders available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          startItem={startIndex + 1}
          endItem={endIndex}
        />
      </div>
    </div>
  );
};

export default OrdersTable;