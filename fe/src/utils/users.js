import { api, fetchWithToken } from './api';

export const getAllUser = async () => {
  const response = await fetchWithToken(`${api}/users`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};

export const createUser = async ({ email, password, fullName, telephone, institution }) => {
  const response = await fetchWithToken(`${api}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, fullName, telephone, institution }),
  });
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};

export const getUserById = async (userId) => {
  const response = await fetchWithToken(`${api}/users/${userId}`);
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};

export const updateUserById = async ({ userId, body }) => {
  const response = await fetchWithToken(`${api}/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const responseJson = await response.json();
  //   console.log(res
  if (responseJson.status !== 'success') {
    return { error: true, data: null, message: responseJson.message };
  }
  return { error: false, message: responseJson.message };
};

export const deleteUserById = async (userId) => {
  const response = await fetchWithToken(`${api}/users/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null, message: responseJson.message };
  }
  return { error: false, message: responseJson.message };
};
