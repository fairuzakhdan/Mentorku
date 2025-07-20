import { api, fetchWithToken } from './api';

export const getAllMentee = async () => {
  const response = await fetchWithToken(`${api}/mentees`);
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};
export const updateMenteeForPaid = async ({ _id, status, schedules, linkMeet }) => {
  const response = await fetchWithToken(`${api}/mentees`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ _id, status, schedules, linkMeet }),
  });
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, message: responseJson.message };
  }
  return { error: false, message: responseJson.message };
};

export const deleteMenteeForPaid = async (paymentId) => {
  console.log(paymentId);
  const response = await fetchWithToken(`${api}/mentees/${paymentId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, message: responseJson.message };
  }
  return { error: false, message: responseJson.message };
};
