/* eslint-disable react/display-name */
import cn from "@quizzes/utility/cn-utility";
import { forwardRef } from "react";

const Textarea = forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "px-3 py-2 border border-gray-300 rounded-md shadow-xs focus:outline-hidden focus:ring-buzzr-purple focus:border-buzzr-purple",

        className
      )}
      ref={ref}
      {...props}
    />
  );
});

export default Textarea;
