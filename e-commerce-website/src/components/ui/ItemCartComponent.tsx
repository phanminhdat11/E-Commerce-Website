import { Product } from "@/lib/redux/products/productSice";
import { faCartArrowDown, faLocation, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import IconButton from "./IconButton";


type Props = {
    product: Product
}


export default function ItemCardComponent({ product }: Props) {

    const hanldeConvertPriceToVND = (price: number) => {
        return new Intl.NumberFormat("vi-VN").format(price) + " VND"
    }

    return (
        <Link href="/shop/product" className="group block h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:bg-orange-50">
                <div className="flex aspect-[4/3] items-center justify-center bg-slate-50 p-4 sm:p-5">
                    <img
                        className="h-full max-h-44 w-full object-contain"
                        src={product.images?.[0] ?? "/placeholder.png"}
                        alt={product.name}
                    />
                </div>

                <div className="flex flex-1 flex-col gap-3 p-4">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="text-lg font-semibold text-orange-700 sm:text-xl">
                            {hanldeConvertPriceToVND(product.price ?? 0)}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                            {
                                hanldeConvertPriceToVND(product.priceOriginal ?? 0) != hanldeConvertPriceToVND(product.price ?? 0) 
                                ? hanldeConvertPriceToVND(product.priceOriginal ?? 0) : ''
                            }
                        </span>
                        <span className="text-orange-600 font-medium text-xm p-1 bg-gray-100 rounded-lg">
                            {
                                product.discountPercentage! > 0 ?
                                    `-${product.discountPercentage}%` : ''
                            }
                        </span>
                    </div>

                    <h3 className="line-clamp-2 text-sm leading-6 text-gray-800 sm:text-xl font-medium">
                        {product.name}
                    </h3>
                    <span className="text-gray-400 sm:text-sm text-xs"><FontAwesomeIcon icon={faLocation} className="mr-3" />Go Vap | Ho Chi Minh</span>

                    <div className="mt-auto flex items-center justify-between gap-3 pt-1">
                        <div className="min-w-0 text-sm text-slate-600">
                            <div className="flex items-center gap-2 text-amber-500">
                                <FontAwesomeIcon icon={faStar} className="text-sm" />
                                <span className="font-medium text-slate-700">{product.rating}</span>
                            </div>
                            <span className="mt-1 block truncate text-xs text-gray-500">{product.soldOut} Đã bán</span>
                        </div>
{/* 
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log("Add to cart");
                            }}
                            className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-orange-500 text-white transition active:scale-95 group-hover:bg-orange-600 sm:h-11 sm:w-11"
                            aria-label="Add item to cart"
                        >
                            <FontAwesomeIcon icon={faCartArrowDown} className="text-sm" />
                        </button> */}
                        <IconButton value={0} variant="primary" ariaLabel={"Thêm vào giỏ hàng"} icon={faCartArrowDown}/>
                    </div>
                </div>
            </div>
        </Link>
    );
}
