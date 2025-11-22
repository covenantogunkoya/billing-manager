import React, { useState } from 'react';
import { Edit, Trash2, Eye } from 'lucide-react';
import SearchBar from '../common/SearchBar';
import Pagination from '../common/Pagination';
import Button from '../common/Button';
import { Plus } from 'lucide-react';
import '../../styles/components/RequestsTable.css';

const RequestsTable = ({ requests = [], onAdd, onEdit, onDelete, onView }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const filteredRequests = requests.filter(request => 
    request.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.customerId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.requestType?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = filteredRequests.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentRequests = filteredRequests.slice(startIndex, endIndex);

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

  return (
    <div className="requests-table-container">
      <div className="requests-table-inner">
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
                <th>NAME</th>
                <th>CUSTOMER ID</th>
                <th>STATUS</th>
                <th>REQUEST TYPE</th>
                <th>SECTION</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {currentRequests.length > 0 ? (
                currentRequests.map((request) => (
                  <tr key={request.id} className="request-row">
                    <td>{formatDate(request.date)}</td>
                    <td className="request-name">{request.name}</td>
                    <td className="request-id">{request.customerId}</td>
                    <td>
                      <span className="status-badge status-pending">{request.status}</span>
                    </td>
                    <td className="request-type">{request.requestType}</td>
                    <td className="request-section">{request.section}</td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          className="action-btn action-edit"
                          onClick={() => onEdit(request)}
                          title="Edit"
                        >
                          <Edit size={16} />
                        </button>
                        <button 
                          className="action-btn action-delete"
                          onClick={() => onDelete(request.id)}
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                        <button 
                          className="action-btn action-view"
                          onClick={() => onView(request)}
                          title="View"
                        >
                          <Eye size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="no-data">No requests available</td>
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

export default RequestsTable;