import { Product, ProductDetail } from "@/lib/redux/products/productSlice";
import { faBuilding, faCartArrowDown, faLocation, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "./IconButton";
import { useFortmatPriceToVND } from "@/utils/fortmatPricetoVND";


type Props = {
    product: ProductDetail
    onClick: () => void
    onAddToCart: () => void
}

export default function ItemProductComponent({ product, onClick, onAddToCart}: Props) {


    const hanldeConvertPriceToVND = useFortmatPriceToVND().handleConvertPriceToVND;
    const handlePercentDiscount = useFortmatPriceToVND().handlePercentDisoucnt;

    return (
        <div onClick={onClick} className="group block h-full">
            <div className="flex h-full flex-col overflow-hidden  border border-slate-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:bg-orange-50">
                <div className="flex aspect-[4/3] items-center justify-center bg-slate-50 p-4 sm:p-5">
                    <img
                        className="h-full max-h-48 w-full  object-fill"
                        src={product.images ?? "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/xiaomi_redmi_13x_xanh_5_2f17e30bdd.png"}
                        onError={(e) => {
                            e.currentTarget.src =
                                "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/xiaomi_redmi_13x_xanh_5_2f17e30bdd.png";
                        }}
                        alt={product.name}
                    />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-4">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="text-lg font-semibold text-orange-700 sm:text-xl">
                            {hanldeConvertPriceToVND(product.finalPrice)}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                            {
                                hanldeConvertPriceToVND(product.finalPrice ?? 0) != hanldeConvertPriceToVND(product.price ?? 0)
                                    ? hanldeConvertPriceToVND(product.price ?? 0) : ''
                            }
                        </span>
                        <span className="text-orange-600 font-medium text-xm p-1 bg-gray-100 rounded-lg">
                            {
                                handlePercentDiscount(product.price, product.finalPrice) > 0 ? `-${handlePercentDiscount(product.price, product.finalPrice)}%` : ''
                            }
                        </span>
                    </div>
                    <h3 className="line-clamp-2 text-sm leading-6 text-gray-800 sm:text-xl font-medium">
                        {product.name}
                    </h3>
                    <div className="flex justify-between">
                        <span className="text-gray-400 sm:text-sm text-xs"><FontAwesomeIcon icon={faBuilding} className="mr-3" />
                            {product.brand}
                        </span>
                        <span className="font-medium text-sm">{product.sku}</span>
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-3 pt-1">
                        <div className="min-w-0 text-sm text-slate-600">
                            <div className="flex items-start gap-2 text-amber-500">
                                <FontAwesomeIcon icon={faStar} className="text-sm" />
                                <span className="font-medium text-slate-700">4.0</span>
                                {/* <span className="font-medium text-slate-700">{product.rating}</span> */}
                            </div>
                            <span className="mt-1 block truncate text-xs text-gray-500">
                                {/* {product.soldOut > 0 ? product.soldOut + ' Đã bán' : ''} */}
                            </span>
                        </div>
                        
                        <IconButton
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onAddToCart()
                            }}
                            
                            value={0}
                            variant="primary"
                            ariaLabel={"Thêm vào giỏ hàng"}
                            icon={faCartArrowDown} />
                    </div>
                </div>
            </div>
        </div>
    );
}
