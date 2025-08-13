import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, AlertTriangle, CheckCircle } from "lucide-react";
import productSampleImage from "@/assets/product-sample.jpg";

interface Product {
  id: string;
  name: string;
  weight: number;
  quantity: number;
  minStock: number;
  category: string;
  lastDetected: string;
  image?: string;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Oats Cereal",
    weight: 2.45,
    quantity: 24,
    minStock: 10,
    category: "Food",
    lastDetected: "2 min ago",
    image: productSampleImage
  },
  {
    id: "2",
    name: "Organic Granola Mix",
    weight: 1.82,
    quantity: 8,
    minStock: 15,
    category: "Food",
    lastDetected: "5 min ago"
  },
  {
    id: "3",
    name: "Protein Powder",
    weight: 3.21,
    quantity: 18,
    minStock: 5,
    category: "Supplements",
    lastDetected: "12 min ago"
  },
  {
    id: "4",
    name: "Coffee Beans",
    weight: 1.95,
    quantity: 3,
    minStock: 8,
    category: "Beverages",
    lastDetected: "18 min ago"
  },
  {
    id: "5",
    name: "Energy Bars Box",
    weight: 2.10,
    quantity: 15,
    minStock: 10,
    category: "Snacks",
    lastDetected: "25 min ago"
  },
  {
    id: "6",
    name: "Pasta Package",
    weight: 1.68,
    quantity: 22,
    minStock: 12,
    category: "Food",
    lastDetected: "32 min ago"
  }
];

export const ProductGrid = () => {
  const [products] = useState<Product[]>(mockProducts);

  const getStockStatus = (product: Product) => {
    if (product.quantity <= product.minStock) {
      return { status: "low", color: "warning", icon: AlertTriangle };
    }
    return { status: "good", color: "success", icon: CheckCircle };
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => {
        const stockStatus = getStockStatus(product);
        const StatusIcon = stockStatus.icon;
        
        return (
          <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Product Image */}
                <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Package className="h-12 w-12 text-muted-foreground" />
                    </div>
                  )}
                  <div className="absolute top-2 right-2">
                    <Badge 
                      variant="outline" 
                      className={`${
                        stockStatus.color === "warning" 
                          ? "bg-warning/10 text-warning border-warning/20" 
                          : "bg-success/10 text-success border-success/20"
                      }`}
                    >
                      <StatusIcon className="h-3 w-3 mr-1" />
                      {stockStatus.status === "low" ? "Low Stock" : "In Stock"}
                    </Badge>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-foreground line-clamp-2">{product.name}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Weight:</span>
                      <div className="font-medium">{product.weight} kg</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Quantity:</span>
                      <div className="font-medium">{product.quantity} units</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                    <span className="text-muted-foreground">{product.lastDetected}</span>
                  </div>

                  {/* Stock Level Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Stock Level</span>
                      <span>{product.quantity}/{product.minStock + 20}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${
                          stockStatus.color === "warning" 
                            ? "bg-warning" 
                            : "bg-success"
                        }`}
                        style={{ 
                          width: `${Math.min((product.quantity / (product.minStock + 20)) * 100, 100)}%` 
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};