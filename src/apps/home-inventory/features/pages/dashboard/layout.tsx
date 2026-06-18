import { AppSidebar } from "@home-inventory/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@home-inventory/components/ui/sidebar";
import { Outlet } from "react-router";
export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <section>
          <Outlet />
        </section>
      </SidebarInset>
    </SidebarProvider>
  );
}
