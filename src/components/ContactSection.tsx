import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5562993113553", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:solidezcredcca@gmail.com", "_blank");
  };

  const handleMapsClick = () => {
    window.open("https://maps.google.com/?q=Avenida+Itália+1876+Jd+Europa+Goiânia+GO", "_blank");
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Estamos prontos para ajudar você a conquistar seus objetivos financeiros
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-blue-100 mb-3">(62) 99311-3553</p>
                <Button 
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  Conversar Agora
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                <p className="text-blue-100 mb-3">solidezcredcca@gmail.com</p>
                <Button 
                  onClick={handleEmailClick}
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  Enviar E-mail
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                <p className="text-blue-100 mb-3">
                  Avenida Itália Nº1876, QD: 93 LT:06<br />
                  Jd. Europa, Goiânia - Goiás
                </p>
                <Button 
                  onClick={handleMapsClick}
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  Ver no Mapa
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Horário de Atendimento</h3>
                <p className="text-blue-100">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para começar?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Entre em contato conosco e descubra como podemos ajudar você a realizar seus sonhos financeiros.
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full btn-whatsapp text-lg py-4"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Falar no WhatsApp
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-blue-200">
                  Ou visite nosso site: 
                  <a 
                    href="https://solidezcred.com.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:underline ml-1"
                  >
                    solidezcred.com.br
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;