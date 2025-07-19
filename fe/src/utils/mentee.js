import { api, fetchWithToken } from './api';

export const getAllMentee = async () => {
  const response = await fetchWithToken(`${api}/mentees`);
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};
