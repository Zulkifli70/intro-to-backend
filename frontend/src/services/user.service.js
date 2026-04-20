import { apiConfig } from "../config/api.config.js";
import { apiRequest } from "./http.service.js";

const STORAGE_KEY = "intro-to-backend:user";

const readStoredUser = () => {
  const rawUser = window.localStorage.getItem(STORAGE_KEY);

  if (!rawUser) {
    return null;
  }

  try {
    return JSON.parse(rawUser);
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return null;
  }
};

const persistUser = (user) => {
  if (!user) {
    window.localStorage.removeItem(STORAGE_KEY);
    return null;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  return user;
};

export const getCurrentUser = async () => readStoredUser();

export const registerUser = async (payload) => {
  const response = await apiRequest(apiConfig.endpoints.users.register, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  return {
    ...response,
    user: persistUser(response.user),
  };
};

export const loginUser = async (payload) => {
  const response = await apiRequest(apiConfig.endpoints.users.login, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  return {
    ...response,
    user: persistUser(response.user),
  };
};

export const logoutUser = async (payload) => {
  const response = await apiRequest(apiConfig.endpoints.users.logout, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  persistUser(null);

  return response;
};
