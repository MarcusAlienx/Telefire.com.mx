import { Card, CardContent } from "@/components/ui/card";
import { Tag, Shield, Flame, CheckCircle } from "lucide-react";
import aboutImage from "@assets/assets/about-img-e1670764922545.jpg.webp";

const certifications = [
  {
    name: "ISO 9001:2015",
    icon: Tag,
    color: "bg-telefire-blue"
  },
  {
    name: "ISO 27001",
    icon: Shield,
    color: "bg-green-600"
  },
  {
    name: "EN-54",
    icon: Flame,
    color: "bg-orange-600"
  },
  {
    name: "UL Standards",
    icon: CheckCircle,
    color: "bg-purple-600"
  }
];

export default function About() {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="section-reveal">
            <img 
              src={aboutImage} 
              alt="Acerca de Telefire" 
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
          
          {/* Content */}
          <div className="section-reveal">
            <div className="text-telefire-blue font-semibold text-sm uppercase tracking-wide mb-4">Acerca de TELEFIRE</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Acerca de TELEFIRE</h2>
            <p className="text-xl text-gray-600 mb-6">
              Fundada en Israel en 1979 en calidad de fabricante de equipos de detección de incendios, 
              Telefire es hoy una empresa centrada en la tecnología de gestión de edificios.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Ofrecemos a nuestros clientes tecnologías centralizadas de control y supervisión de edificios, 
              incluyendo protección contra incendios, sistemas de gestión de edificios (BMS) y seguridad, 
              ofreciendo un entorno seguro y confortable en un mundo sostenible.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Gracias a nuestra rigurosa profesionalidad junto con una innovación sin precedentes y una sólida tecnología, 
              Telefire mantiene los más altos estándares de calidad y servicios garantizando así la satisfacción del cliente.
            </p>
            
            {/* Certifications */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Certificaciones y Cumplimiento</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {certifications.map((cert, index) => {
                    const IconComponent = cert.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-2 ${cert.color}`}>
                          <IconComponent className="text-white h-6 w-6" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{cert.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
