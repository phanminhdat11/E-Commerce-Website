import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "danger" | "outline";

type ButtonComponentProps = {
    label: string;
    variant?: ButtonVariant;
    className?: string;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<ButtonVariant, string> = {
    primary:
        "bg-orange-500 text-white shadow-sm hover:bg-orange-600 focus-visible:ring-orange-200",
    secondary:
        "bg-black text-white shadow-sm hover:bg-slate-800 focus-visible:ring-slate-200",
    danger:
        "bg-red-500 text-white shadow-sm hover:bg-red-600 focus-visible:ring-red-200",
    outline:
        "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus-visible:ring-slate-200",
};

function cn(...classes: Array<string | undefined | false>) {
    return classes.filter(Boolean).join(" ");
}

export default function ButtonComponent({
    label,
    type = "button",
    variant = "primary",
    className,
    disabled = false,
    iconStart,
    iconEnd,
    ...props
}: ButtonComponentProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={cn(
                "inline-flex min-h-11 space-x-2 items-center justify-center rounded-xl px-4 py-3 text-sm font-medium transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:px-5 sm:text-base",
                variantClasses[variant],
                className,
            )}
            {...props}
        >
            {iconStart ? <span className="flex-none">{iconStart}</span> : null}
            <span>{label}</span>
            {iconEnd ? <span className="flex-none">{iconEnd}</span> : null}
        </button>
    );
}
