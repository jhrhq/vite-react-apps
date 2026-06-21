import cn from "@quizzes/utility/cn-utility";
import Slot from "@quizzes/utility/slot";
import { forwardRef } from "react";

const Button = forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn("bg-primary text-white py-3 rounded-lg mb-4", className)}
      ref={ref}
      {...props}
    />
  );
});
export default Button;
