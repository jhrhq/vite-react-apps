/** biome-ignore-all lint/suspicious/noArrayIndexKey: false positive */
"use client";
import Image from "next/image";
import {
  FaChevronRight,
  FaLocationDot,
  FaPaperclip,
  FaPen,
  FaTrash,
} from "react-icons/fa6";
import ProductTab from "@/app/dashboard/product-details/product-tab";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

/* 
type StockStatusCode = "IN_STOCK" | "OUT_OF_STOCK";

interface StockInfo {
  stockStatusCode?: StockStatusCode;
  stockQuantity?: number;
}

type option = {
  id: string;
  label: string;
  stockInfo: StockInfo;
  color?: string;
  value: string;
};

interface Hinges {
  label: string;
  id: string;
  name: string;
  options?: option[];
  min?: number;
  max?: number;
}

interface ProductImagesProps {
  images: Array<{
    srcset: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    sizes: string;
  }>;
}

interface ReviewsProps {
  rate: number;
  totalReviewers: string;
}

interface PriceProps {
  regular: number;
  sale?: number;
  currency: string;
  text?: string;
}

interface ProductInfoProps {
  info?: Array<{
    label: string;
    value: string;
  }>;
} */

const _MAX_STARS = 5;

const PRODUCT_DETAILS = {
  name: "Sony WH-1000XM4 Headphones",
  color: "blue",
  size: "m",
  reviews: {
    rate: 3.5,
    totalReviewers: "5.8k",
  },
  description:
    "This denim puffer jacket blends warmth and street style, featuring tonal blue shades for a distinctive look that's both bold and versatile. Designed for comfort in any season.",
  price: {
    regular: 80.0,
    sale: 69.0,
    currency: "USD",
  },
  hinges: {
    size: {
      label: "Select size",
      id: "size",
      name: "size",
      options: [
        {
          id: "xs",
          label: "xs",
          value: "xs",
          stockInfo: {
            stockStatusCode: "OUT_OF_STOCK",
          },
        },
        {
          id: "s",
          label: "s",
          value: "s",
          stockInfo: {
            stockStatusCode: "OUT_OF_STOCK",
          },
        },
        {
          id: "m",
          label: "m",
          value: "m",
          stockInfo: {
            stockStatusCode: "IN_STOCK",
          },
        },
        {
          id: "l",
          label: "l",
          value: "l",
          stockInfo: {
            stockStatusCode: "IN_STOCK",
          },
        },
        {
          id: "xl",
          label: "xl",
          value: "xl",
          stockInfo: {
            stockStatusCode: "IN_STOCK",
          },
        },
      ],
    },
  } as Record<FieldName, Hinges>,
  images: [
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764033-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764033-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764033-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764033-3.jpg",
      alt: "",
      width: 1920,
      height: 2880,
      sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764699-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764699-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764699-2.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764699-3.jpg",
      alt: "",
      width: 1920,
      height: 2880,
      sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764036-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764036-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764036-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764036-3.jpg",
      alt: "",
      width: 1920,
      height: 2880,
      sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764040-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764040-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764040-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764040-3.jpg",
      alt: "",
      width: 1920,
      height: 2880,
      sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
    },
  ],
};

interface ProductDetail1Props {
  className?: string;
}

export default function ProductDetailPage({ className }: ProductDetail1Props) {
  return (
    <>
      <header className="flex w-full z-50 h-16 sticky top-0 bg-background shrink-0 items-center gap-2 border-b ">
        <div className="flex items-center gap-2 px-3 w-full">
          <SidebarTrigger />
          <div>
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
          <div className="flex justify-between flex-1">
            <div className="flex items-center gap-2">
              <p className="text-v5 text-sm">Inventory</p>{" "}
              <FaChevronRight className="text-v3" />
              <p className="font-medium text-sm text-v9">
                Sony WH-1000XM4 Headphones
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="text-v7 h-11 font-medium">
                <FaPen /> Edit
              </Button>
              <Button variant="outline" className="font-medium h-11">
                <FaPaperclip />
                Add Attachment
              </Button>
              <Button
                variant="destructive-outline"
                className="font-medium h-11"
              >
                <FaTrash /> Delete
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-6 overflow-y-auto bg-[#F8FAFC]">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
            {PRODUCT_DETAILS.name}
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
        <section className={cn("py-32", className)}>
          <div className="container">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
              <Card>
                <CardContent>
                  <ProductImages images={PRODUCT_DETAILS.images} />
                </CardContent>
              </Card>
              <ProductInfo />
            </div>
            <ProductTab />
          </div>
        </section>
      </div>
    </>
  );
}

function ProductInfo() {
  return (
    <Card className="space-y-4">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-v9 tracking-tight">
          Key Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-sm">Location</p>
          <div className="flex gap-2 items-center">
            <FaLocationDot className="text-primary" />
            <span className="text-v9 text-base">Living Room</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-sm">Lavels</p>
          <div className="flex gap-2 items-center">
            <Badge variant="default-lighter-rounded">Electronics</Badge>
            <Badge variant="purple-lighter-rounded">Audio</Badge>
            <Badge variant="orange-light-rounded">Electronics</Badge>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-sm">Quantity</p>
          <div className="flex gap-2 items-center">
            <span className="text-v9 text-base">1</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-sm">Purchase Price</p>
          <div className="flex gap-2 items-center">
            <span className="text-v9 font-semibold text-lg">$349.99</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-sm">Warranty</p>
          <div className="flex gap-2 items-center">
            <Badge variant="green-light-rounded">
              Active until March 15, 2026
            </Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2  text-left items-baseline">
        <p className="font-medium text-sm">Notes</p>
        <div className="flex gap-2 items-center">
          <span className="text-sm text-v6">
            Purchased from Best Buy with extended warranty. Includes carrying
            case, charging cable, and audio cable. Serial number: 1234567890.{" "}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}

const ProductImages = ({ images }: ProductImagesProps) => {
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
            key={`product-detail-1-image-${index}`}
          >
            <AspectRatio ratio={1} className="overflow-hidden rounded-lg">
              <Image
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
