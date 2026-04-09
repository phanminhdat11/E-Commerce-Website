import { faCartArrowDown, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ItemCardComponent() {
  return (
    <Link href="/shop/product" className="group block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
        <div className="flex aspect-[4/3] items-center justify-center bg-slate-50 p-4 sm:p-5">
          <img
            className="h-full max-h-44 w-full object-contain"
            src="https://songlongmedia.com/media/product/3763_loa_jbl_go_4_black_songlongmedia__1_.jpg"
            alt="JBL speaker"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 p-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-lg font-semibold text-black sm:text-xl">
              1,000,000 VND
            </span>
            <span className="text-sm text-gray-400 line-through">2,000,000 VND</span>
          </div>

          <h3 className="line-clamp-2 text-sm leading-6 text-gray-800 sm:text-base">
            Zenbook Pro 14 Duo OLED
          </h3>

          <div className="mt-auto flex items-center justify-between gap-3 pt-2">
            <div className="min-w-0 text-sm text-slate-600">
              <div className="flex items-center gap-2 text-amber-500">
                <FontAwesomeIcon icon={faStar} className="text-sm" />
                <span className="font-medium text-slate-700">5.0</span>
              </div>
              <span className="mt-1 block truncate text-xs text-gray-500">Da ban 100</span>
            </div>

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
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
