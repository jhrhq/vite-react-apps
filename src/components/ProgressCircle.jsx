import cn from "@/utility/cn-utility";
import { useState } from "react";

import { useEffect, useRef } from "react";

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const Counter = ({
  valueFrom = 0,
  valueTo = 100,
  totalDuration = 2,
}) => {
  const [count, setCount] = useState(valueFrom);

  useInterval(() => {
    if (count < valueTo) {
      setCount(count + 1);
    }
  }, (totalDuration / valueTo) * 1000);

  return count;
};

export const Gauge = ({
  value,
  size = "small",
  showValue = true,
  circleColor = "text-[hsla(131,41%,46%,1)]",
}) => {
  // "extraSmall" | "small" | "medium" | "large"
  const circumference = 332; //2 * Math.PI * 53; // 2 * pi * radius
  const valueInCircumference =
    value < 0 ? 2 * circumference : (value / 100) * circumference;
  const strokeDasharray = `${circumference} ${circumference}`;
  const initialOffset = circumference;
  const strokeDashoffset = initialOffset - valueInCircumference;

  const sizes = {
    extraSmall: {
      width: "24",
      height: "24",
      textSize: "text-xs",
    },
    small: {
      width: "2.5rem",
      height: "2.5rem",
      textSize: "text-medium",
    },
    medium: {
      width: "72",
      height: "72",
      textSize: "text-lg",
    },
    large: {
      width: "144",
      height: "144",
      textSize: "text-3xl",
    },
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center z-50">
        <svg
          fill="none"
          shapeRendering="crispEdges"
          height={sizes[size].height}
          width={sizes[size].width}
          viewBox="0 0 120 120"
          strokeWidth="2"
          className="-rotate-90 transform"
        >
          <circle
            className={cn("opacity-25", circleColor)}
            strokeWidth="9"
            stroke="currentColor"
            fill="transparent"
            shapeRendering="geometricPrecision"
            r="53"
            cx="60"
            cy="60"
          />
          <circle
            className={cn("animate-gauge_fill", circleColor)}
            strokeWidth="9"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={initialOffset}
            shapeRendering="geometricPrecision"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="53"
            cx="60"
            cy="60"
            style={{
              strokeDashoffset: strokeDashoffset,
              transition: "stroke-dasharray 1s ease 0s,stroke 1s ease 0s",
            }}
          />
        </svg>
        {showValue ? (
          <div className="absolute flex animate-gauge_fadeIn ">
            <p
              className={cn(
                "text-white dark:text-gray-100 font-medium",
                sizes[size].textSize
              )}
            >
              <Counter valueTo={value < 0 ? 0 : value} /> %
              {/* {value < 0 ? 0 : value} */}
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
};
