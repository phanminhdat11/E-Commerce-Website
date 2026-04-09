"use client";

import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import ButtonComponent from "@/components/ui/ButtonComponent";

export default function CartPage() {
    return (
        <div className="relative left-1/2 w-[calc(100vw-2rem)] max-w-[1720px] -translate-x-1/2 space-y-6 pb-36 md:w-[calc(100vw-8rem)] md:pb-32 lg:w-[calc(100vw-21rem)] 2xl:w-[calc(100vw-23rem)]">
            <Breadcrumb
                items={[
                    {
                        href: "",
                        title: <HomeOutlined />,
                    },
                    {
                        title: "Cart",
                    },
                ]}
            />

            <div className="space-y-4 mt-4">
                <div className="grid gap-4 rounded-2xl bg-white p-4 shadow-sm sm:p-5 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start xl:gap-6">
                    <div className="flex flex-col gap-4 sm:flex-row xl:min-w-0">
                        <img
                            className="h-28 w-full rounded-xl object-cover sm:h-32 sm:w-32 xl:h-36 xl:w-36"
                            src="https://songlongmedia.com/media/product/3763_loa_jbl_go_4_black_songlongmedia__1_.jpg"
                            alt="Cart product"
                        />

                        <div className="min-w-0 flex-1 space-y-3">
                            <h3 className="text-lg font-semibold text-slate-900 xl:text-xl">Zenbook Pro 14 Duo OLED</h3>

                            <p className="text-sm leading-6 text-gray-500 2xl:max-w-4xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis saepe magnam. Explicabo quod nihil voluptates doloremque illum obcaecati dolor sequi iste saepe praesentium illo maxime quas, recusandae a libero.
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                <span className="text-lg font-bold text-orange-500 xl:text-xl">1,000,000 VND</span>
                                <span className="text-sm text-gray-400 line-through">2,000,000 VND</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 xl:min-w-[10rem] xl:flex-col xl:items-end">
                        <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 p-1">
                            <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700" aria-label="Decrease quantity">
                                <FontAwesomeIcon icon={faMinus} />
                            </button>

                            <span className="min-w-12 px-3 text-center font-semibold text-slate-900">2</span>

                            <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700" aria-label="Increase quantity">
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>

                        <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-red-100 text-red-500 transition active:scale-95" aria-label="Remove item">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            </div>

            <CheckoutBar />
        </div>
    );
}

function CheckoutBar() {
    return (
        <div className="fixed bottom-20 left-1/2 z-30 w-[calc(100vw-2rem)] max-w-[1720px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-xl md:bottom-6 md:w-[calc(100vw-8rem)] lg:w-[calc(100vw-21rem)] lg:px-6 2xl:w-[calc(100vw-23rem)]">
            <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1 text-sm text-gray-600 xl:text-base">
                    <p>
                        Subtotal: <span className="font-medium">1,000,000 VND</span>
                    </p>
                    <p>
                        Tax: <span className="font-medium">1,000,000 VND</span>
                    </p>
                    <p className="text-lg font-bold text-black xl:text-xl">
                        Total: <span className="text-orange-500">2,000,000 VND</span>
                    </p>
                </div>

                <div>
                    <ButtonComponent
                        label="Checkout"
                        variant="secondary"
                        className="w-full md:min-w-44 xl:min-w-48"
                    />
                </div>
            </div>
        </div>
    );
}
