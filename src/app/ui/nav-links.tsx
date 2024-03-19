"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import {
  ClipboardDocumentListIcon,
  PresentationChartLineIcon,
  CircleStackIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

export default function NavLinks() {
  const links = [
    {
      name: "Transactions",
      href: "/transactions/daily",
      icon: ClipboardDocumentListIcon,
    },
    {
      name: "Stats",
      href: "/stats",
      icon: PresentationChartLineIcon,
    },
    { name: "Account", href: "/account", icon: CircleStackIcon },
    { name: "More", href: "/more", icon: EllipsisHorizontalIcon },
  ];

  const pathname = usePathname();
  return (
    <div className="mt-3 pt-2 border-t-2 border-gray-200">
      <ul className="text-gray-500 font-semibold flex gap-1">
        {links.map((link) => {
          const LinkIcon = link.icon;
          const rootPathLink = "/" + link.href.split("/")[1];
          return (
            <li
              key={link.href}
              className={clsx("flex-1", {
                "text-orange-600 transition-all duration-300":
                  pathname.startsWith(rootPathLink),
              })}
            >
              <Link
                href={link.href}
                className={clsx(
                  "flex flex-col flex-1 justify-center items-center gap-1",
                  {
                    "hover:text-gray-950 transition-all":
                      !pathname.startsWith(rootPathLink),
                  }
                )}
              >
                <LinkIcon className="w-6" />
                <div className="text-sm">{link.name}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
