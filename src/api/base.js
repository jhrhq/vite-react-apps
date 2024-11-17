import axiosServices from "@/utility/axios-service";
import { isAxiosError } from "axios";

// initialize an empty api service that we'll inject endpoints into later as needed
const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosServices({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return {
        data: result.data,
        meta: {
          headers: result.headers,
          status: result.status,
          config: result.config,
          request: result.request,
        },
      };
    } catch (axiosError) {
      const err = axiosError;

      if (isAxiosError(err)) {
        return {
          error: {
            status: err.response?.status || 500,
            data: err.response?.data || err.message,
          },
        };
      } else {
        return {
          error: {
            status: 400,
            data: "Something went wrong",
          },
        };
      }
    }
  };

export default axiosBaseQuery;
