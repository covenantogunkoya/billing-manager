import React from 'react';
import { Edit, Trash2, Printer } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
import '../../styles/components/CustomerRow.css';

const CustomerRow = ({ customer, index, onEdit, onDelete }) => {
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
    <tr className="customer-row">
      <td>{index}</td>
      <td className="customer-name">{customer.name}</td>
      <td className="customer-location">{customer.location}</td>
      <td>
        <span className={`plan-badge ${getPlanBadgeClass(customer.plan)}`}>
          {customer.plan}
        </span>
      </td>
      <td className="customer-amount">{formatCurrency(customer.amount)}</td>
      <td>
        <span className="status-badge">{customer.status}</span>
      </td>
      <td>
        <div className="action-buttons">
          <button 
            className="action-btn action-edit"
            onClick={onEdit}
            title="Edit"
          >
            <Edit size={16} />
          </button>
          <button 
            className="action-btn action-delete"
            onClick={onDelete}
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
  );
};

export default CustomerRow;