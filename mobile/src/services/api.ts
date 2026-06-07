import { create } from 'axios';
import Constants from 'expo-constants';

const api = create({
  baseURL: Constants.manifest?.extra?.API_URL,
});

export default api;
