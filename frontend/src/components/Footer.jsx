import { Phone, MapPin, Star } from "lucide-react";
import { RESTAURANT } from "@/data/restaurant";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="relative z-10 border-t border-white/5 bg-[#0A0A0A] py-14"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-serif text-2xl font-bold text-white">
            Muthuraj <span className="text-brand-accent">Naati Mane</span>
          </div>
          <p className="mt-3 text-sm text-white/50 max-w-xs leading-relaxed">
            {RESTAURANT.tagline}. A multicuisine family restaurant in the heart of
            Kudlu Gate, Bengaluru.
          </p>
          <div className="mt-4 flex items-center gap-1.5 text-sm text-white/60">
            <Star className="w-4 h-4 fill-brand-accent text-brand-accent" strokeWidth={1.5} />
            {RESTAURANT.rating} · {RESTAURANT.reviews}+ reviews
          </div>
        </div>

        <div>
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-brand-accent">
            Contact
          </div>
          <a
            href={`tel:${RESTAURANT.phoneRaw}`}
            data-testid="footer-call-btn"
            className="mt-4 flex items-center gap-2 text-sm text-white/70 hover:text-brand-accent transition-colors"
          >
            <Phone className="w-4 h-4" strokeWidth={1.5} /> {RESTAURANT.phone}
          </a>
          <div className="mt-3 flex items-start gap-2 text-sm text-white/60">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={1.5} />
            <span>{RESTAURANT.addressLine1}, {RESTAURANT.addressLine2}</span>
          </div>
        </div>

        <div>
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-brand-accent">
            Explore
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {[
              { l: "About", h: "#about" },
              { l: "Menu", h: "#menu" },
              { l: "Offers", h: "#offers" },
              { l: "Reviews", h: "#reviews" },
              { l: "Visit Us", h: "#contact" },
            ].map((x) => (
              <a
                key={x.h}
                href={x.h}
                data-testid={`footer-link-${x.l.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-white/60 hover:text-brand-accent transition-colors w-fit"
              >
                {x.l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-6 border-t border-white/5 text-xs text-white/40">
        © {new Date().getFullYear()} Muthuraj Naati Mane, Kudlu Gate. All rights reserved.
      </div>
    </footer>
  );
};
