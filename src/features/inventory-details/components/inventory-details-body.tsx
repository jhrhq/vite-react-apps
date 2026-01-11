/** biome-ignore-all lint/suspicious/noArrayIndexKey: <false positive> */

import type { ReactNode } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
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

export function InventoryDetailsTitleBar() {
  return (
    <div className="flex flex-col gap-2 mt-6">
      <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
        Sony WH-1000XM4 Headphones{" "}
      </h1>
      <div className="inline-flex gap-2">
        <Badge
          variant="default-lighter-rounded"
          className="font-medium text-xs"
        >
          Electronics
        </Badge>
        <Badge variant="green-light-rounded">Active Warranty</Badge>
      </div>
    </div>
  );
}

export function InventoryDetailsInfo() {
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
              <span className="text-v9 text-base">Living Room</span>
            </>
          }
        />
        <InventoryKeyDetailsRow
          label="Lavels"
          value={
            <>
              <Badge variant="default-lighter-rounded">Electronics</Badge>
              <Badge variant="purple-lighter-rounded">Audio</Badge>
              <Badge variant="orange-light-rounded">Electronics</Badge>
            </>
          }
        />
        <InventoryKeyDetailsRow
          label="Quantity"
          value={<span className="text-v9 text-base">1</span>}
        />
        <InventoryKeyDetailsRow
          label="Purchase Price"
          value={<span className="text-v9 font-semibold text-lg">$349.99</span>}
        />
        <InventoryKeyDetailsRow
          label="Warranty"
          value={
            <Badge variant="green-light-rounded">
              Active until March 15, 2026
            </Badge>
          }
        />
      </CardContent>
      <CardFooter>
        <InventoryKeyDetailsRow
          label="Notes"
          value={
            <span className="text-sm text-v6">
              Purchased from Best Buy with extended warranty. Includes carrying
              case, charging cable, and audio cable. Serial number: 1234567890.{" "}
            </span>
          }
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

interface InventoryImagesProps {
  images: Array<{
    srcset: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    sizes: string;
  }>;
}
export const InventoryDetailsImages = ({ images }: InventoryImagesProps) => {
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
        {images.map((img, index) => (
          <CarouselItem
            className="first:col-span-3 md:p-0"
            key={`inventory-detail-1-image-${index}`}
          >
            <AspectRatio ratio={1} className="overflow-hidden rounded-lg">
              <img
                // srcSet={img.srcset}
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes={img.sizes}
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
