"use client";

import { useEffect, useState } from "react";
import ButtonComponent from "@/components/ui/ButtonComponent";
import DropDownComponent from "./DropdownOption";
import { useProductFilterPrice } from "@/hook/pruducts/filters/useProductFilterPrice";


type Props = {
    onApply: (filters: { minPrice: number | null; maxPrice: number | null }) => void;
    onClear: () => void
    onClose: () => void
}
export default function FilterComponent({
    onApply,
    onClear,
    onClose,
}: Props) {

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [labelMinPrice, setLabelMinPrice] = useState("Chọn giá");
    const [labelMaxPrice, setLabelMaxPrice] = useState("Chọn giá");
    const { menuMinPrice, menuMaxPrice } = useProductFilterPrice(minPrice, maxPrice)

    return (
        <div className="w-96 bg-white border border-gray-100 rounded-lg shadow-2xl p-4 flex flex-col space-y-4 overflow-hidden">

            <p className="text-2xl text-center">Giá:</p>

            <div className="flex items-center justify-between mt-2 gap-2 ">
                <div>
                    <p className="text-xs">Giá tối thiểu</p>
                    <DropDownComponent
                        listMenu={menuMinPrice}
                        label={labelMinPrice}
                        dataStudent={(e: any) => {
                            const value = Number(e.key);
                            setMinPrice(value);

                            const item = menuMinPrice.items.find(i => i.key == e.key);
                            setLabelMinPrice(item?.label || "Chọn giá");
                        }}
                    />

                </div>

                <p>đến</p>

                <div>
                    <p className="text-xs">Giá tối đa</p>
                    <DropDownComponent
                        listMenu={menuMaxPrice}
                        label={labelMaxPrice}
                        dataStudent={(e: any) => {
                            const value = Number(e.key);
                            setMaxPrice(value);
                            const item = menuMaxPrice.items.find(i => i.key == e.key);
                            setLabelMaxPrice(item?.label || "Chọn giá");
                        }}
                    />

                </div>
            </div>

            <div className="flex justify-between space-x-4">

                <ButtonComponent
                    className="w-1/2"
                    label={"Áp dụng"}
                    onClick={() => {
                        onApply({
                            minPrice: minPrice || null,
                            maxPrice: maxPrice || null,
                        });
                    }}
                />
                <ButtonComponent
                className="w-1/2"
                    label={"Xoá lọc"}
                    variant="secondary"
                    onClick={() => {
                        setMinPrice(0);
                        setMaxPrice(0);
                        onClear && onClear();
                        onClose && onClose();
                    }}
                />

            </div>

        </div>
    );
}