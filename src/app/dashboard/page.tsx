import { FaDownload, FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import { AppSidebar } from "@/components/app-sidebar";
import { ComponentExample } from "@/components/component-example";
import DashboardSecondaryHeader from "@/components/dashboard-secondary-header";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex w-full z-50 h-16 sticky top-0 bg-background shrink-0 items-center gap-2 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-2 px-3 w-full">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex justify-between flex-1">
              <div className="flex items-center gap-4">
                <p className="font-bold text-2xl text-[#0F172A]">Inventory</p>

                <form>
                  <Field className="gap-2">
                    <InputGroup className="border border-[#CBD5E1] h-12.5">
                      <InputGroupAddon>
                        <FaMagnifyingGlass className="size-3.5 text-[#94A3B8]" />
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

              {/* <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
              <div className="flex items-center gap-3">
                <Button variant="outline" className="text-[#334155 font-medium">
                  <FaDownload /> Export
                </Button>
                <Button className="font-medium">
                  <FaPlus /> Add Item
                </Button>
              </div>
            </div>
          </div>
        </header>
        <DashboardSecondaryHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 overflow-y-auto bg-[#F8FAFC]">
          <ComponentExample />
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
