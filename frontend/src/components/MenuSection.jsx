import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU } from "@/data/restaurant";

export const MenuSection = () => {
  const [active, setActive] = useState(MENU[0].id);
  const current = MENU.find((m) => m.id === active);

  return (
    <section
      id="menu"
      data-testid="menu-section"
      className="relative z-10 py-20 lg:py-32 bg-[#121212]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-accent mb-4">
            Our Menu
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Flavours for every family
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/60">
            Multicuisine done right — pick a category and explore our most-loved dishes.
            All prices in ₹.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3" data-testid="menu-tabs">
          {MENU.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              data-testid={`menu-tab-${cat.id}`}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                active === cat.id
                  ? "bg-brand text-white"
                  : "border border-white/10 bg-white/[0.03] text-white/60 hover:text-brand-accent hover:border-brand-accent/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="mt-12 grid lg:grid-cols-12 gap-10 items-start"
          >
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="overflow-hidden rounded-3xl border border-white/5">
                <img
                  src={current.image}
                  alt={current.label}
                  className="w-full h-72 lg:h-[420px] object-cover"
                />
              </div>
              <p className="mt-5 text-base text-white/60 leading-relaxed">
                {current.blurb}
              </p>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="flex flex-col divide-y divide-white/5">
                {current.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    data-testid={`menu-item-${current.id}-${i}`}
                    className="group flex items-start justify-between gap-6 py-5 hover:translate-x-2 transition-transform duration-200"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-brand-accent transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-white/50 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="font-serif text-lg sm:text-xl font-semibold text-brand-accent whitespace-nowrap">
                      {item.price}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
