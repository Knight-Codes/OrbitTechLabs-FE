import { usePathname } from "next/navigation";
import { Menu, ChevronRight } from "lucide-react";
import { TopDrawer } from "@/components/modules/TopDrawer";
import { menuItems } from "../menuItems";

export const HamburgerMenu = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <div className="sm:hidden">
      <TopDrawer>
        <TopDrawer.Trigger>
          <Menu />
        </TopDrawer.Trigger>
        <TopDrawer.Content>
          <div className="flex flex-col gap-2 items-start">
            {menuItems.map((item) => (
              <a
                key={item.name}
                {...(item.disabled ? { href: "#" } : { href: item.href })}
                className={`inline-flex items-center px-1 pt-1 text-md font-semibold text-gray-700 hover:text-gray-900 ${
                  item.disabled ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                {isActive(item.href) && (
                  <>
                    <ChevronRight className="left-0 h-5 w-5 absolute ml-1" />
                    &nbsp;
                  </>
                )}
                {item.name}
              </a>
            ))}
          </div>
        </TopDrawer.Content>
      </TopDrawer>
    </div>
  );
};
