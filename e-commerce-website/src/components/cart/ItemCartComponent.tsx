import { CartItems } from "@/lib/redux/cart/cartSlice";
import { Product } from "@/lib/redux/products/productSlice";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type Props = {
    cart: CartItems;
    onClick: () => void;
    increaseQuantity: () => void;
    decreaseQuantity: () => void;
    deleteItem: () => void;

}

export default function ItemCartComponent({ cart, onClick, increaseQuantity, decreaseQuantity, deleteItem }: Props) {

    const hanldeConvertPriceToVND = (price: number) => {
        return new Intl.NumberFormat("vi-VN").format(price) + " VND"
    }

    return (
        <div className="grid gap-4 rounded-2xl bg-white p-4 shadow-sm sm:p-5 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start xl:gap-6">
            <div className="flex flex-col gap-4 sm:flex-row xl:min-w-0">
                <img onClick={onClick}
                    className="h-28 w-full rounded-xl object-cover sm:h-32 sm:w-32 xl:h-36 xl:w-36"
                    src={"https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/xiaomi_redmi_13x_xanh_5_2f17e30bdd.png"}
                    onError={(e) => {
                        e.currentTarget.src =
                            "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/xiaomi_redmi_13x_xanh_5_2f17e30bdd.png";
                    }}
                />
                <div className="min-w-0 flex-1 space-y-3">
                    <h3 onClick={onClick} className="text-lg font-semibold text-slate-900 xl:text-xl">{cart.name}</h3>

                    <p className="text-sm leading-6 text-gray-500 2xl:max-w-4xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis saepe magnam. Explicabo quod nihil voluptates doloremque illum obcaecati dolor sequi iste saepe praesentium illo maxime quas, recusandae a libero.
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                        <span className="text-lg font-bold text-orange-500 xl:text-xl">{hanldeConvertPriceToVND(cart.unitPrice!)}</span>
                        {/* <span className="text-sm text-gray-400 line-through">{product.price}</span> */}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between gap-4 xl:min-w-[10rem] xl:flex-col xl:items-end">
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 p-1">
                    <button 
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        decreaseQuantity()
                    }} type="button" className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700" aria-label="Decrease quantity">
                        <FontAwesomeIcon icon={faMinus} />
                    </button>

                    <span className="min-w-12 px-3 text-center font-semibold text-slate-900">{cart.quantity}</span>

                    <button onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        increaseQuantity()
                    }} type="button" className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700" aria-label="Increase quantity">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>

                <button
                onClick={
                     (e) => {
                          e.preventDefault();
                        e.stopPropagation();
                        deleteItem();
                     }

                }

                    type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-red-100 text-red-500 transition active:scale-95 hover:cursor-pointer" aria-label="Remove item">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>

    )
};
