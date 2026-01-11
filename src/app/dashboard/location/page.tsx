/** biome-ignore-all lint/suspicious/noArrayIndexKey: false positive */
"use client";
import {
  FaBell,
  FaBook,
  FaChevronRight,
  FaCircleQuestion,
  FaHouse,
  FaMagnifyingGlass,
  FaPen,
  FaPlus,
  FaTrash,
  FaWindowRestore,
} from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
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

interface ProductDetail1Props {
  className?: string;
}

export default function LocationPage({ className }: ProductDetail1Props) {
  return (
    <>
      <header className="flex w-full z-50 h-16 sticky top-0 bg-background shrink-0 items-center gap-2 border-b ">
        <div className="flex items-center gap-2 px-3 w-full">
          <SidebarTrigger />
          <div>
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
          <div className="flex justify-between flex-1">
            <div className="flex items-center gap-4">
              <p className="text-v9 text-xl font-semibold">Locations</p>{" "}
              <p className="text-sm text-v5">
                Organize your items by location{" "}
              </p>
            </div>
            <div className="flex items-center gap-3 text-v5">
              <Button variant="ghost" className=" h-8.5 py-[6.75] px-2">
                <FaBell />
              </Button>
              <Button variant="ghost" className="h-8.5 py-[6.75] px-2">
                <FaCircleQuestion />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex  ">
        <SecondarySidebar />
        <section className={cn("bg-[#F8FAFC] flex-1 p-4", className)}>
          <div className="container space-y-6">
            <Card>
              <CardContent className="space-y-4">
                {/* Bookshelf card */}
                <div className="flex justify-between flex-1">
                  <div className="flex gap-4">
                    <div className="size-14 bg-teal-lighter rounded-2xl flex items-center justify-center">
                      <FaBook className="text-teal-light h-6 w-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-2xl text-v9">
                        Bookshelf
                      </p>
                      <div className="flex items-center gap-2 text-v5">
                        <FaHouse />
                        <span className=" text-sm">Home</span>
                        <FaChevronRight className="text-v4" />
                        <span className=" text-sm ">Living Room</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      className="text-v7 h-9.5 font-medium"
                    >
                      <FaPen /> Edit
                    </Button>
                    <Button
                      variant="default-lightest"
                      className="font-medium h-9.5"
                    >
                      <FaPlus />
                      Add Child
                    </Button>
                    <Button variant="destructive" className="font-medium h-9.5">
                      <FaTrash /> Delete
                    </Button>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold tex-sm text-v5">DESCRIPTION</p>
                  <p className="text-sm">
                    White wooden bookshelf in the living room containing books,
                    decorations, and collectibles. Located next to the window.
                  </p>
                </div>
                <div className="border-t pt-4 flex items-center justify-between gap-4">
                  <span className="inline-flex flex-col gap-1">
                    <span className="text-v5 text-xs font-semibold">ITEMS</span>
                    <span className="text-v9 font-semibold text-2xl">2</span>
                  </span>
                  <span className="inline-flex flex-col gap-1">
                    <span className="text-v5 text-xs font-semibold">
                      TOTAL VALUE
                    </span>
                    <span className="text-v9 font-semibold text-2xl">$245</span>
                  </span>
                  <span className="inline-flex flex-col gap-1">
                    <span className="text-v5 text-xs font-semibold">
                      CREATED
                    </span>
                    <span className="font-medium text-sm">Jan 15, 2024</span>
                  </span>
                </div>
              </CardContent>
            </Card>

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
                          <Badge
                            variant="green-light-rounded"
                            className="py-0.5 px-2"
                          >
                            Good
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
                          <Badge
                            variant="green-light-rounded"
                            className="py-0.5 px-2"
                          >
                            Good
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <Separator />
                <Button className="font-medium text-sm w-full h-10 text-primary bg-transparent hover:bg-primary-lightest rounded-none py-2.5">
                  {" "}
                  <FaPlus /> Add Item to this Location{" "}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}

function SecondarySidebar() {
  return (
    <div className="bg-white h-screen max-w-[384px] w-full border-r">
      <div className="p-4 border-b">
        <form>
          <Field className="gap-2">
            <InputGroup className="h-10.5">
              <InputGroupAddon>
                <FaMagnifyingGlass className="size-3.5 text-v4" />
              </InputGroupAddon>
              <InputGroupInput
                id="username"
                type="username"
                placeholder="Search items..."
              />
            </InputGroup>
          </Field>
        </form>
      </div>
      <div className="p-4 border-b">
        <Button className="font-medium text-sm h-11 w-full gap-2">
          <FaPlus /> New Location
        </Button>
      </div>
      <div className="p-4 space-y-1">
        <div className="py-2 px-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <FaChevronRight className="text-v4" />
            <FaHouse className="text-primary" />
            <span className="font-medium text-sm text-v9">Home</span>
          </div>
          <Badge className="py-1 px-2 rounded-full bg-v1 text-xs text-v5">
            12
          </Badge>
        </div>
        <div className="py-2 px-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 pl-5">
            <FaWindowRestore className="text-primary" />
            <span className="font-regular text-sm">Garage</span>
          </div>
          <Badge className="py-1 px-2 rounded-full bg-v1 text-xs text-v5">
            8
          </Badge>
        </div>
        <div className="py-2 px-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 pl-5">
            <FaWindowRestore className="text-primary" />
            <span className="font-regular text-sm">Garage</span>
          </div>
          <Badge className="py-1 px-2 rounded-full bg-v1 text-xs text-v5">
            25
          </Badge>
        </div>
      </div>
    </div>
  );
}
