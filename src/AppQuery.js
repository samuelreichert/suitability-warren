import axios from 'axios';

export const suitabilityConversation = (data = { context: 'suitability' }) => {
  const url = process.env.REACT_APP_API_URL;
  return axios.post(`${url}/conversation/message`, data)
};

export const finishSuitability = (data) => {
  const url = process.env.REACT_APP_API_URL;
  return axios.post(`${url}/suitability/finish`, data)
};
