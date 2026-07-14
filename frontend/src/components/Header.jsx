import { useEffect, useState } from "react";
import { Menu, X, Phone, Star } from "lucide-react";
import { RESTAURANT } from "@/data/restaurant";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Offers", href: "#offers" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit Us", href: "#contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <a
          href="#top"
          data-testid="brand-logo"
          className="flex flex-col leading-none"
        >
          <span className="font-serif text-xl sm:text-2xl font-bold text-white">
            Muthuraj <span className="text-brand-accent">Naati Mane</span>
          </span>
          <span className="hidden sm:flex items-center gap-1 text-[11px] tracking-[0.25em] uppercase text-white/50 mt-1">
            <Star className="w-3 h-3 fill-brand-accent text-brand-accent" strokeWidth={1.5} />
            {RESTAURANT.rating} · {RESTAURANT.reviews} Reviews
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.label.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-white/70 hover:text-brand-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${RESTAURANT.phoneRaw}`}
            data-testid="header-call-btn"
            aria-label="Call restaurant"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-hover hover:scale-105 transition-transform duration-200 shadow-[0_0_30px_rgba(200,75,49,0.15)]"
          >
            <Phone className="w-4 h-4" strokeWidth={1.5} />
            Call to Book
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
            className="md:hidden text-white p-2"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden backdrop-blur-xl bg-black/90 border-b border-white/5 px-6 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              data-testid={`mobile-nav-${l.label.toLowerCase().replace(" ", "-")}`}
              className="text-base text-white/80 hover:text-brand-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${RESTAURANT.phoneRaw}`}
            data-testid="mobile-call-btn"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white"
          >
            <Phone className="w-4 h-4" strokeWidth={1.5} /> Call to Book
          </a>
        </div>
      )}
    </header>
  );
};
