import Loader from "@/components/Loader";
import accountReducer from "@/store/accountReducer";
import { LOGIN, LOGOUT } from "@/store/actions";
import axiosServices, { axiosPrimary } from "@/utility/axios-service";
import { getStorageValue } from "@/utility/utilities";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useLayoutEffect, useReducer } from "react";

const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: null,
};

const verifyToken = (serviceToken) => {
  if (!serviceToken) {
    return false;
  }
  const decoded = jwtDecode(serviceToken);
  return decoded.exp > Date.now() / 1000;
};

const setSession = (accessToken, refreshToken) => {
  if (accessToken && refreshToken) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    axiosServices.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    delete axiosServices.defaults.headers.common.Authorization;
  }
};

const JWTContext = createContext(null);

export const JWTProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    accountReducer,
    initialState,
    getStorageValue
  );

  useLayoutEffect(() => {
    const init = async () => {
      try {
        const serviceToken = window.localStorage.getItem("accessToken");
        const refreshToken = window.localStorage.getItem("refreshToken");
        if (serviceToken && verifyToken(serviceToken)) {
          setSession(serviceToken, refreshToken);
          const user = jwtDecode(serviceToken);
          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
              user,
            },
          });
        } else if (refreshToken && verifyToken(refreshToken)) {
          const response = await axiosPrimary.post(
            "/auth/refresh",
            {},
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${refreshToken}`,
              },
            }
          );
          const { access } = response.data;
          setSession(access, refreshToken);
        } else {
          dispatch({
            type: LOGOUT,
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: LOGOUT,
        });
      }
    };
    init();
  }, []);

  const login = async (email, password) => {
    const response = await axiosServices.post("/auth/login", {
      email,
      password,
    });

    const { username, access, refresh } = response.data;

    setSession(access, refresh);

    dispatch({
      type: LOGIN,
      payload: {
        isLoggedIn: true,
        user: {
          email: email,
          name: username,
        },
      },
    });
  };

  const logout = () => {
    setSession(null, null);
    dispatch({ type: LOGOUT });
  };

  const resetPassword = async (email) => {
    await axiosServices.post("/auth/password/forget", { email });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state));
  }, [state]);

  if (
    !state ||
    (state && state.isInitialized != null && !state.isInitialized)
  ) {
    return <Loader />;
  }

  return (
    <JWTContext.Provider value={{ ...state, login, logout, resetPassword }}>
      {children}
    </JWTContext.Provider>
  );
};

export default JWTContext;
