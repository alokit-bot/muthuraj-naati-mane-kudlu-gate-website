import { motion } from "framer-motion";
import { Star, Phone, UtensilsCrossed, MapPin } from "lucide-react";
import { RESTAURANT } from "@/data/restaurant";

export const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1727404679933-99daa2a7573a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920"
          alt="Signature Indian thali at Muthuraj Naati Mane"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 mb-6">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-brand-accent text-brand-accent" strokeWidth={1.5} />
              ))}
              <Star className="w-3.5 h-3.5 fill-brand-accent/50 text-brand-accent" strokeWidth={1.5} />
            </div>
            <span className="text-xs tracking-[0.2em] uppercase text-white/80">
              {RESTAURANT.rating} · {RESTAURANT.reviews}+ Reviews
            </span>
          </div>

          <p className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-brand-accent mb-4">
            Kudlu Gate, Bengaluru
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            Muthuraj <br />
            <span className="text-brand-accent">Naati Mane</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-lg leading-relaxed">
            {RESTAURANT.tagline}. A warm, multicuisine family restaurant serving
            North Indian, South Indian & fusion favourites your whole family will love.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              data-testid="hero-reserve-btn"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white hover:bg-brand-hover hover:scale-105 transition-transform duration-200 shadow-[0_0_40px_rgba(200,75,49,0.25)]"
            >
              <UtensilsCrossed className="w-4 h-4" strokeWidth={1.5} />
              Reserve a Table
            </a>
            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              data-testid="hero-call-btn"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-7 py-4 text-sm font-semibold text-white hover:border-brand-accent hover:text-brand-accent transition-colors"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              {RESTAURANT.phone}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-white/50">
            <MapPin className="w-4 h-4 text-brand-accent" strokeWidth={1.5} />
            {RESTAURANT.addressLine1}, {RESTAURANT.addressLine2}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
