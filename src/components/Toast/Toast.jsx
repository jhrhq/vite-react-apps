import React from "react";

import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "lucide-react";

import VisuallyHidden from "../VisuallyHidden";

import { ToastContext } from "../ToastProvider/ToastProvider";
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

  function closeToast(toastId) {
    toastDismiss(id);
  }

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <ToastIcon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={closeToast}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
