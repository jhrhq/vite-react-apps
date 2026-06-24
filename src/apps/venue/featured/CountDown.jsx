import { useEffect, useRef, useState } from "react";
import { useReveal } from "../hooks/useReveal";

function CountdownItem({ value, label }) {
  return (
    <div className="countdown_item">
      <div className="countdown_time">
        {value}
      </div>

      <div className="countdown_tag">
        {label}
      </div>
    </div>
  );
}

export default function CountDown() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMins, setTimerMins] = useState("00");
  const [timerSecs, setTimerSecs] = useState("00");

  const intervalRef = useRef(null);

  const { ref, visible } = useReveal();

  useEffect(() => {
    const targetDate = new Date(
      "Dec 31, 2026 23:59:59"
    ).getTime();

    const updateCountdown = () => {
      const now = Date.now();

      const distance =
        targetDate - now;

      if (distance <= 0) {
        clearInterval(
          intervalRef.current
        );

        setTimerDays("00");
        setTimerHours("00");
        setTimerMins("00");
        setTimerSecs("00");

        return;
      }

      const days = Math.floor(
        distance /
          (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (distance %
          (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      );

      const mins = Math.floor(
        (distance %
          (1000 * 60 * 60)) /
          (1000 * 60)
      );

      const secs = Math.floor(
        (distance %
          (1000 * 60)) /
          1000
      );

      setTimerDays(
        String(days).padStart(
          2,
          "0"
        )
      );

      setTimerHours(
        String(hours).padStart(
          2,
          "0"
        )
      );

      setTimerMins(
        String(mins).padStart(
          2,
          "0"
        )
      );

      setTimerSecs(
        String(secs).padStart(
          2,
          "0"
        )
      );
    };

    updateCountdown();

    intervalRef.current =
      setInterval(
        updateCountdown,
        1000
      );

    return () =>
      clearInterval(
        intervalRef.current
      );
  }, []);

  return (
    <div
      ref={ref}
      className={`
        countdown_wrapper
        transition-all
        duration-1000
        ease-out
        ${
          visible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-32"
        }
      `}
    >
      <div className="countdown_top">
        Event Starts In
      </div>

      <div className="countdown_bottom">
        <CountdownItem
          value={timerDays}
          label="Days"
        />

        <CountdownItem
          value={timerHours}
          label="Hrs"
        />

        <CountdownItem
          value={timerMins}
          label="Min"
        />

        <CountdownItem
          value={timerSecs}
          label="Sec"
        />
      </div>
    </div>
  );
}