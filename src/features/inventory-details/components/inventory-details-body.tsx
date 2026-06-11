/** biome-ignore-all lint/suspicious/noArrayIndexKey: <false positive> */

import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { FaLocationDot } from "react-icons/fa6";
import type {
  InventoryProductDetail,
  InventoryProductDetailLabel,
  InventoryProductDetailLevels,
} from "@/@types/details";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge, type badgeVariants } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { formattedDate } from "@/lib/date-utils";

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
  "high value": "destructive-lighter-rounded",
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
          <Badge key={label} variant={labelBadgeVariants[label]}>
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
  return (
    <Carousel
      opts={{
        breakpoints: {
          "(min-width: 768px)": {
            active: false,
          },
        },
      }}
    >
      <CarouselContent className="gap-4 md:m-0 md:grid md:grid-cols-3 xl:gap-5">
        {data.images.map((img, index) => (
          <CarouselItem
            className="first:col-span-3 md:p-0"
            key={`inventory-detail-1-image-${index}`}
          >
            <AspectRatio ratio={1} className="overflow-hidden rounded-lg">
              <img
                src={img}
                alt={"produect tests"}
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
  );
};
