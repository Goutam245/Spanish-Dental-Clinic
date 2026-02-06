import { Shield, Award, CreditCard, Clock } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { icon: Shield, label: "Tecnología 3D" },
  { icon: Award, label: "Equipo Certificado" },
  { icon: CreditCard, label: "Financiación 0%" },
  { icon: Clock, label: "15 Años Experiencia" },
];

const TrustBadges = () => (
  <section className="bg-secondary py-8 md:py-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {badges.map((badge, i) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-2"
          >
            <badge.icon className="w-10 h-10 lg:w-12 lg:h-12 text-primary" strokeWidth={1.5} />
            <span className="text-xs lg:text-sm font-medium text-muted-foreground">{badge.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
