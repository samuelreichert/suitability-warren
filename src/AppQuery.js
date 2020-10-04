import axios from 'axios';

export const suitabilityConversation = (data = { context: 'suitability' }) => {
  const url = process.env.REACT_APP_API_URL;

  return axios.post(`${url}/conversation/message`, data)
};
