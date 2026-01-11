"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function DataTableFooter() {
  return (
    <div className="flex items-center justify-end space-x-2 py-4 px-8 border-t bg-white">
      <DataTableItemsLegth />
      <DatatablePagination />
    </div>
  );
}

export default DataTableFooter;

function DataTableItemsLegth() {
  return (
    <div className="text-v6 flex-1 text-sm">
      Showing{" "}
      <span className="font-medium text-v9">
        TODO: 1-8
        {/* {table.getFilteredSelectedRowModel().rows.length} */}
      </span>{" "}
      of{" "}
      <span className="font-medium text-v9">
        {/* {table.getFilteredRowModel().rows.length} */}
      </span>{" "}
      items
    </div>
  );
}

function DatatablePagination() {
  return (
    <div className="space-x-2">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              // onClick={() => table.previousPage()}
              /* To contorl disable button */
              /* className={
                    0 <= 1
                      ? "cursor-not-allowed opacity-50 pointer-events-none"
                      : ""
                  } */
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink isActive href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">31</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              // onClick={() => table.nextPage()}
              // disabled={!table.getCanNextPage()}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
