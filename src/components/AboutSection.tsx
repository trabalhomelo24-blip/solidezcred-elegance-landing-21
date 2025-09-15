import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Target, Users } from "lucide-react";
import lorraneProfile from "@/assets/lorrane-profile.png";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossa Especialista
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça a profissional que está à frente dos seus sonhos financeiros
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-2xl bg-card/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/5] lg:aspect-auto lg:h-full bg-gradient-to-br from-primary/10 to-primary/5">
                    <img
                      src={lorraneProfile}
                      alt="Lorrane Furtado - Correspondente Bancária"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out animate-fade-in"
                    />
                  </div>
                  <div className="absolute top-6 right-6">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      Correspondente Oficial
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">
                        Lorrane Furtado
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-4">
                        Correspondente Bancária Especializada
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Com anos de experiência no mercado financeiro, Lorrane é especialista em 
                        crédito imobiliário e financiamentos. Sua dedicação e conhecimento técnico 
                        garantem as melhores condições e orientação personalizada para cada cliente.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">+5 Anos</p>
                          <p className="text-sm text-muted-foreground">Experiência</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">500+</p>
                          <p className="text-sm text-muted-foreground">Famílias Atendidas</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Award className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Certificada</p>
                          <p className="text-sm text-muted-foreground">BACEN</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Target className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">98%</p>
                          <p className="text-sm text-muted-foreground">Aprovação</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h4 className="font-semibold text-foreground mb-3">Especialidades:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Financiamento Imobiliário</Badge>
                        <Badge variant="outline">Crédito Rural</Badge>
                        <Badge variant="outline">Consignado</Badge>
                        <Badge variant="outline">Refinanciamento</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;