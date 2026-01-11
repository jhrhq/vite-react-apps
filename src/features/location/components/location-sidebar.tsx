import type { ReactNode } from "react";
import {
  FaChevronRight,
  FaHouse,
  FaMagnifyingGlass,
  FaPlus,
  FaWindowRestore,
} from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
export function LocationSecondarySidebar() {
  return (
    <div className="bg-white h-screen max-w-[384px] w-full border-r">
      <LocationSecondarySidebarForm />
      <LocationSecondarySidebarAction />
      <div className="p-4 space-y-1">
        <LocationRow
          label="Home"
          count={12}
          showChevron={true}
          level="root"
          icon={<FaHouse className="text-primary" />}
        />
        <LocationRow
          label="Garage"
          count={8}
          icon={<FaWindowRestore className="text-primary" />}
        />
        <LocationRow
          label="Garage"
          count={8}
          icon={<FaWindowRestore className="text-primary" />}
        />
      </div>
    </div>
  );
}

export function LocationSecondarySidebarForm() {
  return (
    <div className="p-4 border-b">
      <form>
        <Field className="gap-2">
          <InputGroup className="h-10.5">
            <InputGroupAddon>
              <FaMagnifyingGlass className="size-3.5 text-v4" />
            </InputGroupAddon>
            <InputGroupInput
              id="username"
              type="username"
              placeholder="Search items..."
            />
          </InputGroup>
        </Field>
      </form>
    </div>
  );
}

export function LocationSecondarySidebarAction() {
  return (
    <div className="p-4 border-b">
      <Button className="font-medium text-sm h-11 w-full gap-2">
        <FaPlus /> New Location
      </Button>
    </div>
  );
}

type LocationRowProps = {
  label: string;
  count: number;
  icon: ReactNode;
  level?: "root" | "child";
  showChevron?: boolean;
};

export function LocationRow({
  label,
  count,
  icon,
  level = "child",
  showChevron = false,
}: LocationRowProps) {
  return (
    <div className="py-2 px-3 flex items-center justify-between gap-2">
      <div
        className={cn("flex items-center gap-2", level === "child" && "pl-5")}
      >
        {showChevron && <FaChevronRight className="text-v4" />}
        {icon}
        <span
          className={cn(
            "text-sm",
            level === "root" ? "font-medium text-v9" : "font-regular",
          )}
        >
          {label}
        </span>
      </div>

      <Badge className="py-1 px-2 rounded-full bg-v1 text-xs text-v5">
        {count}
      </Badge>
    </div>
  );
}
