"use client";

import ItemCardComponent from "@/components/ui/ItemCartComponent";
import { Breadcrumb, Button, Dropdown } from "antd";
import { DownOutlined, HomeOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faXmark } from "@fortawesome/free-solid-svg-icons";
import SearchBoxComponent from "@/components/ui/SearchBoxComponent";
import { useEffect, useState } from "react";
import ButtonComponent from "@/components/ui/ButtonComponent";
import {
    clearFilters,
    fetchProduct,
    setFilters,
    setSearchKeyword,
    setSelectedProductID,


} from "@/lib/redux/products/productSice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { selectFilteredProduct } from "@/lib/redux/products/productSelector";
import { useHandleClickProduct } from "@/utils/slugify";
import { useGetPathName } from "@/utils/getPathname";
import FilterComponent from "@/components/ui/FilterComponent";



export default function ShopPage() {
    const [openFilter, setOpenFilter] = useState(false);
    const title = useGetPathName();
    const { handleClickProduct } = useHandleClickProduct();
    const dispatch = useAppDispatch();
    const productState = useAppSelector((state) => state.products);
    const products = useAppSelector(selectFilteredProduct);

    useEffect(() => {
        dispatch(fetchProduct());

    }, [dispatch]);

    const dataOption = [
        {
            label: "1.000.000 VND", value: 1000000
        },
        {
            label: "2.000.000 VND", value: 2000000
        },
        {
            label: "3.000.000 VND", value: 3000000
        }
    ]
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    const filteredMinOptions = dataOption.filter(
        (item) => !maxPrice || item.value <= maxPrice
    );
    const filteredMaxOptions = dataOption.filter(
        (item) => !minPrice || item.value >= minPrice
    );

    if (productState.loading) return <div className="flex items-center justify-center">
        <p>Loading...</p>
    </div>;
    if (productState.error) return <p>Error: {productState.error}</p>;
    return (
        <>
            <div className="relative left-1/2 w-[calc(100vw-2rem)] max-w-[1720px] -translate-x-1/2 space-y-6 pb-20 md:w-[calc(100vw-8rem)] md:pb-6 lg:w-[calc(100vw-21rem)] 2xl:w-[calc(100vw-23rem)]">
                <div className="sticky top-20 z-30 bg-white backdrop-blur-md border-b border-slate-200 pb-6">
                    <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:pt-4">
                        <div className="w-1/3">
                            <Breadcrumb
                                items={[
                                    {
                                        href: "",
                                        title: <HomeOutlined />,
                                    },
                                    {
                                        title: title,
                                    },
                                ]}
                            />
                        </div>
                        <div className="flex flex-col w-full gap-3 sm:flex-row sm:items-center">

                            <div className="flex-1">
                                <SearchBoxComponent
                                    placeholder="Tìm kiếm sản phẩm"
                                    onSearch={(value) => dispatch(setSearchKeyword(value))}
                                    dataSearch={productState.listDataProduct}
                                />
                            </div>

                            <div className="shrink-0">
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
                                    className="rounded-2xl shadow-sm"
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5 2xl:grid-cols-5 2xl:gap-6">

                    {
                        products.map((product: any, index: any) => (
                            <ItemCardComponent
                                key={index}
                                product={product}
                                onClick={() => handleClickProduct(product)}
                            />
                        ))
                    }
                </div>
            </div>
            {openFilter && (
                <>
                    <button
                        type="button"
                        className="fixed inset-0 z-40 bg-black/20 md:bg-transparent"
                        onClick={() => setOpenFilter(false)}
                        aria-label="Close filters"
                    />
                    <div className="fixed inset-x-4 bottom-24 z-50 md:absolute md:inset-x-auto md:bottom-auto md:right-0 md:top-20 xl:right-2">
                        <FilterComponent
                            onApply={(filters) => dispatch(setFilters(filters))}
                            onClear={() => dispatch(clearFilters())}
                            onClose={() => setOpenFilter(false)}
                        />
                    </div>
                </>
            )}
        </>
    );
}