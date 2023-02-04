import axios from "axios";
import { configuration } from "./configurationProvider";
import { auth } from "./service/auth.service";

export const HTTP = axios.create({ baseURL: configuration.apiBaseUrl });
HTTP.interceptors.request.use(
  async (config) => {
    let token = null;
    if (configuration?.enableIdentityServer) {
      token = await auth.getAccessToken();
    } else {
      token = localStorage.getItem("clubeez_session");
    }

    config.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-XSRF-TOKEN",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

HTTP.interceptors.response.use(
  async (res) => {
    // console.log(res);
    if (res.status == 401) {
      await auth.login();
      return;
    }
    if (res.status == 403) {
      window.location.href = "/";
    }
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export function GET(url, queryPayload = {}) {
  return HTTP.get(`${configuration.apiBaseUrl}/${url}`, queryPayload);
}

export function POST(url, body) {
  return HTTP.post(`${configuration.apiBaseUrl}/${url}`, body);
}

export function PUT(url, body) {
  return HTTP.put(`${configuration.apiBaseUrl}/${url}`, body);
}

export function DELETE(url, queryPayload = {}) {
  return HTTP.delete(`${configuration.apiBaseUrl}/${url}`, queryPayload);
}
