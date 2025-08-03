import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Cpu, MapPin, Puzzle, ArrowRight, Tag, Wifi, Activity, Layers, Volume2, Lightbulb, Hand, Plug, Shield as ShieldIcon, Circle } from "lucide-react";

const categories = [
  { id: "all", label: "Todos los productos" },
  { id: "panels", label: "Paneles de Control" },
  { id: "detectors", label: "Detectores" },
  { id: "accessories", label: "Accesorios y Módulos" },
  { id: "ibms", label: "Sistemas IBMS" },
  { id: "frontend", label: "Sistemas Frontend" }
];

const controlPanels = [
  {
    id: "teleone",
    name: "TELEONE",
    badge: "Serie 7000",
    badgeColor: "bg-telefire-blue",
    description: "Panel de control de detección de incendios analógico direccionable avanzado con capacidad para múltiples zonas.",
    certification: "EN-54 | UL",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "panels"
  },
  {
    id: "tpb-800asr",
    name: "TPB-800ASR",
    badge: "Avanzado",
    badgeColor: "bg-green-600",
    description: "Panel de alarma contra incendios con capacidades de comunicación avanzadas y monitoreo remoto.",
    certification: "Conectividad IoT",
    image: "https://images.unsplash.com/photo-1562907550-096d3bf9b25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "panels"
  },
  {
    id: "serie-7000-pro",
    name: "Serie 7000 Pro",
    badge: "Premium",
    badgeColor: "bg-purple-600",
    description: "Sistema de control profesional para instalaciones complejas con integración BMS completa.",
    certification: "Integración BMS",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "panels"
  }
];

const detectors = [
  {
    id: "tdm-500i",
    name: "TDM-500i",
    description: "Detector de humo inteligente con comunicación bidireccional",
    certification: "Certificado EN-54",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    category: "detectors"
  },
  {
    id: "heat-detector",
    name: "Detector de Calor",
    description: "Sensor térmico de alta precisión para ambientes especiales",
    certification: "Rango -40°C a 85°C",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    category: "detectors"
  },
  {
    id: "gas-detector",
    name: "Detector de Gases",
    description: "Detección multigas para aplicaciones industriales",
    certification: "Industrial Grade",
    image: "https://pixabay.com/get/g48436d5f2034834cd291b1ab97b52e0100642d01c737e72d9c19827d40d07cf871b5a1e0d2ae17a039f6a09bd667bac7b65ee32737b3aa3b2bfd67e2af2fc69f_1280.jpg",
    category: "detectors"
  },
  {
    id: "multi-sensor",
    name: "Multisensor",
    description: "Detección combinada de humo, calor y monóxido de carbono",
    certification: "Triple detección",
    image: "https://pixabay.com/get/g2c302faedf773add1548086b1f840a56891ca6d86947bd691dd90af06df42fa1013b337a6a00d92ab8f9db8289c014a1e0b4227d2e9af2dc8b168a7664c44647_1280.jpg",
    category: "detectors"
  }
];

const accessories = [
  { name: "Sirenas", description: "Notificación audible", icon: Volume2, color: "text-telefire-red" },
  { name: "Estrobos", description: "Alerta visual", icon: Lightbulb, color: "text-yellow-500" },
  { name: "Pulsadores", description: "Activación manual", icon: Hand, color: "text-telefire-blue" },
  { name: "Módulos", description: "Interfaz de control", icon: Plug, color: "text-green-600" },
  { name: "Aisladores", description: "Protección de línea", icon: ShieldIcon, color: "text-purple-600" },
  { name: "Bases", description: "Montaje de detectores", icon: Circle, color: "text-gray-600" }
];

const ibmsSystems = [
  {
    id: "sniper",
    name: "SNIPER",
    badge: "IBMS Integrado",
    badgeColor: "bg-purple-600",
    description: "Sistema integrado de gestión de edificios que combina seguridad y eficiencia operacional con capacidades de vanguardia.",
    certification: "Gestión Unificada",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "ibms"
  },
  {
    id: "bms-integration",
    name: "Integración BMS",
    badge: "Conectividad",
    badgeColor: "bg-telefire-blue",
    description: "Plataforma abierta para integración con controladores de terceros, proporcionando una vista unificada.",
    certification: "API Abierta",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "ibms"
  }
];

const frontendSystems = [
  {
    id: "alerto-plus",
    name: "Alerto+",
    badge: "Usuario Final",
    badgeColor: "bg-green-600",
    description: "Solución orientada al usuario final para mejorar la accesibilidad en detección y control de incendios.",
    certification: "Interfaz Intuitiva",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "frontend"
  },
  {
    id: "see-system",
    name: "SEE",
    badge: "Monitoreo",
    badgeColor: "bg-orange-600",
    description: "Sistema de monitoreo avanzado con capacidades de visualización en tiempo real.",
    certification: "Tiempo Real",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "frontend"
  }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPanels = activeCategory === "all" || activeCategory === "panels" ? controlPanels : [];
  const filteredDetectors = activeCategory === "all" || activeCategory === "detectors" ? detectors : [];
  const filteredIbms = activeCategory === "all" || activeCategory === "ibms" ? ibmsSystems : [];
  const filteredFrontend = activeCategory === "all" || activeCategory === "frontend" ? frontendSystems : [];
  const showAccessories = activeCategory === "all" || activeCategory === "accessories";

  return (
    <section id="productos" className="py-20 bg-gray-50 relative">
      {/* Decorative side elements */}
      <div className="absolute left-4 top-1/4 opacity-10">
        <svg width="40" height="100" viewBox="0 0 40 100" className="text-telefire-blue">
          <path d="M0,0 L40,50 L0,100" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
      <div className="absolute right-4 top-1/3 opacity-10">
        <svg width="40" height="80" viewBox="0 0 40 80" className="text-telefire-blue">
          <path d="M40,0 L0,40 L40,80" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 section-reveal">
          <div className="text-telefire-blue font-semibold text-sm uppercase tracking-wide mb-4">NUESTROS PRODUCTOS</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Productos de Protección contra Incendios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desarrollador y fabricante experimentado de paneles de control, detectores 
            y servicios basados en la nube certificados y probados
          </p>
        </div>

        {/* Product Categories */}
        <div className="mb-12 section-reveal">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={activeCategory === category.id 
                  ? "bg-telefire-blue text-white" 
                  : "bg-white text-telefire-blue border-telefire-blue hover:bg-telefire-blue hover:text-white"
                }
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Control Panels */}
        {filteredPanels.length > 0 && (
          <div className="mb-16 section-reveal">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-telefire-blue rounded-lg flex items-center justify-center mr-4">
                <Cpu className="text-white h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Paneles de Control</h3>
            </div>
            <p className="text-gray-600 mb-8">
              Explore nuestros Paneles Serie 7000, una suite completa de Paneles de Control Inteligentes 
              Analógicos Direccionables avanzados diseñados para satisfacer las diversas necesidades de diferentes escalas de proyectos.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPanels.map((panel) => (
                <Card key={panel.id} className="group product-card">
                  <CardHeader className="p-0">
                    <img 
                      src={panel.image} 
                      alt={panel.name} 
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-900">{panel.name}</h4>
                      <Badge className={`${panel.badgeColor} text-white`}>
                        {panel.badge}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{panel.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Tag className="mr-2 h-4 w-4" />
                        <span>{panel.certification}</span>
                      </div>
                      <Button variant="ghost" className="text-telefire-blue font-semibold hover:text-telefire-red">
                        Ver detalles <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Detectors */}
        {filteredDetectors.length > 0 && (
          <div className="mb-16 section-reveal">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-telefire-red rounded-lg flex items-center justify-center mr-4">
                <MapPin className="text-white h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Detectores</h3>
            </div>
            <p className="text-gray-600 mb-8">
              Experimente la tecnología de vanguardia en nuestra gama de detectores, estableciendo nuevos puntos de referencia 
              en precisión, confiabilidad y cumplimiento.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDetectors.map((detector) => (
                <Card key={detector.id} className="group product-card">
                  <CardHeader className="p-0">
                    <img 
                      src={detector.image} 
                      alt={detector.name} 
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{detector.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{detector.description}</p>
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <Tag className="mr-1 h-3 w-3 text-green-500" />
                      <span>{detector.certification}</span>
                    </div>
                    <Button size="sm" className="w-full bg-telefire-blue hover:bg-blue-700">
                      Ver especificaciones
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* IBMS Systems */}
        {filteredIbms.length > 0 && (
          <div className="mb-16 section-reveal">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <Layers className="text-white h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Sistemas IBMS</h3>
            </div>
            <p className="text-gray-600 mb-8">
              Desarrollador experimentado de software avanzado y probado de Sistema Integrado de Gestión de Edificios (IBMS), 
              integrando sin problemas la seguridad y la eficiencia operacional.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {filteredIbms.map((system) => (
                <Card key={system.id} className="group product-card">
                  <CardHeader className="p-0">
                    <img 
                      src={system.image} 
                      alt={system.name} 
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-900">{system.name}</h4>
                      <Badge className={`${system.badgeColor} text-white`}>
                        {system.badge}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{system.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Tag className="mr-2 h-4 w-4" />
                        <span>{system.certification}</span>
                      </div>
                      <Button variant="ghost" className="text-telefire-blue font-semibold hover:text-telefire-red">
                        Ver detalles <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Frontend Systems */}
        {filteredFrontend.length > 0 && (
          <div className="mb-16 section-reveal">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                <Activity className="text-white h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Sistemas Frontend</h3>
            </div>
            <p className="text-gray-600 mb-8">
              La categoría de Sistemas Frontend comprende soluciones orientadas al usuario como Alerto+ para usuarios finales, 
              SEE y el Módulo de Incendios Sniper, diseñados para mejorar la accesibilidad y usabilidad.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {filteredFrontend.map((system) => (
                <Card key={system.id} className="group product-card">
                  <CardHeader className="p-0">
                    <img 
                      src={system.image} 
                      alt={system.name} 
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-900">{system.name}</h4>
                      <Badge className={`${system.badgeColor} text-white`}>
                        {system.badge}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{system.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Tag className="mr-2 h-4 w-4" />
                        <span>{system.certification}</span>
                      </div>
                      <Button variant="ghost" className="text-telefire-blue font-semibold hover:text-telefire-red">
                        Ver detalles <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Accessories and Modules */}
        {showAccessories && (
          <div className="section-reveal">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <Puzzle className="text-white h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Accesorios y Módulos</h3>
            </div>
            <p className="text-gray-600 mb-8">
              Descubra nuestra amplia gama de accesorios y módulos, revelando soluciones analógicas direccionables avanzadas 
              que se integran perfectamente en los sistemas de alarma contra incendios.
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {accessories.map((accessory, index) => {
                const IconComponent = accessory.icon;
                return (
                  <Card key={index} className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-0">
                      <IconComponent className={`h-8 w-8 mx-auto mb-3 ${accessory.color}`} />
                      <h5 className="font-semibold text-gray-900 mb-2">{accessory.name}</h5>
                      <p className="text-xs text-gray-600">{accessory.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
