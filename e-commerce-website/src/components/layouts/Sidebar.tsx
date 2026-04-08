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
        <aside
            className={`fixed top-20 left-0 z-40 h-[calc(100vh-80px)] py-4 px-4 transition-all duration-300
      ${collapsed ? "w-20" : "w-64"}`}
        >
            <div className="h-full overflow-y-auto rounded-xl border border-gray-200 shadow-sm px-2">

                {/* Header */}
                <div className="flex items-center justify-between px-3 py-3">
                    {!collapsed && (
                        <span className="text-gray-700 font-semibold">Menu</span>
                    )}

                    <FontAwesomeIcon
                        icon={faBars}
                        className="cursor-pointer"
                        onClick={() => setCollapsed(!collapsed)}
                    />
                </div>

                <ul className="space-y-2 mt-2">

                    {menus.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-3 py-3 rounded-lg transition
                  
                  ${isActive ? "bg-black text-white" : "hover:bg-gray-100"}
                  
                  ${collapsed ? "justify-center" : ""}
                  `}
                                >
                                    <FontAwesomeIcon icon={item.icon} />

                                    {!collapsed && (
                                        <span className="whitespace-nowrap">
                                            {item.name}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        );
                    })}

                </ul>
            </div>
        </aside>
    );
}