import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Building, Users, CheckCircle } from "lucide-react";

const caseStudies = [
  {
    id: "torre-corporativa",
    title: "Torre Corporativa Ciudad de México",
    location: "CDMX, México",
    category: "Edificios Corporativos",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    description: "Implementación completa de sistema IBMS integrando protección contra incendios, seguridad y gestión energética en un edificio de 40 pisos.",
    results: [
      "Reducción de 35% en consumo energético",
      "100% cobertura de detección de incendios",
      "Integración con 15 sistemas diferentes"
    ],
    products: ["SNIPER IBMS", "Serie 7000", "Detectores TDM-500i"]
  },
  {
    id: "centro-comercial",
    title: "Centro Comercial Monterrey",
    location: "Monterrey, México",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    description: "Sistema de seguridad y protección contra incendios para centro comercial con más de 200 locales comerciales y flujo de 50,000 visitantes diarios.",
    results: [
      "Tiempo de respuesta < 30 segundos",
      "0 falsos positivos en 2 años",
      "Certificación internacional"
    ],
    products: ["TELEONE", "Sistema SEE", "Control de Acceso"]
  },
  {
    id: "hospital-publico",
    title: "Hospital General Guadalajara",
    location: "Guadalajara, México",
    category: "Salud Pública",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    description: "Instalación crítica con sistemas redundantes de detección y notificación para garantizar la seguridad de pacientes y personal médico.",
    results: [
      "99.9% tiempo operativo",
      "Certificación hospitalaria",
      "Integración con sistemas médicos"
    ],
    products: ["Serie 7000 Pro", "Alerto+", "Evacuación por Voz"]
  }
];

export default function CaseStudies() {
  return (
    <section id="casos-estudio" className="py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 opacity-5">
        <svg width="80" height="80" viewBox="0 0 100 100" className="text-telefire-blue">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1"/>
          <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.3"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 section-reveal">
          <div className="text-telefire-blue font-semibold text-sm uppercase tracking-wide mb-4">CASOS DE ÉXITO</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Proyectos Exitosos en México</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra cómo nuestras soluciones han transformado edificios y garantizado la seguridad 
            en proyectos emblemáticos a lo largo del país.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 section-reveal">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{study.location}</span>
                  </div>
                  <div className="bg-telefire-blue px-3 py-1 rounded-full text-xs font-semibold">
                    {study.category}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {study.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Resultados Clave:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Productos Utilizados:</h4>
                  <div className="flex flex-wrap gap-1">
                    {study.products.map((product, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="text-telefire-blue font-semibold hover:text-telefire-red w-full justify-between"
                >
                  Ver caso completo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 section-reveal">
          <Button 
            size="lg"
            className="bg-telefire-blue hover:bg-blue-700"
            onClick={() => {
              const element = document.querySelector('#socio');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Ver más casos de estudio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}