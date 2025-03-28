import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { menuItems } from "../menuItems";

export const MainMenu = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
      {menuItems.map((item) => (
        <div key={item.name} className="relative group">
          <Link
            {...(item.disabled ? { href: "#" } : { href: item.href })}
            className={
              "font-inter uppercase inline-flex items-center px-1 text-md font-semibold text-black"
            }
          >
            {item.name}
            {item.subItems && (
              <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            )}
          </Link>

          {isActive(item.href) ? (
            <span
              className={
                "absolute bottom-[-14px] left-0 h-[2px] w-full transition-all duration-400 bg-black"
              }
            />
          ) : (
            <span
              className={
                "absolute bottom-[-14px] left-0 w-0 h-[2px] group-hover:w-full transition-all duration-400 bg-black"
              }
            />
          )}

          {item.subItems && (
            <div className="absolute z-10 -ml-4 mt-1 hidden group-hover:block w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
