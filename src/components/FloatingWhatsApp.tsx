import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5562993113553", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Círculo de pulso para indicar atendimento online */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"></div>
      
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="rounded-full h-16 w-16 p-0 btn-whatsapp shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce"
        aria-label="Conversar no WhatsApp - Atendimento Online"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
      
      {/* Tooltip para indicar atendimento */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Atendimento Online
      </div>
    </div>
  );
};

export default FloatingWhatsApp;