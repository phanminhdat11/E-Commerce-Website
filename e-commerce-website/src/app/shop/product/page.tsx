"use client";

import { useState } from "react";
import { faMinus, faPlus, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import ButtonComponent from "@/components/ui/ButtonComponent";

export default function ProductDetailPage() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="space-y-4 pb-20 md:pb-8">
            <Breadcrumb
                items={[
                    {
                        href: "",
                        title: <HomeOutlined />,
                    },
                    {
                        title: "Shop",
                    },
                    {
                        title: "Product",
                    },
                    {
                        title: "Loa nghe nhac JBL 42 mm Smart Watches",
                    },
                ]}
            />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10">
                <div className="space-y-4">
                    <div className="flex aspect-square items-center justify-center rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                        <img
                            src="https://songlongmedia.com/media/product/3763_loa_jbl_go_4_black_songlongmedia__1_.jpg"
                            alt="JBL speaker"
                            className="h-full max-h-80 w-full object-contain"
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-2 sm:gap-3">
                        {[1, 2, 3, 4].map((item) => (
                            <button
                                type="button"
                                key={item}
                                className="flex aspect-square items-center justify-center rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition active:scale-[0.98]"
                            >
                                <img
                                    src="https://songlongmedia.com/media/product/3763_loa_jbl_go_4_black_songlongmedia__1_.jpg"
                                    alt="JBL thumbnail"
                                    className="h-full w-full object-contain"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-5 rounded-2xl bg-white p-5 shadow-sm sm:p-6 lg:p-8">
                    <div className="space-y-3">
                        <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl lg:text-3xl">
                            Loa nghe nhac JBL 42 mm Smart Watches
                        </h1>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                            <div className="text-yellow-400">★★★★★</div>
                            <span>4.9 / 5 rating</span>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-400 line-through">2,000,000 VND</p>
                        <p className="text-2xl font-bold text-orange-500 sm:text-3xl">1,000,000 VND</p>
                    </div>

                    <p className="text-sm leading-7 text-gray-500 sm:text-base">
                        Loa JBL Go 4 la mau loa bluetooth di dong so huu thiet ke nho gon an tuong voi nhieu mau sac khac nhau. JBL Go 4 la phien ban nang cap khong chi ve thiet ke ma con chat luong am thanh vuot bac cung kha nang chong nuoc, ket noi bluetooth 5.3.
                    </p>

                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        Ma san pham: FW511948218
                    </p>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-600">Chon mau</label>
                        <select className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 outline-none">
                            <option>White</option>
                            <option>Black</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-sm font-medium text-slate-700">So luong</span>

                        <div className="inline-flex items-center self-start rounded-full border border-slate-200 bg-slate-50 p-1">
                            <button
                                type="button"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition active:scale-95"
                                aria-label="Decrease quantity"
                            >
                                <FontAwesomeIcon icon={faMinus} />
                            </button>

                            <span className="min-w-12 px-3 text-center text-base font-semibold text-slate-900">
                                {quantity}
                            </span>

                            <button
                                type="button"
                                onClick={() => setQuantity(quantity + 1)}
                                className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition active:scale-95"
                                aria-label="Increase quantity"
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                        <ButtonComponent
                            label="Them vao gio"
                            variant="outline"
                            iconStart={<FontAwesomeIcon icon={faCartShopping} />}
                            className="w-full rounded-full"
                        />
                        <ButtonComponent
                            label="Mua ngay"
                            variant="primary"
                            iconStart={<FontAwesomeIcon icon={faCartShopping} />}
                            className="w-full rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
