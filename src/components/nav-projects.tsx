"use client";

import type { IconType } from "react-icons/lib";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavProjects({
  projects,
}: {
  projects: {
    name: string;
    url: string;
    icon: IconType;
  }[];
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              asChild
              className="hover:cursor-pointer hover:text-primary h-12 text-[#334155]"
            >
              <a href={item.url}>
                <item.icon />
                <span className="hover:font-medium text-[#334155] font-normal">
                  {item.name}
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        {/*  <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <MoreHorizontal className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem> */}
      </SidebarMenu>
    </SidebarGroup>
  );
}
