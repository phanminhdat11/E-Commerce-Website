import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


type Props = {
    route: string,
    ariaLabel: string,
    icon: IconProp
}

export default function IconButton({ route, ariaLabel, icon }: Props) {
    return (
        <Link aria-label={ariaLabel} href={route} className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition active:scale-95 lg:flex md:h-11 md:w-11">
            <FontAwesomeIcon className="text-base md:text-lg"  icon={icon}/>
        </Link>
    )
};

