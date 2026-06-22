import cn from "@product-list/utilities/cn-utility";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Radio = forwardRef(({ className, onValueChange, ...props }, ref) => {
  return (
    <input
      type="radio"
      className={cn("form-radio peer/draft h-4 w-4", className)}
      onChange={onValueChange}
      {...props}
      ref={ref}
    />
  );
});

export default Radio;
