import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type IconButtonVariant = "primary" | "secondary" | "danger" | "outline";

type Props = {
  ariaLabel: string;
  icon: IconProp;
  onClick?: () => void;
  variant?: IconButtonVariant;
  value?: number;
  className?: string;
  disabled?: boolean;
};

const variantClass: Record<IconButtonVariant, string> = {
  primary: "text-white bg-orange-500 hover:bg-orange-600",
  secondary: "text-orange-500 bg-white hover:bg-orange-50",
  danger: "text-red-500 bg-white hover:bg-red-50",
  outline: "text-green-700 bg-white hover:bg-green-50",
};

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function IconButton({
  ariaLabel,
  icon,
  variant = "primary",
  value = 0,
  onClick,
  className,
  disabled,
}: Props) {
  return (
    <div className="relative lg:flex hidden">
      <button
        onClick={onClick}
        aria-label={ariaLabel}
        disabled={disabled}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition active:scale-95 md:h-11 md:w-11",
          variantClass[variant],
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <FontAwesomeIcon className="text-base md:text-lg" icon={icon} />
      </button>

      {value > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-medium text-white">
          {value > 99 ? "99+" : value}
        </span>
      )}
    </div>
  );
}