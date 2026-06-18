/** biome-ignore-all lint/suspicious/noArrayIndexKey: <false positive> */

import type {
  InventoryProductDetail,
  InventoryProductDetailLabel,
  InventoryProductDetailLevels,
} from "@home-inventory/@types/details";
import { AspectRatio } from "@home-inventory/components/ui/aspect-ratio";
import { Badge, type badgeVariants } from "@home-inventory/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@home-inventory/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@home-inventory/components/ui/carousel";
import { formattedDate } from "@home-inventory/lib/date-utils";
import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

export const labelBadgeVariants: Record<
  InventoryProductDetailLabel,
  BadgeVariant
> = {
  "power tools": "default-lighter-rounded",
  warranty: "green-lighter-rounded",
  electronics: "purple-lighter-rounded",
  appliances: "orange-lighter-rounded",
  outdoor: "teal-lighter-rounded",
  seasonal: "yellow-lighter-rounded",
  "high value": "destructive",
  "active warranty": "green-lighter-rounded",
};
export const levelBadgeVariants: Record<
  InventoryProductDetailLevels,
  BadgeVariant
> = {
  electronics: "default-lighter-rounded",
  audio: "purple-lighter-rounded",
  premium: "orange-lighter-rounded",
};

type InventoryDetailProps = {
  data: InventoryProductDetail;
};
export function InventoryDetailsTitleBar({ data }: InventoryDetailProps) {
  return (
    <div className="flex flex-col gap-2 mt-6">
      <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
        {data.name}{" "}
      </h1>
      <div className="inline-flex gap-2">
        {data.labels.map((label) => (
          <Badge
            key={label}
            variant={labelBadgeVariants[label] || "default-lighter"}
          >
            {label}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function InventoryDetailsInfo({ data }: InventoryDetailProps) {
  return (
    <Card className="space-y-4">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-v9 tracking-tight">
          Key Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <InventoryKeyDetailsRow
          label="Location"
          value={
            <>
              <FaLocationDot className="text-primary" />
              <span className="text-v9 text-base">{data.location}</span>
            </>
          }
        />
        <InventoryKeyDetailsRow
          label="Lavels"
          value={data.levels.map((level) => (
            <Badge key={level} variant={levelBadgeVariants[level]}>
              {level}
            </Badge>
          ))}
        />
        <InventoryKeyDetailsRow
          label="Quantity"
          value={<span className="text-v9 text-base">{data.quantity}</span>}
        />
        <InventoryKeyDetailsRow
          label="Purchase Price"
          value={
            <span className="text-v9 font-semibold text-lg">${data.price}</span>
          }
        />
        <InventoryKeyDetailsRow
          label="Warranty"
          value={
            <Badge variant="green-lighter-rounded">
              Active until {formattedDate(data.updatedAt)}
            </Badge>
          }
        />
      </CardContent>
      <CardFooter>
        <InventoryKeyDetailsRow
          label="Notes"
          value={<span className="text-sm text-v6">{data.notes}</span>}
        />
      </CardFooter>
    </Card>
  );
}

export function InventoryKeyDetailsRow({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-medium text-sm">{label}</p>
      <div className="flex gap-2 items-center">{value}</div>
    </div>
  );
}

export const InventoryDetailsImages = ({ data }: InventoryDetailProps) => {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleThumbnailClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto ">
      <Carousel
        // opts={{
        //   breakpoints: {
        //     "(min-width: 768px)": {
        //       active: false,
        //     },
        //   },
        // }}
        setApi={setApi}
      >
        <CarouselContent className="gap-4 md:m-0">
          {data.images.map((img, index) => (
            <CarouselItem
              className="md:p-0"
              key={`inventory-detail-${index}-image-${index}`}
            >
              <AspectRatio ratio={1} className="overflow-hidden rounded-lg">
                <img
                  src={img}
                  alt={`${data.name}-${index + 1}`}
                  className="block size-full object-cover object-center"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="md:hidden">
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </div>
      </Carousel>
      {/* Grid of Thumbnails underneath */}
      <div className="grid grid-cols-3 gap-3 mt-3 px-1">
        {data.images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`relative aspect-4/3 overflow-hidden rounded-xl bg-zinc-100 transition-all duration-200 ${
              current === index
                ? "ring-2 ring-zinc-900 ring-offset-2 opacity-100"
                : "opacity-75 hover:opacity-100"
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
