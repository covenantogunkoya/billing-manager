export const PLANS = {
  GOLD: 'Gold',
  PLATINUM: 'Platinum',
  PREMIUM: 'Premium',
  SILVER: 'Silver',
  PREMIUM_PLUS: 'Premium+'
};

export const STATUS = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
  PENDING: 'Pending',
  SUSPENDED: 'Suspended'
};

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 5,
  PAGE_SIZE_OPTIONS: [5, 10, 25, 50, 100]
};

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/',
  CUSTOMERS: '/customers',
  REQUESTS: '/requests',
  ORDERS: '/orders',
  COMPLAINTS: '/complaints',
  ANNOUNCEMENTS: '/announcements',
  BILL_GENERATOR: '/bill-generator',
  EMAIL_BILLS: '/email-bills'
};