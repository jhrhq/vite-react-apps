import React from "react";
import Button from "../Button";
import TextInput from "./text-input";

import Toast from "../Toast/Toast";
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastOption, setToastOption] = React.useState("");
  const [showToast, setShowToast] = React.useState(false);
  function handleSelectVariant(event) {
    setToastOption(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    toastOption && setShowToast(true);
  }

  function handleDismiss() {
    setShowToast(false);
    setToastOption("");
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="../../../assets/toast.png" />
        <h1>Toast Playground</h1>
        {showToast && <Toast variant={toastOption} onDismiss={handleDismiss} />}
      </header>

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" className={styles.messageInput} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => {
                return (
                  <TextInput
                    key={option}
                    label={option}
                    id={option}
                    type="radio"
                    name="variant"
                    checked={option === toastOption}
                    value={option}
                    onChange={handleSelectVariant}
                  />
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
