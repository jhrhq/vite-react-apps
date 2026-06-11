import { useParams } from "react-router";
import ProductTab from "@/components/product-tab";
import { Card, CardContent } from "@/components/ui/card";
import {
  InventoryDetailsImages,
  InventoryDetailsInfo,
  InventoryDetailsTitleBar,
} from "@/features/inventory-details/components/inventory-details-body";
import { InventoryDetailsHeader } from "@/features/inventory-details/components/inventory-details-header";
import { InventoryDetailViewSkeleton } from "@/features/inventory-details/components/inventory-skeleton";
import { useInventoryProduct } from "@/features/inventory-details/hooks/use-inventory-product";
import { ErrorPage } from "@/features/pages/Error";

export default function InventoryDetailsPage() {
  const { id } = useParams();
  const { data, isLoading, isFetching, isError, error, refetch } =
    useInventoryProduct(id || "1");

  if (isLoading || isFetching) {
    return <InventoryDetailViewSkeleton />;
  }
  
  if (isError || !data) {
    return <ErrorPage message={error?.message} reset={refetch} />;
  }

  return (
    <>
      <InventoryDetailsHeader data={data} />
      <div className="flex flex-1 flex-col gap-6 overflow-y-auto bg-[#F8FAFC] px-6">
        <InventoryDetailsTitleBar data={data} />
        <section>
          <div className="container">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
              <Card>
                <CardContent>
                  <InventoryDetailsImages data={data} />
                </CardContent>
              </Card>
              <InventoryDetailsInfo data={data} />
            </div>
            <ProductTab data={data} />
          </div>
        </section>
      </div>
    </>
  );
}
