import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import CONSTANTS from "../constants";

const mainApiService = async ({
  baseUrl,
  url,
  method,
  data,
  params,
  headers,
  withoutBaseURL = false,
  signal,
  version,
}: {
  baseUrl?: string | undefined;
  url: string;
  method: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
  withoutBaseURL?: boolean;
  signal?: any;
  version?: any;
}): Promise<{
  data?: AxiosRequestConfig["data"];
  error?: any;
  responseCode?: any;
  message?: any;
  errorMessage?: string[];
}> => {
  try {
    const bUrl =
      baseUrl ??
      (CONSTANTS.BASE_URL || `https://www.themealdb.com/api/json/v1/1`);
    let apiURL: string = bUrl + url;
    if (withoutBaseURL) {
      apiURL = url;
    }
    if (version) {
      apiURL = apiURL.replace("v1", version);
    }
    const result = await axios({
      url: apiURL,
      method,
      data,
      params,
      headers,
      ...(signal ? { signal } : {}),
    });
    return result as AxiosResponse;
  } catch (axiosError) {
    const err = axiosError as any;
    const errorMessage = err?.response?.data?.errors || [];
    return { error: err, errorMessage };
  }
};

export default mainApiService;
