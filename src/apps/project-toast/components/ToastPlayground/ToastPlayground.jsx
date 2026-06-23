import React from "react";
import Button from "../Button";
import TextInput from "./text-input";

import { ToastContext } from "../ToastProvider/ToastProvider";
import ToastShelf from "../ToastShelf/ToastShelf";
import styles from "./ToastPlayground.module.css";

import toastImage from "../../assets/toast.png";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { createToast } = React.useContext(ToastContext);
  const [variant, setvarinat] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSelectVariant(event) {
    setvarinat(event.target.value);
  }

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    createToast(message, variant);
    setMessage("");
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src={toastImage} />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />

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
                className="block w-full h-16 border"
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
                    checked={option === variant}
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
