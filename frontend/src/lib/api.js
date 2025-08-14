import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_URL || '';

export const apiClient = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
});

export const getSocketUrl = () => {
  if (import.meta.env.VITE_SOCKET_URL) return import.meta.env.VITE_SOCKET_URL;
  if (apiBaseUrl) return apiBaseUrl;
  if (typeof window !== 'undefined' && window.location?.origin) return window.location.origin;
  return 'https://talkpix2.onrender.com';
};

