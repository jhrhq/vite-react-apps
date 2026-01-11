import { FaBook, FaPlus } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function LocationItemsLists() {
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
          <LocationItemList />
          <LocationItemList />
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

export function LocationItemList() {
  return (
    <Card className="p-4">
      <CardContent className="p-0">
        <div className="flex justify-between flex-1 gap-4">
          <div className="flex gap-4">
            <div className="size-12 bg-teal-lighter rounded-2xl flex items-center justify-center ">
              <FaBook className="text-teal-light h-6 w-5" />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="font-medium text-sm text-v9">
                Vintage Camera Collection{" "}
              </p>
              <p className=" text-xs text-v5 ">
                Electronics • Added 2 weeks ago
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm font-semibold text-v9 text-right">
              $180
            </span>
            <Badge variant="green-light-rounded" className="py-0.5 px-2">
              Good
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
