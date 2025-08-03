import { Plus, Settings, Wrench, Link, Shield } from "lucide-react";

const advantages = [
  {
    icon: Settings,
    title: "Fácil Instalación y Configuración",
    description: "Nuestros productos están diseñados para una instalación rápida y configuración intuitiva, reduciendo tiempos y costos de implementación."
  },
  {
    icon: Wrench,
    title: "Mantenimiento Simplificado", 
    description: "Sistema de diagnóstico avanzado que permite mantenimiento predictivo y reduce las intervenciones no programadas."
  },
  {
    icon: Link,
    title: "Integración Completa",
    description: "Plataforma unificada que integra sistemas de incendios, seguridad y gestión de edificios en una sola solución."
  },
  {
    icon: Shield,
    title: "Ciberseguridad Avanzada",
    description: "Cumplimiento con estándares UL-2900 de ciberseguridad, protegiendo sus sistemas contra amenazas digitales."
  }
];

export default function Advantages() {
  return (
    <section id="ventajas" className="py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-5">
        <div className="text-6xl font-bold text-telefire-blue">+</div>
      </div>
      <div className="absolute top-32 right-20 opacity-5">
        <div className="text-6xl font-bold text-telefire-blue">+</div>
      </div>
      <div className="absolute bottom-20 left-32 opacity-5">
        <div className="text-6xl font-bold text-telefire-blue">+</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 section-reveal">
          <div className="text-telefire-blue font-semibold text-sm uppercase tracking-wide mb-4">POR QUÉ TELEFIRE</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestras Ventajas</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Nuestro sistema integrado reduce la vulnerabilidad frente a incidentes de seguridad, incendios y cibernéticos, 
            aumenta la eficiencia de los sistemas operativos y reduce el consumo energético para contribuir a que los edificios 
            avancen hacia la neutralidad climática (cero neto).
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Advantages list */}
          <div className="section-reveal">
            <div className="space-y-8">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-telefire-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <Plus className="text-white h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Image */}
          <div className="section-reveal">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Sistema de gestión integrado" 
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
