import React from "react";
import Button from "../Button";
import TextInput from "./text-input";

import ToastShelf from "../ToastShelf/ToastShelf";
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastOption, setToastOption] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [showToast, setShowToast] = React.useState(false);
  const [toastShelf, setToastShelf] = React.useState([]);

  function handleSelectVariant(event) {
    setToastOption(event.target.value);
  }

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextToastValue = [
      ...toastShelf,
      { message, variant: toastOption, id: window.crypto.randomUUID() },
    ];
    setToastShelf(nextToastValue);
    setShowToast(true);
    setMessage("");
  }

  function handleDismiss(toastId) {
    const nextToastShelf = toastShelf.filter((item) => item.id != toastId);
    setToastShelf(nextToastShelf);

    toastShelf.length == 0 && setShowToast(false);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="../../../assets/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {/* {showToast && (
        <Toast variant={toastOption} onDismiss={handleDismiss}>
          {message}
        </Toast>
      )} */}

      {showToast && (
        <ToastShelf toastShelfs={toastShelf} onDismiss={handleDismiss} />
      )}

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
              <textarea
                id="message"
                required
                className={styles.messageInput}
                value={message}
                onChange={handleMessage}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => {
                return (
                  <TextInput
                    required
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
