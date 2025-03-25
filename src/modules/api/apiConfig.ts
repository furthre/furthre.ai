// src/api/apiConfig.ts

import { AxiosClient, AxiosClientConfigurator } from "@xatom/axios";

// Keys for storing the auth token in localStorage
const TOKEN_KEY = "auth_token";

// Helper function to get token from localStorage
const getTokenFromLocalStorage = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// Configure AxiosClient with the base API URL
const axiosConfigurator = new AxiosClientConfigurator(
  "https://x2bq-i3lr-rb4m.n7d.xano.io/api:lV3_La8Q"
);

// Add a request interceptor to include the auth token in each request
axiosConfigurator.beforeRequest((config, nextFn) => {
  const token = getTokenFromLocalStorage();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Proceed with the request
  nextFn(config);
});

// Initialize AxiosClient with the configured AxiosClientConfigurator
export const apiClient = new AxiosClient(axiosConfigurator);
