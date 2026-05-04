"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faEnvelope,
    faMessage,
    faShop,
    faSun,
} from "@fortawesome/free-solid-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons/faCartArrowDown";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import IconButton from "../ui/IconButton";
import { useAppSelector } from "@/lib/redux/hook";

const avatarUrl =
    "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80";

export default function Navbar() {
    const router = useRouter();

    const redirectShopPage = () => {
        router.push("/shop");
    };
    const redirectCartPage = () => {
        router.push('/cart')
    }

    const { items, loading } = useAppSelector(
        (state: any) => state.cart
    );




    return (
        <nav className="h-16 md:h-20">
            <div className="flex h-full items-center justify-between gap-3 px-4 sm:px-5 md:px-6 lg:px-8">
                <button
                    type="button"
                    onClick={redirectShopPage}
                    className="flex min-w-0 items-center gap-3 rounded-full px-1 py-1 text-left transition hover:opacity-90"
                    aria-label="Go to shop"
                >
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-orange-100 text-orange-500">
                        <FontAwesomeIcon icon={faShop} className="text-lg" />
                    </span>
                    <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-[0.7rem]">
                            Storefront
                        </span>
                        <span className="block truncate text-base font-bold text-orange-500 sm:text-lg md:text-xl">
                            Ecommerce Shop
                        </span>
                    </span>
                </button>
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <IconButton value={items.length} onClick={redirectCartPage} variant="secondary" ariaLabel={"Giỏ hàng"} icon={faCartArrowDown} />
                    <IconButton value={0} variant="outline" ariaLabel={"Thông báo"} icon={faBell} />
                    <IconButton value={0} variant="danger" ariaLabel={"Tin nhắn"} icon={faMessage} />
                    <Link
                        href="/profile"
                        className="flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-full border-2 border-orange-200 bg-white p-1 shadow-sm transition active:scale-95 md:h-11 md:w-11"
                        aria-label="Open profile"
                    >
                        <img
                            src={avatarUrl}
                            alt="Profile avatar"
                            className="h-full w-full rounded-full object-cover"
                        />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
