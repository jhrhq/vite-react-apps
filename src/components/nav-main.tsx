"use client";

import type { IconType } from "react-icons/lib";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: IconType;
  }[];
}) {
  return (
    <SidebarGroup className="border-b border-[#E2E8F0]">
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              className="hover:cursor-pointer hover:text-primary h-12 text-[#334155]"
              tooltip={item.title}
            >
              {item.icon && <item.icon className="text-[18px]" />}
              <span className="hover:font-medium text-[#334155] font-normal">
                {item.title}
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
