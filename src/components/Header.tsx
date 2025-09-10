import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5562993113553", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/b45e9023-b175-46e3-b848-24136d4015c0.png" 
            alt="SolidezCred Logo" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-semibold text-primary">SolidezCred</span>
        </div>
        
        <Button 
          onClick={handleWhatsAppClick}
          className="btn-whatsapp"
          size="sm"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>
      </div>
    </header>
  );
};

export default Header;