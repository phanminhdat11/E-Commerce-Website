import { useAppDispatch } from "@/lib/redux/hook"

export const useProductFilterPrice = () => {

    const dispatch = useAppDispatch();
    
    

    const menuPropsOtionPrice = {
        items: priceOptions.map(option=> ({
            key: option.value,
            label: option.label
        })),
        onClick: (e: any) => {

        }
    }

    return {menuPropsOtionPrice};

}

const priceOptions = [
    { label: "1.000.000 VND", value: 1000000 },
    { label: "2.000.000 VND", value: 2000000 },
    { label: "3.000.000 VND", value: 3000000 },
];