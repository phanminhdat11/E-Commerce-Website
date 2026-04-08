"use client";

import { useState } from "react";
import { faMinus, faPlus, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export default function ProductDetailPage() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div>
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
                        title: " Loa nghe nhạc JBL 42 mm Smart Watches",
                    },
                ]}
            />

            <div className="p-4  min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    <div className="space-y-4">

                        <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center">
                            <img
                                src="https://songlongmedia.com/media/product/3763_loa_jbl_go_4_black_songlongmedia__1_.jpg"
                                alt=""
                                className="w-72 object-contain"
                            />
                        </div>
                        <div className="flex gap-3">
                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="w-16 h-16 shadow-lg rounded-lg flex items-center justify-center cursor-pointer hover:border-orange-500"
                                >
                                    <img
                                        src="https://songlongmedia.com/media/product/3763_loa_jbl_go_4_black_songlongmedia__1_.jpg"
                                        alt=""
                                        className="w-10"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-xl  p-6 space-y-5 shadow-sm">

                        <h1 className="text-xl font-semibold">
                            Loa nghe nhạc JBL 42 mm Smart Watches
                        </h1>

                        <div className="flex items-center justify-between text-sm">
                            <div className="text-yellow-400">★★★★★</div>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400 line-through">2,000,000 VND</p>
                            <p className="text-3xl font-bold text-orange-500">1,000,000 VND</p>
                        </div>

                        <p className="text-sm text-gray-500">
                            Loa JBL Go 4 là mẫu loa bluetooth di động sở hữu thiết kế nhỏ gọn ấn tượng với nhiều màu sắc khác nhau. JBL Go 4 là phiên bản nâng cấp không chỉ về thiết kế mà còn chất lượng âm thanh vượt bậc cùng khả năng chống nước, kết nối bluetooth 5.3
                        </p>

                        <p className="text-xs text-gray-400">Mã sản phẩm: FW511948218</p>

                        <div>
                            <label className="text-sm text-gray-600">Chọn màu</label>
                            <select className="w-full mt-1 rounded-lg px-3 py-2">
                                <option>White</option>
                                <option>Black</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-sm">Số lượng</span>

                            <div className="flex items-center  rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-3 py-1 hover:bg-gray-100"
                                >
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>

                                <span className="px-4">{quantity}</span>

                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-3 py-1 hover:bg-gray-100"
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>

                        <div className="flex space-x-6">
                            <button className="w-full flex items-center justify-center gap-2 shadow-lg text-gray-400 py-3 rounded-full hover:bg-green-600 hover:text-white transition">
                                <FontAwesomeIcon icon={faCartShopping} />
                                Thêm vào giỏ
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition">
                                <FontAwesomeIcon icon={faCartShopping} />
                                Mua ngay
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
}