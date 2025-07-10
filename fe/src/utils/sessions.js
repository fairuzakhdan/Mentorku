import { api } from './api';

export const getAllSessionByMentorId = async (mentorId) => {
  const response = await fetch(`${api}/sessions/mentors/${mentorId}`);
  const responseJson = await response.json();
  //   console.log();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};
