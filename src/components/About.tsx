import { motion } from "framer-motion";

const stats = [
  { number: "15+", label: "Años" },
  { number: "12,000+", label: "Pacientes" },
  { number: "98%", label: "Satisfacción" },
];

const About = () => (
  <section id="nosotros" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80"
            alt="Equipo profesional de la clínica dental"
            className="w-full rounded-xl object-cover aspect-[4/3]"
            style={{ boxShadow: "var(--dental-shadow-lg)" }}
            loading="lazy"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2 className="text-[28px] md:text-[32px] lg:text-4xl font-heading font-bold text-dental-navy mb-6">
            Clínica Dental de Confianza Desde 2010
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Somos un equipo de profesionales apasionados por la odontología moderna. Desde nuestra fundación, hemos 
              atendido a más de 12,000 pacientes, brindando tratamientos de la más alta calidad en un entorno cálido y acogedor.
            </p>
            <p>
              Contamos con la tecnología más avanzada del sector, incluyendo escáneres intraorales 3D, radiología digital 
              y sistemas de planificación asistida por ordenador para ofrecer resultados precisos y predecibles.
            </p>
            <p>
              Nuestro compromiso es ofrecer una experiencia dental sin estrés, con un trato cercano y personalizado que 
              hace de cada visita una experiencia confortable.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl lg:text-3xl font-heading font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
