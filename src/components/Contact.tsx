import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.telefono.trim()) {
      toast({ title: "Error", description: "Por favor, completa los campos obligatorios.", variant: "destructive" });
      return;
    }
    toast({ title: "¡Mensaje enviado!", description: "Nos pondremos en contacto contigo lo antes posible." });
    setForm({ nombre: "", telefono: "", email: "", mensaje: "" });
  };

  const info = [
    { icon: MapPin, label: "Dirección", value: "C/ Mayor, 15, 13500 Puertollano, Ciudad Real" },
    { icon: Phone, label: "Teléfono", value: "912 345 678", href: "tel:+34912345678" },
    { icon: Mail, label: "Email", value: "info@sonriedent.es", href: "mailto:info@sonriedent.es" },
    { icon: Clock, label: "Horario", value: "Lun-Vie: 9:00-20:00 · Sáb: 9:00-14:00" },
  ];

  return (
    <section id="contacto" className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-heading">Contacta con Nosotros</h2>
          <p className="section-subheading">
            Estamos aquí para ayudarte. Solicita tu cita o envíanos cualquier consulta.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Nombre completo *"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full px-4 py-3.5 rounded-lg border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition"
                required
                maxLength={100}
              />
              <input
                type="tel"
                placeholder="Teléfono *"
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                className="w-full px-4 py-3.5 rounded-lg border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition"
                required
                maxLength={20}
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3.5 rounded-lg border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition"
              maxLength={255}
            />
            <textarea
              placeholder="Tu mensaje..."
              rows={5}
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              className="w-full px-4 py-3.5 rounded-lg border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition resize-none"
              maxLength={1000}
            />
            <button type="submit" className="btn-primary w-full sm:w-auto !py-3.5 gap-2">
              <Send className="w-4 h-4" /> Enviar Mensaje
            </button>
          </motion.form>

          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-dental-navy">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-muted-foreground hover:text-primary transition text-sm">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-xl overflow-hidden"
        >
          <iframe
            title="Ubicación de SonríeDent"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.5!2d-4.1!3d38.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQwJzQ4LjAiTiA0wrAwNicwMC4wIlc!5e0!3m2!1ses!2ses!4v1600000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="lg:h-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
