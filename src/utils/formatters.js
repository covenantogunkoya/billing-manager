export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'decimal',
    minimumFractionDigits: 3,
    maximumFractionDigits: 3
  }).format(amount || 0);
};

export const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-GB');
};

export const formatDateTime = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleString('en-GB');
};

export const truncateText = (text, maxLength = 30) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};