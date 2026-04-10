import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs"

type SearchProps = {
    placeholder: string,
    dataSearch: any[],
    onSearch: (keyword: string) => void
}

export default function SearchBoxComponent({ placeholder, onSearch }: SearchProps) {

    const [keyWordSearch, setKeyWordSearch] = useState("");
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [showDataSearch, setShowDataSearch] = useState(false);

    useEffect(() => {
        if (!inputRef.current) return;
        const subcription = fromEvent(inputRef.current, "input")
            .pipe(
                map((e: any) => e.target.value),
                debounceTime(300),
                distinctUntilChanged()
            )
            .subscribe((value) => {
                setKeyWordSearch(value);
                onSearch(value)
               
            })
        return () => subcription.unsubscribe();
    }, [])
    return (
        <label className="flex h-11 w-full min-w-0 items-center rounded-2xl border border-slate-200 bg-white px-4 shadow-sm sm:max-w-sm md:max-w-xl">
            <FontAwesomeIcon
                className="size-4 flex-none text-slate-400"
                icon={faMagnifyingGlass}
            />
            <input
                ref={inputRef}
                defaultValue=""
                placeholder={placeholder}
                className="ml-3 h-full min-w-0 flex-1 bg-transparent text-sm text-black outline-none placeholder:text-slate-400"
            />
        </label>

    );
}

