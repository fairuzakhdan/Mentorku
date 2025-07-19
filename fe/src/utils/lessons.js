import { api, fetchWithToken } from './api';

export const getClassForPaymentSuccess = async () => {
  const response = await fetchWithToken(`${api}/lessons/class`);
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};

export const getLessonForPaymentSuccessByMentorId = async (mentorId) => {
  const response = await fetchWithToken(`${api}/lessons/koridor/${mentorId}`);
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};

export const createLesson = async ({ topic, videos, articles }) => {
  const response = await fetchWithToken(`${api}/lessons`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ topic, videos, articles }),
  });
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};

export const getAllLesson = async () => {
  const response = await fetchWithToken(`${api}/lessons`);
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};

export const getLessonById = async (lessonId) => {
  const response = await fetchWithToken(`${api}/lessons/${lessonId}`);
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};

export const deleteLessonById = async (lessonId) => {
  const response = await fetchWithToken(`${api}/lessons/${lessonId}`, {
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

export const updateLessonById = async (lessonId, body) => {
  const response = await fetchWithToken(`${api}/lessons/${lessonId}`, {
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
