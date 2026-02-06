import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[500px] h-[60vh] md:h-[70vh] lg:h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80')`,
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--dental-gradient-hero)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[32px] md:text-[42px] lg:text-[56px] font-heading font-bold text-secondary leading-tight"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
        >
          Su Sonrisa, Nuestra Prioridad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-base md:text-lg lg:text-xl text-secondary/95 max-w-2xl mx-auto"
        >
          Clínica dental de excelencia con más de 15 años cuidando sonrisas. Odontología de vanguardia con el toque humano que necesitas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a href="#contacto" className="bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto text-base lg:text-lg inline-flex items-center justify-center">
            Solicitar Cita
          </a>
          <a href="#servicios" className="btn-ghost w-full sm:w-auto text-base lg:text-lg">
            Conocer Servicios
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator - desktop only */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <ChevronDown className="w-8 h-8 text-accent animate-bounce-subtle" />
      </div>
    </section>
  );
};

export default Hero;
