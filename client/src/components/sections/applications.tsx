import { Building, Factory, Briefcase, School, Cog } from "lucide-react";

const applications = [
  {
    id: "high-rise",
    title: "Gran Altura",
    description: "Rascacielos y edificios residenciales complejos",
    icon: Building,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    color: "bg-telefire-blue hover:bg-blue-700"
  },
  {
    id: "industry",
    title: "Industria",
    description: "Plantas manufactureras y complejos industriales",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    color: "bg-orange-600 hover:bg-orange-700"
  },
  {
    id: "trade-business",
    title: "Comercio y Negocios",
    description: "Centros comerciales y edificios de oficinas",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    color: "bg-green-600 hover:bg-green-700"
  },
  {
    id: "public",
    title: "Instituciones Públicas",
    description: "Hospitales, escuelas y edificios gubernamentales",
    icon: School,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    color: "bg-purple-600 hover:bg-purple-700"
  },
  {
    id: "infrastructure",
    title: "Infraestructura",
    description: "Instalaciones críticas y centros de datos",
    icon: Cog,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    color: "bg-red-600 hover:bg-red-700"
  }
];

export default function Applications() {
  return (
    <section id="aplicaciones" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-reveal">
          <div className="text-telefire-blue font-semibold text-sm uppercase tracking-wide mb-4">QUÉ OFRECEMOS</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Aplicaciones</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro versátil sistema se puede personalizar para ofrecer soluciones a medida que den respuesta 
            a una amplia variedad de sectores industriales y necesidades de los clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {applications.map((application) => {
            const IconComponent = application.icon;
            return (
              <div key={application.id} className="text-center group section-reveal">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={application.image} 
                    alt={application.title} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${application.color}`}>
                  <IconComponent className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{application.title}</h3>
                <p className="text-gray-600 text-sm">{application.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
