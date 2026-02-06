import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/34912345678?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cita"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-5 right-5 z-[1000] w-14 h-14 lg:w-[60px] lg:h-[60px] rounded-full bg-dental-whatsapp flex items-center justify-center shadow-[0_4px_12px_rgba(37,211,102,0.4)] whatsapp-pulse hover:scale-110 transition-transform"
  >
    <MessageCircle className="w-7 h-7 text-secondary fill-secondary" />
  </a>
);

export default WhatsAppButton;
