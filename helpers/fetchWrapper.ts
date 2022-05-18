import getConfig from "next/config";

import { userService } from "../services/users.service";

const { publicRuntimeConfig } = getConfig();

const get = async (url: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: authHeader(url),
  });
  return handleResponse(response);
};

const post = async (url: string, body: any) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader(url) },
    credentials: "include",
    body: JSON.stringify(body),
  });
  return handleResponse(response);
};

const put = async (url: string, body: any) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeader(url) },
    body: JSON.stringify(body),
  });
  return handleResponse(response);
};

// prefixed with underscored because delete is a reserved word in javascript
const _delete = async (url: string) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: authHeader(url),
  });
  return handleResponse(response);
};

// helper functions

const authHeader = (url: any): HeadersInit => {
  // return auth header with jwt if user is logged in and request is to the api url
  const user = userService.userValue;
  const isLoggedIn = user && user.token;
  const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
};

const handleResponse = (response: any) => {
  return response.text().then((text: string) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].includes(response.status) && userService.userValue) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        userService.logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
};
