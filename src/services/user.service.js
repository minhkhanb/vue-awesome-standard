import api from '../common/helpers/api';
import { API_URL } from '../common/configs/api';

export const getProfile = () => api.get(API_URL.PROFILE);
