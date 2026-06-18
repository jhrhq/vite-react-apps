/** biome-ignore-all lint/suspicious/noArrayIndexKey: false  */
import { Skeleton } from "@home-inventory/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@home-inventory/components/ui/table";

export function InventoryProductTableSkeleton() {
  // Create an array of 6 items to represent a "full" page
  const rows = Array.from({ length: 6 });

  return (
    <div className="rounded-md border mt-28.75">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            {[
              null,
              "Item",
              "Location",
              "Labels",
              "Quantity",
              "Update",
              "Actions",
            ].map((_, index) => (
              <TableHead key={index}>
                {" "}
                <Skeleton className="h-8 rounded" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((_, i) => (
            <TableRow key={i}>
              {/* Checkbox */}
              <TableCell>
                <Skeleton className="h-4 w-4 rounded" />
              </TableCell>

              {/* Image Icon */}
              <TableCell>
                <Skeleton className="h-10 w-10 rounded-lg" />
              </TableCell>

              {/* Title & Model */}
              <TableCell>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-37.5" />
                  <Skeleton className="h-3 w-25" />
                </div>
              </TableCell>

              {/* Location Breadcrumb */}
              <TableCell>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-15" />
                  <Skeleton className="h-3 w-3 rounded-full" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </TableCell>

              {/* Tags */}
              <TableCell>
                <div className="flex gap-2">
                  <Skeleton className="h-5 w-16 rounded-full" />
                  <Skeleton className="h-5 w-16 rounded-full" />
                </div>
              </TableCell>

              {/* Quantity */}
              <TableCell className="text-center">
                <Skeleton className="mx-auto h-4 w-4" />
              </TableCell>

              {/* Date */}
              <TableCell>
                <Skeleton className="h-4 w-20" />
              </TableCell>

              {/* Actions Menu */}
              <TableCell>
                <Skeleton className="h-8 w-8 rounded-full" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
