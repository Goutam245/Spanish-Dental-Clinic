import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "🦷",
    title: "Ortodoncia",
    description: "Brackets metálicos, cerámicos e Invisalign para alinear tu sonrisa con las técnicas más avanzadas y cómodas.",
  },
  {
    icon: "⚙️",
    title: "Implantes Dentales",
    description: "Recupera piezas perdidas con implantes de titanio de última generación. Resultados naturales y duraderos.",
  },
  {
    icon: "✨",
    title: "Estética Dental",
    description: "Blanqueamientos profesionales, carillas de porcelana y diseño de sonrisa digital para una estética perfecta.",
  },
  {
    icon: "🔬",
    title: "Endodoncia",
    description: "Tratamientos de conductos con microscopio dental para salvar piezas dañadas de forma precisa e indolora.",
  },
  {
    icon: "🩺",
    title: "Periodoncia",
    description: "Cuidado integral de las encías. Tratamientos de gingivitis y periodontitis con técnicas mínimamente invasivas.",
  },
  {
    icon: "👶",
    title: "Odontopediatría",
    description: "Cuidado dental especializado para los más pequeños en un ambiente divertido y sin miedo.",
  },
];

const Services = () => (
  <section id="servicios" className="section-padding bg-muted">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading">Nuestros Servicios</h2>
        <p className="section-subheading">
          Ofrecemos una gama completa de tratamientos dentales con la tecnología más avanzada y un equipo altamente cualificado.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="dental-card group cursor-pointer border-2 border-transparent hover:border-primary/20"
          >
            <span className="text-4xl lg:text-5xl">{service.icon}</span>
            <h3 className="text-xl lg:text-[22px] font-heading font-semibold text-dental-navy mt-5">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-[15px] leading-relaxed mt-3">
              {service.description}
            </p>
            <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
              Más información <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
