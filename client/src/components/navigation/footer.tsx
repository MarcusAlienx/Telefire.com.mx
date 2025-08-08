import { Button } from "@/components/ui/button";
import { Linkedin, Youtube, Twitter, MapPin, Mail, Phone } from "lucide-react";

const solutions = [
  { name: "IBMS", href: "#soluciones" },
  { name: "Protección contra Incendios", href: "#productos" },
  { name: "Sistemas de Seguridad", href: "#soluciones" },
  { name: "Gestión de Edificios", href: "#soluciones" }
];

const company = [
  { name: "Ventajas", href: "#ventajas" },
  { name: "Sostenibilidad", href: "#sostenibilidad" },
  { name: "Aplicaciones", href: "#aplicaciones" },
  { name: "Casos de Estudio", href: "#casos-estudio" },
  { name: "Acerca de", href: "#contacto" }
];

const legal = [
  { name: "Política de Privacidad", href: "#" },
  { name: "Términos de Uso", href: "#" },
  { name: "Cookies", href: "#" }
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-telefire-red rounded border-2 border-telefire-red mr-2"></div>
              <span className="text-2xl font-bold text-telefire-red">TELEFIRE</span>
            </div>
            <p className="text-gray-400 mb-6">
              Líder en sistemas inteligentes de gestión de edificios, protección contra incendios y seguridad para un mundo sostenible.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-gray-800 rounded-full hover:bg-telefire-blue"
                asChild
              >
                <a href="https://www.linkedin.com/company/telefire-fire-&-gas-detectors" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-gray-800 rounded-full hover:bg-telefire-blue"
                asChild
              >
                <a href="https://www.youtube.com/watch?v=AJ1xJkYsYJg" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-gray-800 rounded-full hover:bg-telefire-blue"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Soluciones</h4>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(solution.href)}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {solution.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="text-telefire-blue h-5 w-5" />
                <span className="text-gray-400 text-sm">México</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-telefire-blue h-5 w-5" />
                <span className="text-gray-400 text-sm">info@telefire.com.mx</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-telefire-blue h-5 w-5" />
                <span className="text-gray-400 text-sm">+52 (55) 1234-5678</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Button 
                className="w-full bg-telefire-red hover:bg-red-700"
                onClick={() => scrollToSection('#socio')}
              >
                Cotiza Ahora
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-telefire-blue text-telefire-blue hover:bg-telefire-blue hover:text-white"
                onClick={() => scrollToSection('#socio')}
              >
                Hazte Socio
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">© 2024 Telefire México. Todos los derechos reservados.</p>
            <div className="flex space-x-6">
              {legal.map((item, index) => (
                <a key={index} href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
