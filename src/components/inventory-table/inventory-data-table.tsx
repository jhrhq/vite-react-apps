"use client";
import {
  type ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import * as React from "react";
import { columns, type Payment } from "@/components/inventory-table/columns";
import ReusableDataTable from "@/components/reusable-data-table";

const _data: Payment[] = [
  {
    id: "m5gr84i9",
    labels: ["power tools", "warranty"],
    items: "Dewalt Cordless Drill",
    location: "Garage > Tool Cabinet",
    quantity: 1,
    update: "2 days ago",
  },
  {
    id: "m5gr84i9",
    labels: ["electronics", "warranty"],
    items: "Dewalt Cordless Drill",
    location: "Garage > Tool Cabinet",
    quantity: 1,
    update: "2 days ago",
  },
  {
    id: "m5gr84i9",
    labels: ["appliances"],
    items: "Dewalt Cordless Drill",
    location: "Garage > Tool Cabinet",
    quantity: 1,
    update: "2 days ago",
  },
  {
    id: "m5gr84i9",
    labels: ["outdoor", "seasonal"],
    items: "Dewalt Cordless Drill",
    location: "Garage > Tool Cabinet",
    quantity: 1,
    update: "2 days ago",
  },
  {
    id: "m5gr84i9",
    labels: ["electronics", "warranty", "high value"],
    items: "Dewalt Cordless Drill",
    location: "Garage > Tool Cabinet",
    quantity: 1,
    update: "2 days ago",
  },
  {
    id: "m5gr84i9",
    labels: ["appliances"],
    items: "Dewalt Cordless Drill",
    location: "Garage > Tool Cabinet",
    quantity: 1,
    update: "2 days ago",
  },
];

export function InventoryDataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: _data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full mt-28.75">
      <div className=" border rounded-md shadow-sm">
        <ReusableDataTable columns={columns} table={table} />
      </div>
    </div>
  );
}
