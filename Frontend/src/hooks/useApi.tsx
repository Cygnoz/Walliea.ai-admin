import { useState } from "react";
import axiosInstances from "../services/axiosInstance";

// Define the request types
type RequestType = 
  | "get" 
  | "post" 
  | "patch" 
  | "put" 
  | "delete" 
  | "mPost" 
  | "mPut";

// Define the headers type
type HeadersType = Record<string, string> | undefined;

// Define the response type
interface ApiResponse<T> {
  response: T | null;
  error: Error | null;
}

// useApi hook
const useApi = <T = any>(type: RequestType) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const authToken = sessionStorage.getItem("token");

  const request = async (
    url: string,
    payload?: any,
    header?: HeadersType
  ): Promise<ApiResponse<T>> => {
    setLoading(true);
    let response: any;
    const api = authToken ? axiosInstances.authInstance() : axiosInstances.baseInstance();
    const mApi = axiosInstances.MauthInstance();

    try {
      switch (type) {
        case "post":
          response = await api.post(url, payload, header);
          break;
        case "patch":
          response = await api.patch(url, payload, header);
          break;
        case "put":
          response = await api.put(url, payload, header);
          break;
        case "delete":
          response = await api.delete(url);
          break;
        case "mPost":
          response = await mApi.post(url, payload, header);
          break;
        case "mPut":
          response = await mApi.put(url, payload, header);
          break;
        default: // "get" or other cases
          response = await api.get(url);
      }

      setError(false);
      setData(response.data); // Ensure the API returns data under response.data
      return { response: response, error: null };
    } catch (err: any) {
      setError(true);
      setData(null);
      return { response: null, error: err };
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, request };
};


export default useApi;
