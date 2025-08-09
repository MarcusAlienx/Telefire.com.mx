import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, X, ArrowLeft } from 'lucide-react';
import { useCartContext } from '@/context/cart-context';

export default function CartButton() {
  const { items, totalItems, removeItem, updateQuantity } = useCartContext();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
      
      // If going to products, show quotation section
      if (href === '#productos') {
        setTimeout(() => {
          // Dispatch event to show quotation in products
          window.dispatchEvent(new CustomEvent('showQuotation'));
        }, 500);
      }
    }
  };

  if (totalItems === 0) {
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="relative bg-white/90 backdrop-blur-sm border-telefire-blue text-telefire-blue hover:bg-telefire-blue hover:text-white"
          data-testid="cart-button"
        >
          <ShoppingCart className="h-4 w-4" />
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
          >
            {totalItems}
          </Badge>
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Cotización ({totalItems} productos)
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4">
            {items.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No hay productos en la cotización
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.category}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          +
                        </Button>
                      </div>
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
            )}
          </div>
          
          <div className="border-t pt-4 space-y-3">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => scrollToSection('#productos')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ver Productos
            </Button>
            <Button
              className="w-full bg-telefire-red hover:bg-red-700"
              onClick={() => scrollToSection('#socio')}
            >
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}