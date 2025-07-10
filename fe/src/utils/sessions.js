import { api } from './api';

const getAllSessionByMentorId = async (mentorId) => {
  const response = await fetch(`${api}/sessions/mentors${mentorId}`);
  const responseJson = await response.json();
  if (responseJson !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};
