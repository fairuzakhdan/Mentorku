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

export const getSessionById = async (sessionId) => {
  const response = await fetchWithToken(`${api}/sessions/${sessionId}`);
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null, message: responseJson.message };
  }
  return { error: false, data: responseJson.data };
};

export const createSession = async ({ day, session }) => {
  const response = await fetchWithToken(`${api}/sessions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ day, session }),
  });
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};

export const updateSessionById = async ({ sessionId, body }) => {
  const response = await fetchWithToken(`${api}/sessions/${sessionId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null, message: responseJson.message };
  }
  return { error: false, message: responseJson.message };
};

export const deleteSessionById = async (sessionId) => {
  const response = await fetchWithToken(`${api}/sessions/${sessionId}`, {
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
