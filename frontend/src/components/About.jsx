import { motion } from "framer-motion";
import { Star, Users, Heart, MapPin } from "lucide-react";
import { RESTAURANT } from "@/data/restaurant";

const STATS = [
  { icon: Star, value: `${RESTAURANT.rating}★`, label: "Google Rating" },
  { icon: Users, value: `${RESTAURANT.reviews}+`, label: "Happy Reviews" },
  { icon: Heart, value: "5+ Yrs", label: "Serving Kudlu Gate" },
];

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative z-10 py-20 lg:py-32 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-accent mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              Your neighbourhood family restaurant
            </h2>
            <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed">
              For years, Muthuraj Naati Mane has been the heart of dining in Kudlu
              Gate — a place where families gather over hearty, home-style food.
              From authentic Naati specialties to North Indian classics and fusion
              favourites, every plate is made to bring people together.
            </p>
            <p className="mt-4 text-base text-white/60 leading-relaxed">
              With a 4.4★ rating from over 625 reviews, warm multilingual staff and
              honest, value-for-money pricing, we're proud to be a name families in
              Bengaluru trust.
            </p>

            <div className="mt-8 flex items-center gap-2 text-sm text-white/50">
              <MapPin className="w-4 h-4 text-brand-accent" strokeWidth={1.5} />
              {RESTAURANT.addressLine1}, {RESTAURANT.addressLine2}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  data-testid={`stat-${s.label.toLowerCase().replace(/ /g, "-")}`}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 text-center"
                >
                  <s.icon className="w-5 h-5 mx-auto text-brand-accent" strokeWidth={1.5} />
                  <div className="mt-3 font-serif text-2xl font-bold text-white">{s.value}</div>
                  <div className="mt-1 text-[11px] tracking-wide uppercase text-white/40">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 grid grid-cols-2 gap-5"
          >
            <div className="col-span-2 overflow-hidden rounded-3xl border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1578496780896-7081cc23c111?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
                alt="Family enjoying a meal together"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Family toasting at the dinner table"
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1631515242808-497c3fbd3972?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Spread of Indian curries"
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
