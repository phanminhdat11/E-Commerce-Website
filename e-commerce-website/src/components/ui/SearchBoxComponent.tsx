import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBoxComponent() {
    return (
        <label className="flex h-11 w-full min-w-0 items-center rounded-2xl border border-slate-200 bg-white px-4 shadow-sm sm:max-w-sm md:max-w-md">
            <FontAwesomeIcon
                className="size-4 flex-none text-slate-400"
                icon={faMagnifyingGlass}
            />
            <input
                defaultValue=""
                placeholder="Tim kiem san pham"
                className="ml-3 h-full min-w-0 flex-1 bg-transparent text-sm text-black outline-none placeholder:text-slate-400"
            />
        </label>
    );
}
