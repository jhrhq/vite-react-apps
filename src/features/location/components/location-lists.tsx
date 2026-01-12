import { FaBook, FaPlus } from "react-icons/fa6";
import type { LocationDetailResponse } from "@/@types/location";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function LocationItemsLists({ data }: { data: LocationDetailResponse }) {
  return (
    <Card>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <p className="font-semibold text-xl text-v9">
            Items in this Location
          </p>
          <p className="text-primary text-sm font-meidum flex gap-1">
            View All
          </p>
        </div>
        <div className="space-y-3">
          {data.items.map((item) => (
            <LocationItemList key={item.id} item={item} />
          ))}
        </div>
        <Separator />
        <Button className="font-medium text-sm w-full h-10 text-primary bg-transparent hover:bg-primary-lightest rounded-none py-2.5">
          {" "}
          <FaPlus /> Add Item to this Location{" "}
        </Button>
      </CardContent>
    </Card>
  );
}

export function LocationItemList({
  item,
}: {
  item: LocationDetailResponse["items"];
}) {
  return (
    <Card className="p-4">
      <CardContent className="p-0">
        <div className="flex justify-between flex-1 gap-4">
          <div className="flex gap-4">
            <div className="size-12 bg-teal-lighter rounded-2xl flex items-center justify-center ">
              <FaBook className="text-teal-light h-6 w-5" />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="font-medium text-sm text-v9">{item.name} </p>
              <p className=" text-xs text-v5 ">
                {item.category} • {item.addedTimeAgo}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm font-semibold text-v9 text-right">
              ${item.price}
            </span>
            <Badge variant="green-lighter-rounded" className="py-0.5 px-2">
              {item.status}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
