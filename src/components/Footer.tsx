import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const links = ["Inicio", "Nosotros", "Servicios", "Equipo", "Testimonios", "Galería", "Contacto"];
  const services = ["Ortodoncia", "Implantes", "Estética Dental", "Endodoncia", "Periodoncia", "Odontopediatría"];

  return (
    <footer className="bg-dental-navy text-secondary/80">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold">S</span>
              </div>
              <span className="font-heading font-bold text-lg text-secondary">SonríeDent</span>
            </div>
            <p className="text-sm leading-relaxed text-secondary/60">
              Tu clínica dental de confianza en Puertollano. Más de 15 años cuidando sonrisas con la mejor tecnología y un equipo humano excepcional.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-secondary mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm hover:text-accent transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-secondary mb-4">Servicios</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-secondary mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-dental-gold flex-shrink-0" />
                <span>C/ Mayor, 15, 13500 Puertollano, Ciudad Real</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-dental-gold flex-shrink-0" />
                <a href="tel:+34912345678" className="hover:text-accent transition">912 345 678</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-dental-gold flex-shrink-0" />
                <a href="mailto:info@sonriedent.es" className="hover:text-accent transition">info@sonriedent.es</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-secondary/40">
          <span>© 2025 SonríeDent. Todos los derechos reservados.</span>
          <span className="mt-2 sm:mt-0">Diseñado con ❤️ para tu sonrisa</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
