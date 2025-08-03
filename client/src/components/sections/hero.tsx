import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            PROTECCIÓN CONTRA INCENDIOS,<br/>
            <span className="text-blue-300">GESTIÓN DE EDIFICIOS</span><br/>
            Y SEGURIDAD
          </h1>
          
          <div className="glass-effect rounded-2xl p-8 mb-8 max-w-2xl mx-auto backdrop-blur-md bg-white/10 border border-white/20">
            <h2 className="text-2xl font-semibold mb-4">Todo en una sola plataforma IBMS</h2>
            <p className="text-lg opacity-90">
              Telefire desarrolla y fabrica soluciones para edificios inteligentes 
              ofreciendo entornos seguros y confortables para un mundo sostenible.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg"
              className="bg-white text-telefire-blue hover:bg-gray-100 shadow-lg"
              onClick={() => window.open('https://www.youtube.com/watch?v=AJ1xJkYsYJg', '_blank')}
            >
              <Play className="mr-2 h-5 w-5 text-telefire-red" />
              Ver el video completo
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-telefire-blue"
              onClick={() => scrollToSection('#soluciones')}
            >
              Descubrir más
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
