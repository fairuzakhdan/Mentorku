import { api, fetchWithToken } from './api';

export const getClassForPaymentSuccess = async () => {
  const response = await fetchWithToken(`${api}/lessons/class`);
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};
