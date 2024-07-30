import axios from 'axios';

export const httpClientPlugin = {
  get: async (url: string) => {
    const { data } = await axios.get(url);
    return data;
  },
  post: async (url: string, body: {}) => {
    throw new Error('No implemented');
  },
  put: async (url: string, body: {}) => {
    throw new Error('No implemented');
  },
  delete: async (url: string, body: {}) => {
    throw new Error('No implemented');
  },
};
