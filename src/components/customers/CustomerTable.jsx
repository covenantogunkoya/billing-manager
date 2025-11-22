import React, { useState } from "react";
import Table from "../common/Table";
import CustomerRow from "./CustomerRow";
import SearchBar from "../common/SearchBar";
import Pagination from "../common/Pagination";
import Button from "../common/Button";
import AddCustomerModal from "./AddCustomerModal";
import EditCustomerModal from "./EditCustomerModal";
import { Plus } from "lucide-react";
import "../../styles/components/CustomerTable.css";

const CustomerTable = ({ customers = [], onAdd, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.plan?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = filteredCustomers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentCustomers = filteredCustomers.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setIsEditModalOpen(true);
  };

  const handleAddCustomer = (customerData) => {
    onAdd(customerData);
    setIsAddModalOpen(false);
  };

  const handleEditCustomer = (customerData) => {
    onEdit(customerData);
    setIsEditModalOpen(false);
    setSelectedCustomer(null);
  };

  const columns = [
    { label: "ID", width: "5%" },
    { label: "NAME", width: "20%" },
    { label: "CITY/AREA/LOCATION", width: "25%" },
    { label: "PLAN", width: "15%" },
    { label: "AMOUNT", width: "12%" },
    { label: "STATUS", width: "13%" },
    { label: "ACTIONS", width: "10%" },
  ];

  return (
    <div className="customer-table-container">
      <div className="customer-table-inner">
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

        <Table
          columns={columns}
          data={currentCustomers}
          renderRow={(customer, index) => (
            <CustomerRow
              key={customer.id}
              customer={customer}
              index={startIndex + index + 1}
              onEdit={() => handleEdit(customer)}
              onDelete={() => onDelete(customer.id)}
            />
          )}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          startItem={startIndex + 1}
          endItem={endIndex}
        />

        {/* <AddCustomerModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={handleAddCustomer}
        /> */}

        <EditCustomerModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedCustomer(null);
          }}
          customer={selectedCustomer}
          onSubmit={handleEditCustomer}
        />
      </div>
    </div>
  );
};

export default CustomerTable;
