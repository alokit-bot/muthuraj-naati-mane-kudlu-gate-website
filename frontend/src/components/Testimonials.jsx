import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS, RESTAURANT } from "@/data/restaurant";

export const Testimonials = () => {
  return (
    <section
      id="reviews"
      data-testid="testimonials-section"
      className="relative z-10 py-20 lg:py-32 bg-[#121212]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-accent mb-4">
            Loved by Families
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            {RESTAURANT.rating}★ across {RESTAURANT.reviews}+ reviews
          </h2>
          <p className="mt-5 text-base text-white/60">
            Real sentiment from our diners — family-friendly, great food, fair prices
            and staff who speak your language.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-testid={`testimonial-${i}`}
              className="relative rounded-3xl border border-white/5 bg-white/[0.03] p-8"
            >
              <Quote className="w-8 h-8 text-brand/40" strokeWidth={1.5} />
              <blockquote className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between">
                <div>
                  <div className="font-medium text-white">{t.name}</div>
                  <div className="text-xs text-white/40">{t.role}</div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-brand-accent text-brand-accent" strokeWidth={1.5} />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
