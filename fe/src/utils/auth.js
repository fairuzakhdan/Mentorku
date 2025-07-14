import { api, putAccessToken, getAccessToken, fetchWithToken } from './api';

export const login = async ({ email, password }) => {
  const response = await fetch(`${api}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    throw new Error(responseJson.message || 'Login failed');
  }
  return { error: false, data: responseJson.token };
};

export const getUserLogin = async () => {
  const response = await fetchWithToken(`${api}/users/me`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
};
