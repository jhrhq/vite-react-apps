import cn from "@product-list/utilities/cn-utility";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Button = forwardRef(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10  hover:ring-1 hover:bg-slate-50 hover:text-slate-900 items-center text-center ",
      className
    )}
    {...props}
  >
    {children}
  </button>
));

export default Button;
