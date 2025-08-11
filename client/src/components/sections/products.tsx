import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Cpu, MapPin, Puzzle, ArrowRight, Tag, Wifi, Activity, Layers, Volume2, Lightbulb, Hand, Plug, Shield as ShieldIcon, Circle, ShoppingCart, Plus, X } from "lucide-react";
import { useCartContext } from "@/context/cart-context";
import { useToast } from "@/hooks/use-toast";

const categories = [
  { id: "all", label: "Todos los productos" },
  { id: "panels", label: "Paneles de Control" },
  { id: "detectors", label: "Detectores" },
  { id: "accessories", label: "Accesorios y Módulos" },
  { id: "ibms", label: "Sistemas IBMS" },
  { id: "frontend", label: "Sistemas Frontend" },
  { id: "extinguishing", label: "Sistemas de Extinción" },
  { id: "services", label: "Servicios en la Nube" }
];

const controlPanels = [
  {
    id: "adr-7000",
    name: "ADR-7000",
    badge: "Escala Grande",
    badgeColor: "bg-telefire-red",
    description: "Panel avanzado hasta 8 bucles, controla hasta 1,016 dispositivos inteligentes por unidad. Red de hasta 32 paneles. Fuente de 150W expandible.",
    certification: "UL 864, EN-54, UL-2900",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "panels",
    price: "Consultar"
  },
  {
    id: "saver-7000",
    name: "SAVER-7000",
    badge: "Escala Media",
    badgeColor: "bg-telefire-blue",
    description: "Panel analógico direccionable de rango medio. Parte de la plataforma unificada serie 7000 que comparte arquitectura con ADR-7000 y GUARD-7.",
    certification: "EN-54, UL 2900",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "panels",
    price: "Consultar"
  },
  {
    id: "guard-7",
    name: "GUARD-7",
    badge: "Compacto",
    badgeColor: "bg-green-600",
    description: "Panel compacto que controla hasta 60 dispositivos de entrada/salida. Programación rápida, herramientas de diagnóstico integral, interfaz amigable.",
    certification: "EN-54, UL 2900",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "panels",
    price: "Consultar"
  },
  {
    id: "tsa-240",
    name: "TSA-240",
    badge: "Convencional",
    badgeColor: "bg-orange-600",
    description: "Panel de control de alarma contra incendios convencional. Sistema multi-zona mejorado para instalaciones tradicionales.",
    certification: "EN-54",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "panels",
    price: "Consultar"
  },
  {
    id: "tsa-200",
    name: "TSA-200",
    badge: "Convencional",
    badgeColor: "bg-purple-600",
    description: "Sistema convencional multi-zona. Solución confiable para edificios pequeños y medianos con tecnología probada.",
    certification: "EN-54",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "panels",
    price: "Consultar"
  },
  {
    id: "tsa-1000",
    name: "TSA-1000+",
    badge: "Convencional Mejorado",
    badgeColor: "bg-gray-600",
    description: "Sistema convencional mejorado con capacidades expandidas y funciones avanzadas de diagnóstico.",
    certification: "EN-54",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "panels",
    price: "Consultar"
  }
];

const detectors = [
  {
    id: "tfo-480a",
    name: "TFO-480A",
    description: "Detector fotoeléctrico de humo direccionable con alta sensibilidad y comunicación bidireccional",
    certification: "EN-54, UL",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    category: "detectors",
    price: "Consultar"
  },
  {
    id: "tfh-280a",
    name: "TFH-280A",
    description: "Detector de calor direccionable con rango de temperatura configurable y respuesta rápida",
    certification: "EN-54, UL",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    category: "detectors",
    price: "Consultar"
  },
  {
    id: "tph-482a",
    name: "TPH-482A",
    description: "Detector multisensor fotoeléctrico/calor con algoritmos avanzados de procesamiento de señales",
    certification: "EN-54, UL",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    category: "detectors",
    price: "Consultar"
  },
  {
    id: "fireray-50r",
    name: "Fireray® 50R",
    description: "Sistema de detección lineal de humo con alcance de hasta 50 metros para áreas grandes",
    certification: "EN-54, UL",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    category: "detectors",
    price: "Consultar"
  },
  {
    id: "fireray-100r",
    name: "Fireray® 100R",
    description: "Sistema de detección lineal de humo de largo alcance hasta 100 metros para instalaciones industriales",
    certification: "EN-54, UL",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    category: "detectors",
    price: "Consultar"
  },
  {
    id: "tbd-70",
    name: "TBD-70",
    description: "Detector de haz para protección de grandes áreas con tecnología infrarroja",
    certification: "EN-54",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    category: "detectors",
    price: "Consultar"
  },
  {
    id: "tsd-4040i",
    name: "TSD-4040I",
    description: "Detector de llama infrarrojo para aplicaciones industriales con alta resistencia ambiental",
    certification: "Industrial",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    category: "detectors",
    price: "Consultar"
  },
  {
    id: "lasd-kidde",
    name: "LASD Kidde",
    description: "Sistema de detección por aspiración láser para detección temprana en áreas críticas",
    certification: "EN-54, UL",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    category: "detectors",
    price: "Consultar"
  }
];

const accessories = [
  { 
    id: "adr-812a",
    name: "ADR-812A", 
    description: "Módulo de entrada para integración de sistemas", 
    icon: Plug, 
    color: "text-telefire-blue",
    price: "Consultar",
    certification: "Serie 7000"
  },
  { 
    id: "adr-818a",
    name: "ADR-818A", 
    description: "Módulo de entrada avanzado", 
    icon: Plug, 
    color: "text-green-600",
    price: "Consultar",
    certification: "Serie 7000"
  },
  { 
    id: "adr-828a",
    name: "ADR-828A", 
    description: "Módulo controlador LED para señalización", 
    icon: Lightbulb, 
    color: "text-yellow-500",
    price: "Consultar",
    certification: "Serie 7000"
  },
  { 
    id: "tfb-180sba",
    name: "TFB-180SBA", 
    description: "Sirena con estrobo integrado", 
    icon: Volume2, 
    color: "text-telefire-red",
    price: "Consultar",
    certification: "EN-54"
  },
  { 
    id: "tfs-314",
    name: "TFS-314", 
    description: "Sirena estándar de alarma", 
    icon: Volume2, 
    color: "text-telefire-red",
    price: "Consultar",
    certification: "EN-54"
  },
  { 
    id: "tfs-324",
    name: "TFS-324", 
    description: "Sirena impermeable para exteriores", 
    icon: ShieldIcon, 
    color: "text-purple-600",
    price: "Consultar",
    certification: "IP65"
  },
  { 
    id: "rm-7000",
    name: "RM-7000", 
    description: "Panel anunciador remoto con LCD", 
    icon: Circle, 
    color: "text-gray-600",
    price: "Consultar",
    certification: "Serie 7000"
  },
  { 
    id: "net-7000",
    name: "NET-7000", 
    description: "Módulo de comunicación TCP/IP", 
    icon: Wifi, 
    color: "text-blue-500",
    price: "Consultar",
    certification: "Conectividad"
  }
];

const extinguishingSystems = [
  {
    id: "firepro-tla44",
    name: "FirePro TLA-44",
    badge: "Aerosol",
    badgeColor: "bg-red-600",
    description: "Adaptador que conecta generadores FirePro a paneles Telefire. Configuraciones para 1-4 conjuntos de aerosol por adaptador.",
    certification: "Activación múltiple",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "extinguishing",
    price: "Consultar"
  },
  {
    id: "firepro-generator",
    name: "Generador FirePro",
    badge: "Extinción Limpia",
    badgeColor: "bg-green-600",
    description: "Sistema de extinción por aerosol ecológico. Activación eléctrica, térmica o manual para protección total.",
    certification: "Ecológico",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "extinguishing",
    price: "Consultar"
  }
];

const cloudServices = [
  {
    id: "telefire-connect",
    name: "Telefire Connect",
    badge: "Plataforma Cloud",
    badgeColor: "bg-telefire-blue",
    description: "Plataforma de monitoreo y gestión basada en la nube con acceso remoto ciberseguro y monitoreo continuo.",
    certification: "ISO 27001",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "services",
    price: "Suscripción"
  },
  {
    id: "teleone",
    name: "TELEONE",
    badge: "Software",
    badgeColor: "bg-purple-600",
    description: "Software de configuración avanzado para paneles Guard-7, Saver-7000 y ADR-7000. Soporta hasta 64 paneles en red.",
    certification: "Configuración remota",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "services",
    price: "Licencia"
  },
  {
    id: "backoffice",
    name: "BackOffice",
    badge: "Gestión",
    badgeColor: "bg-orange-600",
    description: "Aplicación integrada en la nube para gestión administrativa y monitoreo centralizado de instalaciones.",
    certification: "Gestión centralizada",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "services",
    price: "Suscripción"
  }
];

const ibmsSystems = [
  {
    id: "sniper",
    name: "SNIPER",
    badge: "IBMS Integrado",
    badgeColor: "bg-purple-600",
    description: "Sistema integrado de gestión de edificios que combina seguridad y eficiencia operacional con capacidades de vanguardia.",
    certification: "Gestión Unificada",
    price: "Consultar",
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
    category: "ibms",
    price: "Consultar"
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
    category: "frontend",
    price: "Consultar"
  },
  {
    id: "see-system",
    name: "SEE",
    badge: "Monitoreo",
    badgeColor: "bg-orange-600",
    description: "Sistema de monitoreo avanzado con capacidades de visualización en tiempo real.",
    certification: "Tiempo Real",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    category: "frontend",
    price: "Consultar"
  }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [showQuotation, setShowQuotation] = useState(false);
  const { items, addItem, removeItem, totalItems } = useCartContext();
  const { toast } = useToast();

  // Listen for category changes from navigation
  useEffect(() => {
    const handleCategoryChange = (event: CustomEvent) => {
      setActiveCategory(event.detail.category);
    };

    const handleShowQuotation = () => {
      setShowQuotation(true);
    };

    window.addEventListener('setProductCategory', handleCategoryChange as EventListener);
    window.addEventListener('showQuotation', handleShowQuotation);
    
    return () => {
      window.removeEventListener('setProductCategory', handleCategoryChange as EventListener);
      window.removeEventListener('showQuotation', handleShowQuotation);
    };
  }, []);

  // Remove old cart counter logic since we're using React context now

  const addToCartHandler = (productId: string, productName: string, category: string) => {
    // Add to cart context
    addItem({
      id: productId,
      name: productName,
      category: category
    });
    
    // Show toast notification
    toast({
      title: "¡Producto agregado!",
      description: `${productName} agregado a la cotización.`,
    });
    
    // Stay in products section and show quotation
    setShowQuotation(true);
  };

  const filteredPanels = activeCategory === "all" || activeCategory === "panels" ? controlPanels : [];
  const filteredDetectors = activeCategory === "all" || activeCategory === "detectors" ? detectors : [];
  const filteredIbms = activeCategory === "all" || activeCategory === "ibms" ? ibmsSystems : [];
  const filteredFrontend = activeCategory === "all" || activeCategory === "frontend" ? frontendSystems : [];
  const filteredExtinguishing = activeCategory === "all" || activeCategory === "extinguishing" ? extinguishingSystems : [];
  const filteredServices = activeCategory === "all" || activeCategory === "services" ? cloudServices : [];
  const showAccessories = activeCategory === "all" || activeCategory === "accessories";



  return (
    <section id="productos" className="py-20 bg-gray-50 relative min-h-screen">
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

        {/* Quotation Section */}
        {showQuotation && totalItems > 0 && (
          <div className="mb-12 section-reveal">
            <Card className="bg-green-50 border-green-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-green-800 flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Productos en Cotización ({totalItems})
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowQuotation(false)}
                    className="text-green-600 hover:text-green-800"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div className="flex-1">
                        <span className="font-medium text-gray-900">{item.name}</span>
                        <span className="text-sm text-gray-500 ml-2">({item.category})</span>
                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          Qty: {item.quantity}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setShowQuotation(false)}
                    className="flex-1"
                  >
                    Continuar Comprando
                  </Button>
                  <Button
                    className="flex-1 bg-telefire-red hover:bg-red-700"
                    onClick={() => {
                      const element = document.querySelector('#socio');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    Solicitar Cotización
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Product Categories */}
        <div className="mb-12 section-reveal">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
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
          
          {/* No need for cart summary here since we show it when clicking cart button */}
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
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Tag className="mr-2 h-4 w-4" />
                        <span>{panel.certification}</span>
                      </div>
                      <span className="text-lg font-bold text-telefire-blue">{panel.price}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 text-telefire-blue border-telefire-blue hover:bg-telefire-blue hover:text-white"
                      >
                        Ver detalles <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-telefire-red hover:bg-red-700"
                        onClick={() => addToCartHandler(panel.id, panel.name, panel.category)}
                        data-testid={`button-quote-${panel.id}`}
                      >
                        <Plus className="mr-1 h-4 w-4" />
                        Cotizar
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
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Tag className="mr-1 h-3 w-3 text-green-500" />
                        <span>{detector.certification}</span>
                      </div>
                      <span className="font-bold text-telefire-blue">{detector.price}</span>
                    </div>
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        Specs
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-telefire-red hover:bg-red-700 text-xs"
                        onClick={() => addToCartHandler(detector.id, detector.name, detector.category)}
                        data-testid={`button-quote-${detector.id}`}
                      >
                        <Plus className="mr-1 h-3 w-3" />
                        Cotizar
                      </Button>
                    </div>
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
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Tag className="mr-2 h-4 w-4" />
                        <span>{system.certification}</span>
                      </div>
                      <span className="text-lg font-bold text-telefire-blue">Consultar</span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 text-telefire-blue border-telefire-blue hover:bg-telefire-blue hover:text-white"
                      >
                        Ver detalles <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-telefire-red hover:bg-red-700"
                        onClick={() => addToCartHandler(system.id, system.name, "ibms")}
                        data-testid={`button-quote-${system.id}`}
                      >
                        <Plus className="mr-1 h-4 w-4" />
                        Cotizar
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

        {/* Extinguishing Systems */}
        {filteredExtinguishing.length > 0 && (
          <div className="mb-16 section-reveal">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                <ShieldIcon className="text-white h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Sistemas de Extinción</h3>
            </div>
            <p className="text-gray-600 mb-8">
              Sistemas de extinción por aerosol ecológicos FirePro con activación múltiple y adaptadores especializados 
              para integración completa con paneles Telefire.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {filteredExtinguishing.map((system) => (
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
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Tag className="mr-2 h-4 w-4" />
                        <span>{system.certification}</span>
                      </div>
                      <span className="text-lg font-bold text-telefire-blue">{system.price}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 text-telefire-blue border-telefire-blue hover:bg-telefire-blue hover:text-white"
                      >
                        Ver detalles <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-telefire-red hover:bg-red-700"
                        onClick={() => addToCartHandler(system.id, system.name, "extinguishing")}
                        data-testid={`button-quote-${system.id}`}
                      >
                        <Plus className="mr-1 h-4 w-4" />
                        Cotizar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Cloud Services */}
        {filteredServices.length > 0 && (
          <div className="mb-16 section-reveal">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-telefire-blue rounded-lg flex items-center justify-center mr-4">
                <Wifi className="text-white h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Servicios en la Nube</h3>
            </div>
            <p className="text-gray-600 mb-8">
              Plataforma de monitoreo basada en la nube, software de configuración avanzado y aplicaciones 
              integradas para gestión centralizada y acceso remoto seguro.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <Card key={service.id} className="group product-card">
                  <CardHeader className="p-0">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-900">{service.name}</h4>
                      <Badge className={`${service.badgeColor} text-white`}>
                        {service.badge}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Tag className="mr-2 h-4 w-4" />
                        <span>{service.certification}</span>
                      </div>
                      <span className="text-lg font-bold text-telefire-blue">{service.price}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 text-telefire-blue border-telefire-blue hover:bg-telefire-blue hover:text-white"
                      >
                        Ver detalles <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-telefire-red hover:bg-red-700"
                        onClick={() => addToCartHandler(service.id, service.name, "services")}
                        data-testid={`button-quote-${service.id}`}
                      >
                        <Plus className="mr-1 h-4 w-4" />
                        Cotizar
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accessories.map((accessory) => {
                const IconComponent = accessory.icon;
                return (
                  <Card key={accessory.id} className="group product-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <IconComponent className={`h-12 w-12 mx-auto mb-4 ${accessory.color}`} />
                      <h5 className="font-bold text-gray-900 mb-2">{accessory.name}</h5>
                      <p className="text-sm text-gray-600 mb-3">{accessory.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>{accessory.certification}</span>
                        <span className="font-bold text-telefire-blue">{accessory.price}</span>
                      </div>
                      <Button 
                        size="sm" 
                        className="w-full bg-telefire-red hover:bg-red-700"
                        onClick={() => addToCartHandler(accessory.id, accessory.name, "accessories")}
                        data-testid={`button-quote-${accessory.id}`}
                      >
                        <Plus className="mr-1 h-4 w-4" />
                        Cotizar
                      </Button>
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
