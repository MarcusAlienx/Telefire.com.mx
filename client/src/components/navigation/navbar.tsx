import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Linkedin } from "lucide-react";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#productos", label: "Productos" },
  { href: "#ventajas", label: "Ventajas" },
  { href: "#sostenibilidad", label: "Sostenibilidad" },
  { href: "#aplicaciones", label: "Aplicaciones" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-telefire-red rounded border-2 border-telefire-red mr-2"></div>
              <span className="text-2xl font-bold text-telefire-red">TELEFIRE</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-telefire-blue transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('#socio')}
              className="bg-telefire-red text-white hover:bg-red-700"
            >
              HAZTE SOCIO
            </Button>
            <Button 
              variant="outline" 
              className="border-telefire-blue text-telefire-blue hover:bg-telefire-blue hover:text-white"
              asChild
            >
              <a href="https://telefire.co.il/" target="_blank" rel="noopener noreferrer">
                SITIO IL
              </a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-gray-700 hover:text-telefire-blue transition-colors font-medium"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-4 space-y-2">
                    <Button 
                      onClick={() => scrollToSection('#socio')}
                      className="w-full bg-telefire-red text-white hover:bg-red-700"
                    >
                      HAZTE SOCIO
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-telefire-blue text-telefire-blue hover:bg-telefire-blue hover:text-white"
                      asChild
                    >
                      <a href="https://telefire.co.il/" target="_blank" rel="noopener noreferrer">
                        SITIO IL
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
