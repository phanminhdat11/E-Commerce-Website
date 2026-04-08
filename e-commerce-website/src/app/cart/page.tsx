"use client";

import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export default function CartPage() {
    return (
        <div className=" pb-32 space-y-6">
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

            <div className="space-y-4">

                <div className="flex gap-4 p-4 rounded-xl bg-white shadow-sm mt-2">

                    <img
                        className="h-28 w-28 object-cover rounded-lg"
                        src="https://songlongmedia.com/media/product/3763_loa_jbl_go_4_black_songlongmedia__1_.jpg"
                        alt=""
                    />

       
                    <div className="flex-1 space-y-2">
                        <h3 className="font-semibold text-lg">
                            Zenbook Pro 14 Duo OLED
                        </h3>

                        <p className="text-sm text-gray-500 w-2/3 line-clamp-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis saepe magnam. Explicabo quod nihil voluptates doloremque illum obcaecati dolor sequi iste saepe praesentium illo maxime quas, recusandae a libero.
                        </p>

                        <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-orange-500">
                                1,000,000 VND
                            </span>
                            <span className="text-sm text-gray-400 line-through">
                                2,000,000 VND
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-between">

                        <div className="flex items-center  rounded-lg overflow-hidden">
                            <button className="px-3 py-1 hover:bg-gray-100">
                                <FontAwesomeIcon icon={faMinus} />
                            </button>

                            <span className="px-4">2</span>

                            <button className="px-3 py-1 hover:bg-gray-100">
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>

                        <button className="text-red-500 hover:text-red-600">
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
        <div className="fixed bottom-4 left-0 md:left-64 right-2 bg-white border border-gray-100 shadow-xl px-6 py-4 rounded-lg">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Left */}
                <div className="text-sm space-y-1 text-gray-600">
                    <p>
                        Subtotal: <span className="font-medium">1,000,000 VND</span>
                    </p>
                    <p>
                        Tax: <span className="font-medium">1,000,000 VND</span>
                    </p>
                    <p className="text-lg font-bold text-black">
                        Total: <span className="text-orange-500">2,000,000 VND</span>
                    </p>
                </div>

                {/* Right */}
                <button className="w-full md:w-auto px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                    Checkout
                </button>

            </div>
        </div>
    );
}