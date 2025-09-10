import { MessageCircle, Mail, MapPin } from "lucide-react";
const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5562993113553", "_blank");
  };
  const handleEmailClick = () => {
    window.open("mailto:solidezcredcca@gmail.com", "_blank");
  };
  return <footer className="bg-primary/95 text-primary-foreground py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-semibold">SolidezCred</span>
            </div>
            <p className="text-blue-100 mb-4">
              Transformando projetos em conquistas através de soluções financeiras personalizadas.
            </p>
            <div className="text-sm text-blue-200">
              <p>CNPJ: 47.762.036/0001-76</p>
              <p className="mt-1">
                Avenida Itália Nº1876, QD: 93 LT:06<br />
                Jd. Europa, Goiânia - Goiás
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-blue-100">
              <li>Financiamento Habitacional</li>
              <li>Empréstimos Consignados</li>
              <li>Abertura de Contas</li>
              <li>Consórcio</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <button onClick={handleWhatsAppClick} className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>(62) 99311-3553</span>
              </button>
              
              <button onClick={handleEmailClick} className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>solidezcredcca@gmail.com</span>
              </button>
              
              <div className="flex items-start space-x-2 text-blue-100">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Jd. Europa, Goiânia - GO</span>
              </div>
            </div>

            <div className="mt-4">
              <a href="https://solidezcred.com.br" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                solidezcred.com.br
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">© 2025 SolidezCred. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;