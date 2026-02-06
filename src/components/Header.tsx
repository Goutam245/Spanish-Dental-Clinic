import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-secondary shadow-[var(--dental-shadow)] h-[70px] lg:h-[80px]"
            : "bg-transparent h-[70px] lg:h-[80px]"
        }`}
      >
        <div className="container mx-auto h-full flex items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">S</span>
            </div>
            <span className={`font-heading font-bold text-xl transition-colors ${scrolled ? "text-dental-navy" : "text-secondary"}`}>
              SonríeDent
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-[15px] tracking-wide font-medium transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  scrolled ? "text-dental-charcoal hover:text-dental-blue" : "text-secondary/90 hover:text-secondary"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+34912345678" className={`flex items-center gap-2 text-sm font-medium transition-colors ${scrolled ? "text-dental-charcoal" : "text-secondary"}`}>
              <Phone className="w-4 h-4" />
              912 345 678
            </a>
            <a href="#contacto" className="btn-primary text-sm !px-6 !py-3">
              Reservar Cita
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 z-50"
            aria-label="Menú"
          >
            {mobileOpen ? (
              <X className="w-7 h-7 text-dental-navy" />
            ) : (
              <Menu className={`w-7 h-7 transition-colors ${scrolled ? "text-dental-navy" : "text-secondary"}`} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-secondary flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-xl font-heading font-semibold text-dental-navy"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <motion.a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="btn-primary mt-10 w-64 text-center"
            >
              Reservar Cita
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
