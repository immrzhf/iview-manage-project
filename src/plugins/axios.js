"use strict";

import Vue from 'vue';
import axios from "axios";
import qs from "qs";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
    baseURL: "http://127.0.0.1:8081/",
    timeout: 60 * 1000,
    withCredentials: false,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    }
};
const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;

export const request = {
  async get(url, data) {
    try {
      let res = await _axios.get(url, { params: data });
      res = res.data;
      return new Promise(resolve => {
        resolve(res);
      });
    } catch (err) {
      console.log(err);
    }
  },
  async post(url, data) {
    try {
      let res = await _axios.post(url, data);
      res = res.data;
      return new Promise(resolve => {
        resolve(res);
      });
    } catch (err) {
      console.log(err);
    }
  }
};