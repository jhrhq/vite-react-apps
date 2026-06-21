/* eslint-disable react/display-name */
import cn from "@quizzes/utility/cn-utility";
import { forwardRef } from "react";

const Input = forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full px-4 py-3 rounded-lg border border-gray-300",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

export default Input;
