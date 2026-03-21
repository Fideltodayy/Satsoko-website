import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Wallets", href: "#wallets" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative w-full flex items-center justify-between px-6 py-4 md:px-10 xl:px-16 z-50">
      {/* Logo — always left-aligned, same position as before */}
      <img
        src="/satsoko-logo.svg"
        alt="Satsoko"
        className="h-10 md:h-12 w-auto object-contain"
      />

      {/* Desktop only: links on the right, transparent */}
      <div className="hidden md:flex items-center gap-6 xl:gap-8">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-sm font-semibold text-foreground/65 hover:text-foreground transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Mobile only: hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="absolute left-4 right-4 top-full mt-1 rounded-2xl border border-foreground/10 bg-background/95 backdrop-blur-md shadow-lg overflow-hidden z-50 md:hidden">
          {links.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors ${
                i < links.length - 1 ? "border-b border-foreground/8" : ""
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
