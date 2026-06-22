import cn from "@product-list/utilities/cn-utility";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Checkbox = forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    type="checkbox"
    className={cn("form-checkbox h-4 w-4", className)}
    {...props}
  />
));

export default Checkbox;
