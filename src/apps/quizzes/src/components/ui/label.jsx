import cn from "@/utility/cn-utility";
import { forwardRef } from "react";

const Label = forwardRef(({ className, children, ...props }, ref) => (
  <label ref={ref} className={cn(className)} {...props}>
    {children}
  </label>
));

export default Label;
