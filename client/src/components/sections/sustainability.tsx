import { Leaf, Recycle, Shield, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Leaf,
    title: "Cumplimiento Ambiental",
    description: "Telefire cumple todas las normas medioambientales ofreciendo un entorno doméstico y laboral más cómodo, un entorno físico más seguro y mayor protección cibernética.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Recycle,
    title: "Productos Libres de Plomo",
    description: "Los productos de Telefire no contienen plomo y están fabricados con material y envases reutilizados, contribuyendo a la economía circular.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Shield,
    title: "Protección Cibernética",
    description: "Sistemas seguros que protegen tanto el medio ambiente físico como digital, garantizando la seguridad integral de las instalaciones.",
    color: "bg-purple-100 text-purple-600"
  }
];

export default function Sustainability() {
  return (
    <section id="sostenibilidad" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-reveal">
          <div className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-4">ESTRATEGIA DE SOSTENIBILIDAD DE TELEFIRE</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Sostenibilidad</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Los productos y soluciones de Telefire se han diseñado prestando especial atención a la protección del medio ambiente.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="text-center shadow-lg section-reveal">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${benefit.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Net Zero */}
          <div className="section-reveal">
            <Card className="bg-gradient-to-r from-telefire-blue to-blue-600 text-white shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">CERO NETO</h3>
                </div>
                <p className="text-lg opacity-90">
                  Entornos más limpios que consumen menos energía contribuyen a crear edificios cero neto, 
                  reduciendo la huella de carbono y promoviendo la sostenibilidad.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Energy Utilization */}
          <div className="section-reveal">
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">USO DE LA ENERGÍA</h3>
                </div>
                <p className="text-lg opacity-90">
                  Nuestros productos minimizan el consumo de energía y reducen los costes de funcionamiento, 
                  optimizando la eficiencia energética en todas las operaciones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
