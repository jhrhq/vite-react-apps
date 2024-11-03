import cn from "@/utilities/cn-utility";
import { forwardRef } from "react";

const Radio = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      type="radio"
      className={cn("form-radio peer/draft h-4 w-4", className)}
      {...props}
      ref={ref}
    />
  );
});

export default Radio;
