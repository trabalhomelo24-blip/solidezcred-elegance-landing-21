import { Home, CreditCard, Building2, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Financiamento Habitacional",
      description: "Realize o sonho da casa própria com as melhores condições do mercado. Taxas competitivas e processos simplificados.",
    },
    {
      icon: CreditCard,
      title: "Empréstimos Consignados",
      description: "Crédito facilitado com desconto direto na folha. Taxas reduzidas e aprovação rápida para servidores públicos e aposentados.",
    },
    {
      icon: Building2,
      title: "Abertura de Contas",
      description: "Abra sua conta de forma digital e tenha acesso a produtos bancários exclusivos com toda comodidade.",
    },
    {
      icon: Users,
      title: "Consórcio",
      description: "Conquiste seus objetivos através do consórcio. Modalidades para veículos, imóveis e serviços com parcelas que cabem no seu bolso.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções financeiras completas para realizar seus sonhos e projetos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;