import { Button } from "@/components/ui/button";
import { Play, ChevronDown, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCartContext } from "@/context/cart-context";

export default function Hero() {
  const { toast } = useToast();
  const { addItem } = useCartContext();
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const addToCart = () => {
    // Add general consultation to cart
    addItem({
      id: 'general-consultation',
      name: 'Consultoría General IBMS',
      category: 'Servicios'
    });
    
    toast({
      title: "¡Producto agregado!",
      description: "Consultoría General IBMS agregada a la cotización.",
    });
    
    // Navigate to partnership section for quotation
    setTimeout(() => {
      scrollToSection('#socio');
    }, 1000);
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-telefire-blue/90 to-blue-600/80" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
          <circle cx="50" cy="50" r="5" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="absolute bottom-32 right-20 w-16 h-16 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
          <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M35,35 L65,35 L65,65 L35,65 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-shadow-lg drop-shadow-lg">PROTECCIÓN CONTRA INCENDIOS,</span><br/>
            <span className="text-blue-300">GESTIÓN DE EDIFICIOS</span><br/>
            <span className="text-shadow-lg drop-shadow-lg">Y SEGURIDAD</span>
          </h1>
          
          <div className="rounded-2xl p-8 mb-8 max-w-2xl mx-auto" style={{
            backdropFilter: 'blur(12px) saturate(150%)',
            background: 'rgba(255, 255, 255, 0.25)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 12px 32px 0 rgba(31, 38, 135, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.5)'
          }}>
            <h2 className="text-2xl font-semibold mb-4 text-shadow-lg drop-shadow-lg">Todo en una sola plataforma IBMS</h2>
            <p className="text-lg opacity-90 text-shadow-lg drop-shadow-md">
              Telefire desarrolla y fabrica soluciones para edificios inteligentes 
              ofreciendo entornos seguros y confortables para un mundo sostenible.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg"
              className="bg-telefire-red text-white hover:bg-red-700 shadow-lg"
              onClick={addToCart}
            >
              <Plus className="mr-2 h-5 w-5" />
              Cotiza Ahora
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-2 border-white text-[#999999] hover:bg-white hover:text-telefire-blue bg-white/10 backdrop-blur-sm"
              onClick={() => scrollToSection('#productos')}
            >
              Ver Productos
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white h-8 w-8" />
      </div>
    </section>
  );
}
