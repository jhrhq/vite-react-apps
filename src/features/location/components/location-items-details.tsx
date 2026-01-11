import {
  FaBook,
  FaChevronRight,
  FaHouse,
  FaPen,
  FaPlus,
  FaTrash,
} from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function LocationItemDetails() {
  return (
    <Card>
      <CardContent className="space-y-4">
        {/* Bookshelf card */}
        <div className="flex justify-between flex-1">
          <LocationItemDetailsHeder />
          <LocationItemDetailsActions />
        </div>
        <LocationItemDetailsDescription />
        <div className="border-t pt-4 flex items-center justify-between gap-4">
          <LocationItemDetailRow label="ITEMS" quantity={"2"} />
          <LocationItemDetailRow label="TOTAL VALUE" quantity={"$245"} />
          <LocationItemDetailRow label="CREATED" date={"Jan 15, 2024 "} />
        </div>
      </CardContent>
    </Card>
  );
}

export function LocationItemDetailsHeder() {
  return (
    <div className="flex gap-4">
      <div className="size-14 bg-teal-lighter rounded-2xl flex items-center justify-center">
        <FaBook className="text-teal-light h-6 w-5" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-2xl text-v9">Bookshelf</p>
        <LocationItemDetailBreadCrumb />
      </div>
    </div>
  );
}

export function LocationItemDetailBreadCrumb() {
  return (
    <div className="flex items-center gap-2 text-v5">
      <FaHouse />
      <span className=" text-sm">Home</span>
      <FaChevronRight className="text-v4" />
      <span className=" text-sm ">Living Room</span>
    </div>
  );
}

export function LocationItemDetailsDescription() {
  return (
    <div className="space-y-1">
      <p className="font-semibold tex-sm text-v5">DESCRIPTION</p>
      <p className="text-sm">
        White wooden bookshelf in the living room containing books, decorations,
        and collectibles. Located next to the window.
      </p>
    </div>
  );
}

export function LocationItemDetailsActions() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" className="text-v7 h-9.5 font-medium">
        <FaPen /> Edit
      </Button>
      <Button variant="default-lightest" className="font-medium h-9.5">
        <FaPlus />
        Add Child
      </Button>
      <Button variant="destructive" className="font-medium h-9.5">
        <FaTrash /> Delete
      </Button>
    </div>
  );
}

interface ItemDetailRowProps {
  label: string;
  quantity?: string | number;
  date?: string;
}

export function LocationItemDetailRow({
  label,
  quantity,
  date,
}: ItemDetailRowProps) {
  return (
    <span className="inline-flex flex-col gap-1">
      <span className="text-v5 text-xs font-semibold">{label}</span>
      <span
        className={cn(
          date ? "font-medium text-sm" : "text-v9 font-semibold text-2xl",
        )}
      >
        {date ?? quantity}
      </span>
    </span>
  );
}
