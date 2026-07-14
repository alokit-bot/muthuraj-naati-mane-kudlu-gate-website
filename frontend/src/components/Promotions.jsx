import { motion } from "framer-motion";
import { Sparkles, CalendarDays } from "lucide-react";
import { PROMOTIONS, RESTAURANT } from "@/data/restaurant";

export const Promotions = () => {
  return (
    <section
      id="offers"
      data-testid="promotions-section"
      className="relative z-10 py-20 lg:py-32 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-accent mb-4">
              Special Offers
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              Weekend family packages
            </h2>
          </div>
          <p className="text-sm text-white/50 max-w-sm">
            Great food, better value. Call us to reserve any package for your family.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {PROMOTIONS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`promo-card-${i}`}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-8 hover:border-brand-accent/30 transition-colors"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-brand/10 blur-2xl group-hover:bg-brand/20 transition-colors" />
              <div className="relative">
                <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-brand-accent">
                  <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {p.tag}
                </div>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-white/55 leading-relaxed min-h-[48px]">
                  {p.desc}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
                    <CalendarDays className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {p.days}
                  </span>
                  <span className="font-serif text-3xl font-bold text-brand-accent">
                    {p.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={`tel:${RESTAURANT.phoneRaw}`}
            data-testid="promo-call-btn"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white hover:bg-brand-hover hover:scale-105 transition-transform duration-200"
          >
            Reserve a Package — {RESTAURANT.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
