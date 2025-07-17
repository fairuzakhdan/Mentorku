import { api, fetchWithToken } from './api';

export const getAllWebinarByPayment = async () => {
  const response = await fetchWithToken(`${api}/webinars/success`);
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};
