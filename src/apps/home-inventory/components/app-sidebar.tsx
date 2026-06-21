/** biome-ignore-all lint/suspicious/noShadowRestrictedNames: false positive */

import { NavMain } from "@home-inventory/components/nav-main";
import { NavProjects } from "@home-inventory/components/nav-projects";
import { NavUser } from "@home-inventory/components/nav-user";
import { LogoIconSidebar } from "@home-inventory/components/svg/logo";
import { AppSidebarHeader } from "@home-inventory/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@home-inventory/components/ui/sidebar";
import type * as React from "react";
import { FaChartLine, FaGear, FaLocationDot, FaTags } from "react-icons/fa6";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Inventory",
      url: "#",
      icon: LogoIconSidebar,
      path: "/inventory/products",
    },
    {
      title: "Locations",
      url: "#",
      icon: FaLocationDot,
      path: "/inventory/location",
    },
    {
      title: "Labels",
      url: "#",
      icon: FaTags,
    },
    {
      title: "Reports",
      url: "#",
      icon: FaChartLine,
    },
  ],
  projects: [
    {
      name: "Settings",
      url: "#",
      icon: FaGear,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="border-b border-v2 py-3 group-data-[state=expanded]:py-3">
        <AppSidebarHeader />
      </SidebarHeader>

      <SidebarContent className="group-data-[state=expanded]:p-4 ">
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>

      <SidebarFooter className="group-data-[state=expanded]:p-4">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
