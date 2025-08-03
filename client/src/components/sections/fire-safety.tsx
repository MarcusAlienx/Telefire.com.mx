import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, ArrowRight } from "lucide-react";

export default function FireSafety() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="seguridad-incendios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="section-reveal">
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Sistemas probados de protección contra incendios" 
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
          
          {/* Content */}
          <div className="section-reveal">
            <div className="text-telefire-red font-semibold text-sm uppercase tracking-wide mb-4">LA SEGURIDAD ES LO PRIMERO</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Protección contra Incendios Probada</h2>
            <p className="text-xl text-gray-600 mb-6">
              Telefire es la empresa líder israelí en diseño y fabricación de sistemas de detección de incendios.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Con más de 40 años de experiencia, Telefire es líder en Israel en diseño y fabricación de sistemas 
              de detección de incendios de alta calidad, probados y fiables. Junto con nuestros paneles de control 
              y detectores, que cumplen las normas EN-54 y UL, también suministramos una gama completa de productos 
              auxiliares, incluidos paneles de control de humos UUKL a la medida, sistemas de evacuación por voz, 
              accesorios y mucho más.
            </p>
            <Card className="mb-8 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Cloud className="text-telefire-blue h-8 w-8" />
                  <h4 className="text-lg font-semibold text-gray-900">Servicios en la Nube</h4>
                </div>
                <p className="text-gray-600">
                  Los paneles de control de incendios de Telefire son accesibles en cualquier momento y lugar, 
                  gracias a los servicios ciberseguros basados en la nube.
                </p>
              </CardContent>
            </Card>
            <Button 
              size="lg"
              className="bg-telefire-blue hover:bg-blue-700"
              onClick={() => scrollToSection('#productos')}
            >
              Explorar productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
