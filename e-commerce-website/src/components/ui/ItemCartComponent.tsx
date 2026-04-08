import Link from "next/link";

export default function ItemCardComponent() {
    return (
        <Link href="/shop/product">
            <div className="rounded-xl bg-white shadow-lg overflow-hidden hover:cursor-pointer hover:scale-105 transition duration-300">

                <div className="bg-white flex items-center justify-center p-4">
                    <img
                        className="h-36 w-40"
                        src="https://songlongmedia.com/media/product/3763_loa_jbl_go_4_black_songlongmedia__1_.jpg"
                        alt=""
                    />
                </div>

                <div className="p-3 space-y-2">

                    <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-black">
                            1,000,000 VND
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                            2,000,000 VND
                        </span>
                    </div>

                    <h3 className="text-sm text-gray-800 leading-snug">
                        Zenbook Pro 14 Duo OLED
                    </h3>

                    <div className="flex items-center justify-between pt-2">

                        <div className="flex items-center gap-2">
                            ⭐ 5.0
                            <span className="text-xs text-gray-500">
                                Đã bán 100
                            </span>
                        </div>

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log("Add to cart");
                            }}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600"
                        >
                            🛒
                        </button>

                    </div>

                </div>
            </div>
        </Link>
    );
}