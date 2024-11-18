/* eslint-disable react/display-name */
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Input = forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn("px-4 py-3 rounded-lg border border-gray-300", className)}
      ref={ref}
      {...props}
    />
  );
});

export default Input;
