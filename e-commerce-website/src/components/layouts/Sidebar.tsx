"use client";

import {
  faBars,
  faCartArrowDown,
  faShop,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const menus = [
    { name: "Shop", href: "/shop", icon: faShop },
    { name: "Cart", href: "/cart", icon: faCartArrowDown },
    { name: "Profile", href: "/profile", icon: faUser },
  ];

  return (
    <>
      <aside
        className={`fixed left-0 top-16 z-40 hidden h-[calc(100vh-4rem)]  border-slate-200 bg-white/95 px-3 py-4 backdrop-blur transition-all duration-300 md:block md:top-20 md:h-[calc(100vh-5rem)] ${
          collapsed ? "md:w-20" : "md:w-64"
        }`}
      >
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 p-2 shadow-sm">
          <div className="flex items-center justify-between gap-3 px-3 py-3">
            {!collapsed && (
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Menu
              </span>
            )}

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700"
              onClick={() => setCollapsed(!collapsed)}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          <ul className="mt-2 flex-1 space-y-2">
            {menus.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-black text-white shadow-sm"
                        : "text-slate-700 hover:bg-white"
                    } ${collapsed ? "justify-center" : ""}`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-base" />

                    {!collapsed && <span className="truncate">{item.name}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2 backdrop-blur md:hidden">
        <ul className="mx-auto flex max-w-md items-center justify-around gap-2">
          {menus.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.name} className="flex-1">
                <Link
                  href={item.href}
                  className={`flex flex-col items-center justify-center gap-1 rounded-2xl px-3 py-2 text-xs font-medium transition ${
                    isActive ? "bg-orange-500 text-white" : "text-slate-600"
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-sm" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
