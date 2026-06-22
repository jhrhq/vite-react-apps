import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    const nextToastValue = [
      ...toasts,
      { message, variant, id: window.crypto.randomUUID() },
    ];
    setToasts(nextToastValue);
  }

  function toastDismiss(toastId) {
    const nextToastShelf = toasts.filter((item) => item.id != toastId);
    setToasts(nextToastShelf);
  }

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey("Escape", handleEscape);

  return (
    <ToastContext.Provider value={{ toasts, createToast, toastDismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
