import { api, fetchWithToken } from './api';

export const getAllSessionByMentorId = async (mentorId) => {
  const response = await fetch(`${api}/sessions/mentors/${mentorId}`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};

export const getAllSession = async () => {
  const response = await fetchWithToken(`${api}/sessions`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};

export const createSession = async ({ day, session, meeting }) => {
  const response = await fetchWithToken(`${api}/sessions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ day, session, meeting }),
  });
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};
