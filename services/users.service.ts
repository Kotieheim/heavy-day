import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";
import { fetchWrapper } from "../helpers/fetchWrapper";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
console.log("baseUrl is called ====>", baseUrl);

const userSubject = new BehaviorSubject(
  window && JSON.parse(localStorage.getItem("user") ?? "")
);

async function login(username: string, password: string) {
  const user = await fetchWrapper.post(`${baseUrl}/authenticate`, {
    username,
    password,
  });
  // publish user to subscribers and store in local storage to stay logged in between page refreshes
  userSubject.next(user);
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}

const logout = () => {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem("user");
  userSubject.next(null);
  Router.push("/account/login");
};

const register = (user: any) => {
  return fetchWrapper.post(`${baseUrl}/register`, user);
};

const getAll = () => {
  return fetchWrapper.get(baseUrl);
};

const getById = (id: any) => {
  return fetchWrapper.get(`${baseUrl}/${id}`);
};

const update = async (id: any, params: any) => {
  const x = await fetchWrapper.put(`${baseUrl}/${id}`, params);
  // update stored user if the logged in user updated their own record
  if (id === userSubject.value.id) {
    // update local storage
    const user = { ...userSubject.value, ...params };
    localStorage.setItem("user", JSON.stringify(user));

    // publish updated user to subscribers
    userSubject.next(user);
  }
  return x;
};

// prefixed with underscored because delete is a reserved word in javascript
const _delete = (id: any) => {
  return fetchWrapper.delete(`${baseUrl}/${id}`);
};

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
};
