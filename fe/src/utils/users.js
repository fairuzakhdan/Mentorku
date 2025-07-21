import { api, fetchWithToken } from './api';

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
