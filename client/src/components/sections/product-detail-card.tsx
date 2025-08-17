import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

// Define a more generic type for the product
interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  certification?: string;
  image?: string;
  badge?: string;
  badgeColor?: string;
  price?: string;
  // Add any other fields that might exist on different product types
  [key: string]: any;
}

interface ProductDetailCardProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailCard({ product, isOpen, onClose }: ProductDetailCardProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">{product.name}</DialogTitle>
          <DialogDescription>
            {product.badge && (
              <Badge className={`${product.badgeColor} text-white mr-2`}>{product.badge}</Badge>
            )}
            <span className="text-gray-500">Categoría: {product.category}</span>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              {product.image && (
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-cover rounded-lg mb-4"
                />
              )}
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">Descripción</h4>
                <p className="text-gray-600">{product.description}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Certificación</h4>
                <p className="text-gray-600">{product.certification || "No especificada"}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Número de Parte</h4>
                <p className="text-gray-600">Consultar</p> {/* Placeholder */}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Precio</h4>
                <p className="text-lg font-bold text-telefire-blue">{product.price || "Consultar"}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
