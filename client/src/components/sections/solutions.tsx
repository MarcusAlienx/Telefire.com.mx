import { Shield, Building, Flame } from "lucide-react";

const solutions = [
  {
    icon: Flame,
    title: "Protección contra incendios",
    description: "Experto desarrollador y fabricante de paneles de control de detección de incendios, detectores y servicios basados en la nube certificados y probados.",
    color: "text-telefire-red"
  },
  {
    icon: Building,
    title: "Sistemas de gestión de edificios (BMS)",
    description: "BMS abierto para una fácil integración en controladores de otros fabricantes, ofreciendo así una visión unificada del sistema de gestión de edificios BMS, sistemas de protección contra incendios y de seguridad.",
    color: "text-telefire-blue"
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Software de seguridad abierto con diversos módulos que incluyen control de acceso CCTV, LPR, intrusión, gestión de visitantes, gestión de trabajadores y más, totalmente integrado en equipos de terceros.",
    color: "text-green-600"
  }
];

export default function Solutions() {
  return (
    <section id="soluciones" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-reveal">
          <div className="text-telefire-blue font-semibold text-sm uppercase tracking-wide mb-4">QUÉ HACEMOS</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Sistema Inteligente de Gestión<br/>
            de Edificios (IBMS)
          </h2>
          <div className="text-xl text-gray-600 space-y-2">
            <p className="font-semibold">El control que necesitas.</p>
            <p className="font-semibold">El confort que mereces.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="text-center group section-reveal">
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-telefire-blue transition-colors duration-300">
                  <IconComponent className={`h-8 w-8 ${solution.color} group-hover:text-white`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
