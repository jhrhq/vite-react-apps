import axios from "axios";

export const axiosPrimary = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL || "http://www.localhost:5000",
});

const axiosServices = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL || "http://www.localhost:5000",
});

axiosServices.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosServices.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      !window.location.href.includes("/login")
    ) {
      originalRequest._retry = true;
      const refreshToken = window?.localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          const response = await axiosPrimary.post(`/api/auth/refresh-token`, {
            refreshToken,
          });
          const data = response.data?.data;
          window?.localStorage.setItem("accessToken", data?.accessToken);
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${data?.accessToken}`;
          return axiosServices(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          window.location.pathname = "/login";
        }
      } else {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.pathname = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosServices;
