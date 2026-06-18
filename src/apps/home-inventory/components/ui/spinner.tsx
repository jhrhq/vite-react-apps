import { cn } from "@home-inventory/lib/utils";
import { Loader2Icon } from "lucide-react";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

function FullPageSpinner() {
  return (
    <div className="flex h-svh items-center justify-between gap-4">
      <Spinner />
    </div>
  );
}

export { FullPageSpinner, Spinner };
