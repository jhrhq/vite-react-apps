import type { ColumnDef } from "@tanstack/react-table";
import type { VariantProps } from "class-variance-authority";
import { ArrowUpDown, MoreVertical } from "lucide-react";
import type { Label } from "@/@types/details";
import type { InventoryProduct } from "@/@types/inventory";
import { Badge, type badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatRelativeTime } from "@/lib/date-utils";

type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

export const labelBadgeVariants: Record<Label, BadgeVariant> = {
  "power tools": "default-lighter",
  warranty: "green-lighter",
  electronics: "purple-lighter",
  appliances: "orange-lighter",
  outdoor: "teal-lighter",
  seasonal: "yellow-lighter",
  "high value": "destructive",
};

export const columns: ColumnDef<InventoryProduct>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <span className="px-4 py-4 inline-flex items-center justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </span>
    ),
    cell: ({ row }) => (
      <span className="py-8 px-4 inline-flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </span>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Item
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center">
        {/* 48x48px Image */}
        <div
          // src={row.img}
          // alt={row.customer}
          className="size-12 rounded-xl border object-cover shrink-0 bg-primary-lighter"
        />
        <div className="ml-4 flex flex-col min-w-0">
          <span className="text-base font-medium text-v9 wrap-break-word leading-tight">
            {row.getValue("name")}
          </span>
          <span className="text-sm text-v5 truncate">Model: DCD771C2</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => {
      const value = row.getValue("location");

      return (
        <div className="text-v6 text-sm">
          {value.room}

          {value.subLocation && (
            <>
              <span className="text-v4 mx-1">&gt;</span>
              {value.subLocation}
            </>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "labels",
    header: "Labels",
    cell: ({ row }) => {
      const labels = row.getValue<Label[]>("labels");

      return (
        <div className="capitalize inline-flex gap-2">
          {labels.map((label) => (
            <Badge key={label} variant={labelBadgeVariants[label]}>
              {label}
            </Badge>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-right">Quantity</div>,
    cell: ({ row }) => {
      return (
        <div className="text-sm font-medium text-v9">
          {row.getValue("quantity")}
        </div>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Update",
    cell: ({ row }) => (
      <div className="text-v6 text-sm">
        {formatRelativeTime(row.getValue("updatedAt"))}
      </div>
    ),
  },
  {
    id: "actions",
    // enableHiding: false,
    header: "Actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="text-v4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
