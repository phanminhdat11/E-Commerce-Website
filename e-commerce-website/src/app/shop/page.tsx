"use client";

import ItemCardComponent from "@/components/ui/ItemCartComponent";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faXmark } from "@fortawesome/free-solid-svg-icons";
import SearchBoxComponent from "@/components/ui/SearchBoxComponent";
import { useEffect, useState } from "react";
import FilterComponent from "@/components/ui/FilterComponent";
import ButtonComponent from "@/components/ui/ButtonComponent";
import {
    fetchProduct,
    setSearchKeyword,
} from "@/lib/redux/products/productSice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { selectFilteredProduct } from "@/lib/redux/products/productSelector";

export default function ShopPage() {
    const [openFilter, setOpenFilter] = useState(false);

    const dispatch = useAppDispatch();
    const productState = useAppSelector((state) => state.products);
    const products = useAppSelector(selectFilteredProduct);

    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    return (
        <>
            <div className="relative left-1/2 w-[calc(100vw-2rem)] max-w-[1720px] -translate-x-1/2 space-y-6 pb-20 md:w-[calc(100vw-8rem)] md:pb-6 lg:w-[calc(100vw-21rem)] 2xl:w-[calc(100vw-23rem)]">

                {/* 🔥 Sticky Header */}
                <div className="sticky top-20 z-30 bg-white backdrop-blur-md border-b border-slate-200 pb-6">
                    <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between pt-4">

                        <Breadcrumb
                            items={[
                                {
                                    href: "",
                                    title: <HomeOutlined />,
                                },
                                {
                                    title: "Shop",
                                },
                            ]}
                        />

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center xl:min-w-[28rem] xl:justify-end">

                            <div className="sm:flex-1 xl:w-[600px]">
                                <SearchBoxComponent
                                    placeholder="Tìm kiếm sản phẩm"
                                    onSearch={(value) => dispatch(setSearchKeyword(value))}
                                    dataSearch={productState.listDataProduct}
                                />
                            </div>
                            <ButtonComponent
                                type="button"
                                onClick={() => setOpenFilter(!openFilter)}
                                variant="outline"
                                iconStart={
                                    <FontAwesomeIcon
                                        icon={openFilter ? faXmark : faFilter}
                                        className="text-base"
                                    />
                                }
                                label={openFilter ? "Đóng bộ lọc" : "Bộ lọc"}
                                className="sm:w-auto rounded-2xl shadow-sm"
                                aria-expanded={openFilter}
                            />
                        </div>
                    </div>
                </div>

                {/* 🔥 Product Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5 2xl:grid-cols-5 2xl:gap-6">
                    {products.map((product, index) => (
                        <ItemCardComponent key={index} product={product} />
                    ))}
                </div>
            </div>

            {/* 🔥 Filter Overlay */}
            {openFilter && (
                <>
                    <button
                        type="button"
                        className="fixed inset-0 z-40 bg-black/20 md:bg-transparent"
                        onClick={() => setOpenFilter(false)}
                        aria-label="Close filters"
                    />

                    <div className="fixed inset-x-4 bottom-24 z-50 md:absolute md:inset-x-auto md:bottom-auto md:right-0 md:top-20 xl:right-2">
                        <FilterComponent />
                    </div>
                </>
            )}
        </>
    );
}