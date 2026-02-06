import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Increíble experiencia. Desde la primera visita me sentí en confianza. El equipo es muy profesional y las instalaciones son de primer nivel. ¡Mi sonrisa nunca lució mejor!",
    name: "María García",
    location: "Puertollano",
    stars: 5,
  },
  {
    text: "Llevé a mis hijos por primera vez y fue una experiencia maravillosa. La doctora tuvo una paciencia infinita y ahora los niños quieren volver. Totalmente recomendable.",
    name: "Carlos Fernández",
    location: "Ciudad Real",
    stars: 5,
  },
  {
    text: "Me hicieron un implante dental y el resultado es perfecto. No sentí dolor y la recuperación fue rapidísima. Profesionales de verdad que te explican todo paso a paso.",
    name: "Elena Rodríguez",
    location: "Puertollano",
    stars: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      id="testimonios"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--dental-gradient-section)" }}
    >
      <div className="container mx-auto max-w-3xl text-center relative">
        <Quote className="w-16 h-16 text-secondary/10 absolute -top-2 left-0 lg:left-8" />

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-secondary italic leading-relaxed px-4">
              "{t.text}"
            </p>
            <div className="flex justify-center gap-1 mt-6">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-dental-gold text-dental-gold" />
              ))}
            </div>
            <p className="text-secondary font-heading font-semibold mt-4">{t.name}</p>
            <p className="text-secondary/70 text-sm">{t.location}</p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={prev} aria-label="Anterior" className="p-2 text-secondary/80 hover:text-secondary transition">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-secondary scale-110" : "bg-secondary/40"}`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Siguiente" className="p-2 text-secondary/80 hover:text-secondary transition">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
