import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Phone, MapPin, Clock, Send, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RESTAURANT } from "@/data/restaurant";

const inputCls =
  "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-brand-accent focus-visible:ring-offset-0 h-12 rounded-xl";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "2",
    message: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date) {
      toast.error("Please fill in your name, phone and preferred date.");
      return;
    }
    toast.success(
      `Thanks, ${form.name}! Your table request for ${form.guests} on ${form.date} is noted. We'll call you at ${form.phone} to confirm.`
    );
    setForm({ name: "", phone: "", date: "", guests: "2", message: "" });
  };

  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    RESTAURANT.mapsQuery
  )}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    RESTAURANT.mapsQuery
  )}`;

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative z-10 py-20 lg:py-32 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-accent mb-4">
            Visit & Reserve
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Book your family table
          </h2>
          <p className="mt-5 text-base text-white/60">
            Send a quick reservation request or simply call us. We're right on Kudlu Main Road.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-3xl border border-white/5 bg-white/[0.03] p-8"
          >
            <form onSubmit={handleSubmit} data-testid="reservation-form" className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/70 text-sm">Name</Label>
                  <Input
                    id="name" name="name" value={form.name} onChange={handleChange}
                    placeholder="Your name" data-testid="input-name" className={inputCls}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white/70 text-sm">Phone</Label>
                  <Input
                    id="phone" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="Mobile number" data-testid="input-phone" className={inputCls}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-white/70 text-sm">Date</Label>
                  <Input
                    id="date" name="date" type="date" value={form.date} onChange={handleChange}
                    data-testid="input-date" className={`${inputCls} [color-scheme:dark]`}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-white/70 text-sm">Guests</Label>
                  <Input
                    id="guests" name="guests" type="number" min="1" value={form.guests} onChange={handleChange}
                    data-testid="input-guests" className={inputCls}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white/70 text-sm">Message (optional)</Label>
                <Textarea
                  id="message" name="message" value={form.message} onChange={handleChange}
                  placeholder="Any special requests — high chair, celebration, seating..."
                  data-testid="input-message"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-brand-accent focus-visible:ring-offset-0 rounded-xl min-h-[110px]"
                />
              </div>
              <button
                type="submit"
                data-testid="reservation-submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white hover:bg-brand-hover hover:scale-[1.02] transition-transform duration-200 shadow-[0_0_30px_rgba(200,75,49,0.2)]"
              >
                <Send className="w-4 h-4" strokeWidth={1.5} />
                Request Reservation
              </button>
            </form>
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                data-testid="contact-call-btn"
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 hover:border-brand-accent/40 transition-colors"
              >
                <Phone className="w-5 h-5 text-brand-accent" strokeWidth={1.5} />
                <div className="mt-3 text-[11px] uppercase tracking-wide text-white/40">Call Us</div>
                <div className="mt-1 text-sm font-medium text-white">{RESTAURANT.phone}</div>
              </a>
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                <MapPin className="w-5 h-5 text-brand-accent" strokeWidth={1.5} />
                <div className="mt-3 text-[11px] uppercase tracking-wide text-white/40">Find Us</div>
                <div className="mt-1 text-sm font-medium text-white leading-snug">Kudlu Gate, Bengaluru</div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                <Clock className="w-5 h-5 text-brand-accent" strokeWidth={1.5} />
                <div className="mt-3 text-[11px] uppercase tracking-wide text-white/40">Open Daily</div>
                <div className="mt-1 text-sm font-medium text-white">11 AM – 11 PM</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.swiggy.com"
                target="_blank" rel="noopener noreferrer"
                data-testid="order-swiggy-btn"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white hover:border-brand-accent hover:text-brand-accent transition-colors"
              >
                Order on Swiggy <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.zomato.com"
                target="_blank" rel="noopener noreferrer"
                data-testid="order-zomato-btn"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white hover:border-brand-accent hover:text-brand-accent transition-colors"
              >
                Order on Zomato <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/5 flex-1 min-h-[280px]">
              <iframe
                title="Muthuraj Naati Mane location"
                src={mapsUrl}
                data-testid="google-map"
                className="w-full h-full min-h-[280px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={directionsUrl}
                target="_blank" rel="noopener noreferrer"
                data-testid="directions-btn"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-xs font-semibold text-white hover:bg-brand-hover transition-colors shadow-lg"
              >
                Get Directions <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
