import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@home-inventory/components/ui/sidebar";
import { cn } from "@home-inventory/lib/utils";
import type { IconType } from "react-icons/lib";
import { NavLink, useLocation } from "react-router";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: IconType;
    path: string;
  }[];
}) {
  const location = useLocation();
  return (
    <SidebarGroup className="border-b border-v2">
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton className="text-v7" tooltip={item.title} asChild>
              <NavLink
                to={item.path || "#"}
                className={cn(
                  location.pathname === item.path &&
                    "font-medium bg-primary-lighter text-primary",
                )}
              >
                {item.icon && <item.icon className="text-lg" />}
                <span className="text-v7 ">{item.title}</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
