"use client";

import { useEffect, useState } from "react";
import { faMinus, faPlus, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import ButtonComponent from "@/components/ui/ButtonComponent";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { fetchProduct } from "@/lib/redux/products/productSice";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useAppDispatch();
    const params = useParams();
    const slugArray = params.slug as string[];
    const id = slugArray?.[1];
    const hanldeConvertPriceToVND = (price: number) => {
        return new Intl.NumberFormat("vi-VN").format(price) + " VND"
    }
    const products = useAppSelector(
        (state) => state.products.listDataProduct
    );
    const product = products.find((p) => String(p.id) === String(id));

    useEffect(() => {
        if (!products.length) {
            dispatch(fetchProduct());
        }
    }, [dispatch, products.length]);

    if (!product) {
        return <div className="p-6">Loading product...</div>;
    }
    // 

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
                        title: product.name,
                    },
                ]}
            />

            <div className="grid grid-cols-1 gap-6 mt-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10">


                <div className="space-y-4">
                    <div className="flex aspect-square items-center justify-center rounded-2xl bg-white p-6 shadow-xl sm:p-8">
                        <img
                            src={product.image ?? "/placeholder.png"}
                            alt={product.name}
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
                                    src= {product.image}
                                    alt="thumbnail"
                                    className="h-full w-full object-contain"
                                />
                            </button>
                        ))}
                    </div>
                </div>


                <div className="space-y-5 rounded-2xl bg-white p-5 shadow-sm sm:p-6 lg:p-8">
                    <div className="space-y-3">
                        <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl lg:text-3xl">
                            {product.name}
                        </h1>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                            <div className="text-yellow-400">★★★★★</div>
                            <span>4.9 / 5 rating</span>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-400 line-through">
                            {
                                hanldeConvertPriceToVND(product.finalPrice ?? 0) != hanldeConvertPriceToVND(product.price ?? 0)
                                    ? hanldeConvertPriceToVND(product.price ?? 0) : ''
                            }
                        </p>
                        <p className="text-2xl font-bold text-orange-500 sm:text-3xl">
                            {hanldeConvertPriceToVND(product.finalPrice)}
                        </p>
                    </div>

                    <p className="text-sm leading-7 text-gray-500 sm:text-base">
                        Mô tả sản phẩm...
                    </p>

                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        Mã sản phẩm: {product.sku}
                    </p>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-600">
                            Chọn màu
                        </label>
                        <select className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 outline-none">
                            <option>White</option>
                            <option>Black</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-sm font-medium text-slate-700">
                            Số lượng
                        </span>

                        <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 p-1">
                            <button
                                onClick={() =>
                                    setQuantity(Math.max(1, quantity - 1))
                                }
                                className="h-10 w-10 flex items-center justify-center"
                            >
                                <FontAwesomeIcon icon={faMinus} />
                            </button>

                            <span className="px-3">{quantity}</span>

                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="h-10 w-10 flex items-center justify-center"
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <ButtonComponent
                            label="Thêm vào giỏ"
                            variant="outline"
                            iconStart={<FontAwesomeIcon icon={faCartShopping} />}
                            className="w-full"
                        />
                        <ButtonComponent
                            label="Mua ngay"
                            variant="primary"
                            iconStart={<FontAwesomeIcon icon={faCartShopping} />}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}