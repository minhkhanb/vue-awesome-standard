import api from '../common/helpers/api';
import { API_URL } from '../common/configs/api';

export const login = (email, password) => api.post(API_URL.LOGIN, null, { email, password });
