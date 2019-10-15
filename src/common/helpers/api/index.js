import axios from './axios';
import { compileUrl } from '../urlParser';
import { ObjectToFormData } from '../formDataCompiler';
import { handleApiError } from './errorHandler';

const REQUEST_TYPE = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DEL: 'DEL',
};

/**
 * Requests to API
 * @param {String} type
 * @param {String} endpoint
 * @param {Object} queryParam
 * @param {Object} data
 * @param {import('axios').AxiosRequestConfig} options
 * If you wish to send FormData instead of JSON, set options.useFormData to true.
 */
const request = (type, endpoint, queryParam = {}, data = {}, options = { useFormData: false }) => {
  let req;
  const url = compileUrl(endpoint, queryParam);
  let formData = { ...data };
  const reqOptions = { ...options };
  if (options.useFormData) {
    formData = ObjectToFormData({ ...data });
    reqOptions.headers = { 'Content-Type': 'multipart/form-data' };
  }
  switch (type) {
    case REQUEST_TYPE.POST:
      req = axios.post(url, formData, reqOptions);
      break;

    case REQUEST_TYPE.PUT:
      req = axios.put(url, formData, reqOptions);
      break;

    case REQUEST_TYPE.DEL:
      req = axios.delete(url, reqOptions);
      break;

    default:
      req = axios.get(url, reqOptions);
      break;
  }
  return req.catch(reason => handleApiError(url, reason));
};

/**
 * Send GET Request to API
 * @param {String} url
 * @param {Object} queryParam
 * @param {AxiosRequestConfig} options
 */
const get = (url, queryParam = {}, options = {}) => (
  request(REQUEST_TYPE.GET, url, queryParam, null, options)
);

/**
 * Send POST Request to API
 * @param {String} url
 * @param {Object} queryParam
 * @param {Object} data
 * @param {AxiosRequestConfig} options
 * If you wish to send FormData instead of JSON, set options.useFormData to true.
 */
const post = (url, queryParam = {}, data = {}, options = {}) => (
  request(REQUEST_TYPE.POST, url, queryParam, data, options)
);

/**
 * Send PUT Request to API
 * @param {String} url
 * @param {Object} queryParam
 * @param {Object} data
 * @param {AxiosRequestConfig} options
 * If you wish to send FormData instead of JSON, set options.useFormData to true.
 */
const put = (url, queryParam = {}, data = {}, options = {}) => (
  request(REQUEST_TYPE.PUT, url, queryParam, data, options)
);

/**
 * Send DELETE Request to API
 * @param {String} url
 * @param {Object} queryParam
 * @param {AxiosRequestConfig} options
 */
const remove = (url, queryParam = {}, options = {}) => (
  request(REQUEST_TYPE.DEL, url, queryParam, null, options)
);

export default {
  get,
  post,
  put,
  delete: remove,
};
