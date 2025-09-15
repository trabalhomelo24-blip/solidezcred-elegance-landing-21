import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5562993113553", "_blank");
  };

  return (
    <section className="hero-section min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-950/95 to-black/90 z-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transformando
              <span className="block bg-gradient-to-r from-blue-200 to-teal-200 bg-clip-text text-transparent">
                Projetos em Conquistas
              </span>
            </h1>
          </div>
          
          <div className="fade-in fade-in-delay-1">
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Na Solidez Cred, oferecemos soluções financeiras personalizadas com 
              a confiança e credibilidade que você merece. Sua conquista é nossa missão.
            </p>
          </div>

          <div className="fade-in fade-in-delay-2">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="btn-whatsapp text-lg px-8 py-4"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Fale Conosco no WhatsApp
              </Button>
              
              <Button 
                variant="outline-white" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>

          <div className="fade-in fade-in-delay-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Segurança</h3>
                <p className="text-blue-100">Credibilidade e confiança em cada operação</p>
              </div>
              
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Resultados</h3>
                <p className="text-blue-100">Soluções que geram resultados reais</p>
              </div>
              
              <div className="text-center">
                <MessageCircle className="w-12 h-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Suporte</h3>
                <p className="text-blue-100">Atendimento personalizado e dedicado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;