import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, ChevronDown, X } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { href: "#soluciones", label: "Soluciones", id: "soluciones" },
  { 
    label: "Productos", 
    href: "#productos",
    id: "productos-menu",
    dropdown: [
      { href: "#productos", label: "Paneles de Control", id: "productos-paneles" },
      { href: "#productos", label: "Detectores", id: "productos-detectores" },
      { href: "#productos", label: "Sistemas IBMS", id: "productos-ibms" },
      { href: "#productos", label: "Sistemas de Extinción", id: "productos-extincion" },
      { href: "#productos", label: "Servicios en la Nube", id: "productos-servicios" }
    ]
  },
  { href: "#ventajas", label: "Ventajas", id: "ventajas" },
  { href: "#seguridad-incendios", label: "Protección contra Incendios", id: "seguridad-incendios" },
  { 
    label: "Empresa", 
    id: "empresa-menu",
    dropdown: [
      { href: "#contacto", label: "Acerca de", id: "empresa-contacto" },
      { href: "#casos-exito", label: "Casos de Éxito", id: "empresa-casos" },
      { href: "#sostenibilidad", label: "Sostenibilidad", id: "empresa-sostenibilidad" }
    ]
  },
  { href: "#aplicaciones", label: "Aplicaciones", id: "aplicaciones" }
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
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Decorative side elements */}
      <div className="absolute top-0 right-0 opacity-10">
        <svg width="60" height="60" viewBox="0 0 100 100" className="text-telefire-blue">
          <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('#inicio')}>
              <div className="w-8 h-8 bg-telefire-red rounded border-2 border-telefire-red mr-2 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded"></div>
              </div>
              <span className="text-2xl font-bold text-telefire-red tracking-wide">TELEFIRE</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:block flex-1">
            <div className="ml-8 flex items-center justify-between">
              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                  item.dropdown ? (
                    <DropdownMenu key={item.id}>
                      <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-telefire-blue transition-colors font-medium text-sm py-2">
                        {item.label}
                        <ChevronDown className="ml-1 h-3 w-3" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white shadow-lg border border-gray-200 nav-dropdown min-w-[180px]">
                        {item.dropdown.map((dropdownItem) => (
                          <DropdownMenuItem 
                            key={dropdownItem.id}
                            onClick={() => scrollToSection(dropdownItem.href)}
                            className="cursor-pointer hover:bg-telefire-blue hover:text-white font-medium text-sm py-2 px-3"
                          >
                            {dropdownItem.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.href)}
                      className="text-gray-700 hover:text-telefire-blue transition-colors font-medium text-sm py-2"
                    >
                      {item.label}
                    </button>
                  )
                ))}
              </div>
              
              {/* Right side buttons */}
              <div className="flex items-center space-x-3 ml-8">
                <div id="cart-counter" className="hidden bg-telefire-red text-white rounded-full px-2 py-1 text-xs font-semibold cursor-pointer hover:bg-red-700 transition-colors" 
                     onClick={() => scrollToSection('#socio')}>
                  🛒 <span id="cart-count">0</span>
                </div>
                <Button 
                  onClick={() => scrollToSection('#socio')}
                  size="sm"
                  className="bg-telefire-red text-white hover:bg-red-700 text-sm font-medium px-5 py-2 h-9"
                >
                  Cotiza Ahora
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-2 border-telefire-blue text-telefire-blue hover:bg-telefire-blue hover:text-white text-sm font-medium px-5 py-2 h-9"
                  onClick={() => scrollToSection('#socio')}
                >
                  Hazte Socio
                </Button>
              </div>
            </div>
          </div>
          

          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-telefire-blue hover:bg-telefire-blue hover:text-white"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:w-[400px] hamburger-menu">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-telefire-red rounded border-2 border-telefire-red mr-2 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded"></div>
                      </div>
                      <span className="text-xl font-bold text-telefire-red">TELEFIRE</span>
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-gray-500">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>
                  
                  {/* Mobile Navigation */}
                  <div className="flex flex-col space-y-1 py-6 flex-1">
                    {navItems.map((item) => (
                      item.dropdown ? (
                        <div key={item.id} className="space-y-2">
                          <div className="font-semibold text-gray-900 py-2 border-b border-gray-100">
                            {item.label}
                          </div>
                          {item.dropdown.map((dropdownItem) => (
                            <SheetClose key={dropdownItem.id} asChild>
                              <button
                                onClick={() => scrollToSection(dropdownItem.href)}
                                className="text-left text-gray-600 hover:text-telefire-blue transition-colors py-2 pl-4 w-full"
                              >
                                {dropdownItem.label}
                              </button>
                            </SheetClose>
                          ))}
                        </div>
                      ) : (
                        <SheetClose key={item.id} asChild>
                          <button
                            onClick={() => scrollToSection(item.href)}
                            className="text-left text-gray-700 hover:text-telefire-blue transition-colors font-medium py-3 border-b border-gray-100"
                          >
                            {item.label}
                          </button>
                        </SheetClose>
                      )
                    ))}
                  </div>
                  
                  {/* Mobile CTA Section */}
                  <div className="pt-6 border-t border-gray-200 space-y-3">
                    <SheetClose asChild>
                      <Button 
                        onClick={() => scrollToSection('#socio')}
                        className="w-full bg-telefire-red text-white hover:bg-red-700"
                      >
                        Cotiza Ahora
                      </Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button 
                        variant="outline" 
                        className="w-full border-telefire-blue text-telefire-blue hover:bg-telefire-blue hover:text-white"
                        onClick={() => scrollToSection('#socio')}
                      >
                        Hazte Socio
                      </Button>
                    </SheetClose>
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
