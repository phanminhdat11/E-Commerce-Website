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
    const priceOptions = [
        { label: "1.000.000 VND", value: 1000000 },
        { label: "2.000.000 VND", value: 2000000 },
        { label: "3.000.000 VND", value: 3000000 },
    ];
    const menuOptionPrice = useProductFilterPrice().menuPropsOtionPrice;
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    const filteredMinOptions = priceOptions.filter(
        (item) => !maxPrice || item.value <= maxPrice
    );

    const filteredMaxOptions = priceOptions.filter(
        (item) => !minPrice || item.value >= minPrice
    );

    return (
        <div className="w-96 bg-white border border-gray-100 rounded-lg shadow-2xl p-4 flex flex-col space-y-4">

            <p className="text-2xl text-center">Giá:</p>

            <div className="flex items-center justify-between mt-2 gap-2">


                <div>
                    <p className="text-xs">Giá tối thiểu</p>
                    <select
                        className="px-3 py-3 border border-gray-200 rounded-lg"
                        value={minPrice}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            setMinPrice(value)
                        }}
                    >
                        <option value="">Chọn giá</option>
                        {filteredMinOptions.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                  
                    {/* <DropDownComponent listMenu={menuOptionPrice} dataStudent={(e: any) => {
                        const value = Number(e.target.value);
                        setMinPrice(value);
                    }} /> */}
                </div>

                <p>đến</p>


                <div>
                    <p className="text-xs">Giá tối đa</p>
                    <select
                        className="px-3 py-3 border border-gray-200 rounded-lg"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    >
                        <option value="">Chọn giá</option>
                        {filteredMaxOptions.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                </div>

            </div>

            <ButtonComponent
                label={"Áp dụng"}
                onClick={() => {
                    onApply({
                        minPrice: minPrice || null,
                        maxPrice: maxPrice || null,
                    });
                }}


            />

            <ButtonComponent
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
    );
}