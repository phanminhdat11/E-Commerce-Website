import { useAppDispatch } from "@/lib/redux/hook"



export const useProductFilterPrice = (minPrice: number, maxPrice: number) => {

    const filteredMinOptions = priceOptions.filter(
        (item) => !maxPrice || item.value <= maxPrice
    );

    const filteredMaxOptions = priceOptions.filter(
        (item) => !minPrice || item.value >= minPrice
    );




    const menuMaxPrice = {
        items: filteredMaxOptions.map(option => ({
            key: option.value,
            label: option.label
        })),
        onClick: (e: any) => {

        }
    }
    const menuMinPrice = {
        items: filteredMinOptions.map(option => ({
            key: option.value,
            label: option.label
        })),
        onClick: (e: any) => {

        }
    }

    return { menuMaxPrice, menuMinPrice};

}

const priceOptions = [
    { label: "5.000.000 VND", value: 5000000 },
    { label: "7.000.000 VND", value: 7000000 },
    { label: "10.000.000 VND", value: 10000000 },
    { label: "15.000.000 VND", value: 15000000 },
];