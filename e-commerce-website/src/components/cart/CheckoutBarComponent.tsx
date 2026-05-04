import { useFortmatPriceToVND } from "@/utils/fortmatPricetoVND";
import ButtonComponent from "../ui/ButtonComponent";

type Props = {
    total: number,
    tax: number,
    subtotal: number
}
export default function CheckoutBarComponent({ total, tax, subtotal}: Props) {

    const handleConvertPriceToVND = useFortmatPriceToVND().handleConvertPriceToVND
    
     return (
            <div className="w-full max-w-[1720px] border rounded-xl border-slate-200 bg-black px-4 py-4 shadow-xl md:w-[calc(100vw-8rem)] lg:w-[calc(100vw-21rem)] lg:px-6 2xl:w-[calc(100vw-23rem)]">
                <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-1 text-sm text-white xl:text-base">
                        <p>
                            Tạm tính: <span className="font-medium">{handleConvertPriceToVND(subtotal)}</span>
                        </p>
                        <p>
                            Giảm giá: <span className="font-medium">{tax}%</span>
                        </p>
                        <p className="text-lg font-bold text-white xl:text-xl">
                            Tổng: <span className="text-orange-500">{handleConvertPriceToVND(total)}</span>
                        </p>
                    </div>
    
                    <div>
                        <ButtonComponent
                            label="Checkout"
                            variant="secondary"
                            className="w-full md:min-w-44 xl:min-w-48 "
                        />
                    </div>
                </div>
            </div>
        );
};
