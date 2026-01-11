import { FaBell, FaCircleQuestion } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function LocationMainHeader() {
  return (
    <header className="flex w-full z-50 h-16 sticky top-0 bg-background shrink-0 items-center gap-2 border-b ">
      <div className="flex items-center gap-2 px-3 w-full">
        <SidebarTrigger />
        <div>
          <Separator orientation="vertical" className="mr-2 h-4" />
        </div>
        <div className="flex justify-between flex-1">
          <LocationHeaderBreadCrumb />
          <LocationMainHeaderAction />
        </div>
      </div>
    </header>
  );
}

export function LocationHeaderBreadCrumb() {
  return (
    <div className="flex items-center gap-4">
      <p className="text-v9 text-xl font-semibold">Locations</p>{" "}
      <p className="text-sm text-v5">Organize your items by location </p>
    </div>
  );
}

function LocationMainHeaderAction() {
  return (
    <div className="flex items-center gap-3 text-v5">
      <Button variant="ghost" className=" h-8.5 py-[6.75] px-2">
        <FaBell />
      </Button>
      <Button variant="ghost" className="h-8.5 py-[6.75] px-2">
        <FaCircleQuestion />
      </Button>
    </div>
  );
}
