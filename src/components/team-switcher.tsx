"use client";

import Logo, { LogoIconSidebar } from "@/components/svg/logo";
import {
  SidebarBrandLogo,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function TeamSwitcher() {
  return (
    <SidebarMenu className=" group-data-[collapsible=icon]:p-0">
      <SidebarMenuItem>
        <SidebarBrandLogo
          size="lg"
          className="data-[state=open]:bg-primary data-[state=open]:text-sidebar-accent-foreground bg-primary-foreground gap-3 h-auto w-full flex items-center justify-center group-data-[collapsible=icon]:p-0"
        >
          <div>
            <Logo className="" />
            <div className="grid text-left text-sm leading-tight ">
              <span className=" font-bold text-[18px] mb-3">
                Home Inventory
              </span>
              <span className="truncate text-xs">Manage your items</span>
            </div>
          </div>
        </SidebarBrandLogo>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export function AppSidebarHeader() {
  return (
    <SidebarHeader
      className="
        flex items-center
        group-data-[state=expanded]:px-4
        group-data-[state=expanded]:py-3
      "
    >
      <div className="flex items-center gap-3 overflow-hidden">
        {/* Logo */}
        <div className="shrink-0">
          <Logo className="p-2 group-data-[state=collapsed]:p-2">
            <LogoIconSidebar className="size-5 text-white" />
          </Logo>
        </div>

        {/* Text (hidden when collapsed) */}
        <div className="flex flex-col leading-tight group-data-[state=collapsed]:hidden">
          <span className="text-sm font-semibold text-slate-900">
            Home Inventory
          </span>
          <span className="text-xs text-slate-500">Manage your items</span>
        </div>
      </div>
    </SidebarHeader>
  );
}
