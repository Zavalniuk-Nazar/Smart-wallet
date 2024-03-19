"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export default function NavLinks() {
  const links = [
    { name: "Daily", href: "/transactions/daily" },
    { name: "Calendar", href: "/transactions/calendar" },
    { name: "Monthly", href: "/transactions/monthly" },
    { name: "Total", href: "/transactions/total" },
    { name: "Note", href: "/transactions/note" },
  ];

  const pathname = usePathname();
  return (
    <ul className="text-gray-500 font-semibold flex border-b border-b-gray-200">
      {links.map((link) => {
        return (
          <li
            key={link.href}
            className={clsx(
              "grow text-center",
              {
                "text-gray-950 border-b-4 border-orange-600 transition-all duration-500":
                  pathname === link.href,
              },
              {
                "border-b-4 border-transparent": pathname !== link.href,
              }
            )}
          >
            <Link
              href={link.href}
              className="p-1 block hover:text-gray-950 w-full transition-all"
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
