import { Activity, Package, Scale, TrendingUp, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductGrid } from "@/components/ProductGrid";
import { WeightMonitor } from "@/components/WeightMonitor";
import { StatsCards } from "@/components/StatsCards";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Scale className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">AutoStock Vision</h1>
                  <p className="text-sm text-muted-foreground">Smart Inventory Management</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                <Activity className="h-3 w-3 mr-1" />
                IoT Connected
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Stats Overview */}
        <StatsCards />

        {/* Real-time Weight Monitor */}
        <WeightMonitor />

        {/* Product Inventory Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Current Inventory</h2>
              <p className="text-muted-foreground">Real-time product tracking and recognition</p>
            </div>
          </div>
          <ProductGrid />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;