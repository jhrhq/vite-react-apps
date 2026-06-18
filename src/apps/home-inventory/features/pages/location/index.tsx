/** biome-ignore-all lint/suspicious/noArrayIndexKey: false positive */

import { LocationMainHeader } from "@home-inventory/features/location/components/location-header";
import { LocationItemDetails } from "@home-inventory/features/location/components/location-items-details";
import { LocationItemsLists } from "@home-inventory/features/location/components/location-lists";
import { LocationSecondarySidebar } from "@home-inventory/features/location/components/location-sidebar";
import { LocationSkeleton } from "@home-inventory/features/location/components/location-skeleton";
import { useLocation } from "@home-inventory/features/location/hooks/use-location";
import { ErrorPage } from "@home-inventory/features/pages/Error";
import { cn } from "@home-inventory/lib/utils";

interface ProductDetail1Props {
  className?: string;
}

export default function LocationPage({ className }: ProductDetail1Props) {
  const { data, isLoading, isFetching, isError, error, refetch } =
    useLocation("bookshelf-1");

  if (isLoading || isFetching) {
    return <LocationSkeleton />;
  }

  if (isError || !data) {
    return <ErrorPage message={error?.message} reset={refetch} />;
  }
  return (
    <>
      <LocationMainHeader />
      <div className="flex  ">
        <LocationSecondarySidebar />
        <section className={cn("bg-[#F8FAFC] flex-1 p-4", className)}>
          <div className="container space-y-6">
            <LocationItemDetails data={data} />
            <LocationItemsLists data={data} />
          </div>
        </section>
      </div>
    </>
  );
}
