import { api, fetchWithToken } from './api';

export const getAllWebinarByPayment = async () => {
  const response = await fetchWithToken(`${api}/webinars/success`);
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};

export const getAllWebinar = async () => {
  const response = await fetchWithToken(`${api}/webinars`);
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};

export const createWebinar = async ({ title, description, date, time, linkMeet }) => {
  const response = await fetchWithToken(`${api}/webinars`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description, date, time, linkMeet }),
  });
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};

export const deleteWebinarById = async (webinarId) => {
  const response = await fetchWithToken(`${api}/webinars/${webinarId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};
