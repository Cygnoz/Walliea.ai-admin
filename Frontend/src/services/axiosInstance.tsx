import axios, { AxiosInstance } from "axios";

// Define a utility function to create headers
const createHeaders = (
  contentType: string,
  withAuth: boolean = false
): Record<string, string> => {
  const headers: Record<string, string> = {
    "Content-Type": contentType,
    Accept: "application/json",
  };

  if (withAuth) {
    const authToken = sessionStorage.getItem("token");
    if (authToken) {
      headers.Authorization = `Bearer ${authToken}`;
    }
  }

  return headers;
};
//const baseURL="http://localhost:4000"
const baseURL: string ='http://13.232.79.148:4000'
// Create base instance
const baseInstance = (): AxiosInstance => {
  const API_URL = baseURL;
  const headers = createHeaders("application/json");

  return axios.create({
    baseURL: API_URL,
    timeout: 5000,
    headers,
  });
};

// Create authenticated instance
const authInstance = (): AxiosInstance => {
  const API_URL = baseURL;
  const headers = createHeaders("application/json", true);

  return axios.create({
    baseURL: API_URL,
    timeout: 25000,
    headers,
  });
};

// Create multipart authenticated instance
const MauthInstance = (): AxiosInstance => {
  const API_URL = baseURL;
  const headers = createHeaders("multipart/form-data", true);

  return axios.create({
    baseURL: API_URL,
    timeout: 25000,
    headers,
  });
};

// Export instances
const axiosInstances = { baseInstance, authInstance, MauthInstance };
export default axiosInstances;
