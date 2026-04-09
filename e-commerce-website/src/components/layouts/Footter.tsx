import Link from "next/link";

const footerLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Cart", href: "/cart" },
  { label: "Profile", href: "/profile" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/95">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-slate-500 sm:px-5 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <p className="text-center md:text-left">
          © 2026 Ecommerce Shop. Built for a clean storefront experience.
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-slate-500 transition hover:text-orange-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
