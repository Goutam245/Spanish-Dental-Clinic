import { motion } from "framer-motion";

const team = [
  {
    name: "Dra. Ana García",
    specialty: "Directora Médica · Implantología",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80",
  },
  {
    name: "Dr. Carlos Ruiz",
    specialty: "Ortodoncia · Invisalign",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80",
  },
  {
    name: "Dra. Laura Martínez",
    specialty: "Estética Dental · Periodoncia",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=400&q=80",
  },
  {
    name: "Dr. Miguel Torres",
    specialty: "Endodoncia · Cirugía Oral",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
  },
];

const Team = () => (
  <section id="equipo" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading">Nuestro Equipo Profesional</h2>
        <p className="section-subheading">
          Un equipo multidisciplinar comprometido con la excelencia y la formación continua.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group text-center"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="mt-4 text-lg lg:text-xl font-heading font-semibold text-dental-navy">
              {member.name}
            </h3>
            <p className="text-primary text-sm lg:text-[15px] mt-1">{member.specialty}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
