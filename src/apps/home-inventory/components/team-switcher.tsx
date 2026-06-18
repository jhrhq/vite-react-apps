import Logo, { LogoIconSidebar } from "@home-inventory/components/svg/logo";
import { SidebarHeader } from "@home-inventory/components/ui/sidebar";

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
          <span className="text-lg font-bold text-v9">Home Inventory</span>
          <span className="text-xs text-v5">Manage your items</span>
        </div>
      </div>
    </SidebarHeader>
  );
}
