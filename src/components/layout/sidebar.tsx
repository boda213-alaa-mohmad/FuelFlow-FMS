"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Control Room",
    path: "/dashboard",
    icon: "/icons/control-room.png",
  },
  {
    name: "Dashboard",
    path: "/dashboard/statistics",
    icon: "/icons/dashboard.png",
  },
  {
    name: "Elements",
    path: "/dashboard/elements",
    icon: "/icons/element.png",
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: "/icons/settings.png",
  },
  {
    name: "Notifications",
    path: "/dashboard/notifications",
    icon: "/icons/notifications.png",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[120px] h-screen bg-[#FF7A59] flex flex-col items-center justify-between rounded-tr-[40px] py-8 shadow-lg">
      <div className="cursor-pointer mb-4">
        <Image
          src="/icons/PMS.png"
          alt="main icon"
          width={52}
          height={52}
          priority
        />
      </div>

      <div className="flex flex-col items-center gap-y-4 w-full px-4">
        {navItems.map((item, index) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={index}
              href={item.path}
              className={`flex items-center justify-center w-16 h-16 transition-all duration-200 rounded-2xl ${
                isActive
                  ? "bg-white shadow-md text-[#FF7A59]"
                  : "hover:bg-white/10 text-white"
              }`}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={32}
                height={32}
                className={`transition-transform duration-200 ${
                  isActive ? "scale-105" : "opacity-90 hover:opacity-100"
                }`}
              />
            </Link>
          );
        })}
      </div>

      <div className="cursor-pointer p-3 hover:bg-white/10 rounded-2xl transition-all">
        <Image
          src="/icons/logout.png"
          alt="logout icon"
          width={32}
          height={32}
        />
      </div>
    </aside>
  );
}
