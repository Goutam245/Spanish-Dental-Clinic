import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80", alt: "Recepción moderna de la clínica", tall: true },
  { src: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=600&q=80", alt: "Sala de tratamiento dental" },
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80", alt: "Equipo profesional trabajando" },
  { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80", alt: "Equipamiento dental de última generación" },
  { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80", alt: "Sala de espera de la clínica", tall: true },
  { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80", alt: "Consulta dental moderna" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="galeria" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">Nuestras Instalaciones</h2>
          <p className="section-subheading">
            Espacios diseñados para tu comodidad con la tecnología más avanzada.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${img.tall ? "aspect-[3/4]" : "aspect-video"}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 right-4 text-secondary" aria-label="Cerrar">
              <X className="w-8 h-8" />
            </button>
            <img src={lightbox.replace("w=600", "w=1200")} alt="Imagen ampliada" className="max-w-full max-h-[90vh] rounded-lg object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
