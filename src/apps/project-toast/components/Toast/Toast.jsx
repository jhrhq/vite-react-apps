import React from "react";

import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "lucide-react";

import { ToastContext } from "../ToastProvider/ToastProvider";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, children }) {
  const { toastDismiss } = React.useContext(ToastContext);

  const ToastIcon = ICONS_BY_VARIANT[variant];

  function closeToast() {
    toastDismiss(id);
  }

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <ToastIcon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} - </VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        onClick={closeToast}
        aria-label="Dismiss Message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
