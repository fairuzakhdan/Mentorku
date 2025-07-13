export const api = 'http://localhost:3000/api';

export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};
export const putAccessToken = (token) => {
  return localStorage.setItem('accessToken', token);
};

export const fetchWithToken = (url, options = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
};
