import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5562993113553", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="rounded-full h-16 w-16 p-0 btn-whatsapp shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;