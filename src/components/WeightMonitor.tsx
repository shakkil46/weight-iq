import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Camera, Cpu } from "lucide-react";
import weighingScaleImage from "@/assets/weighing-scale.jpg";

export const WeightMonitor = () => {
  const [currentWeight, setCurrentWeight] = useState(2.45);
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectedProduct, setDetectedProduct] = useState("Cereal Box - Premium Oats");

  // Simulate real-time weight changes
  useEffect(() => {
    const interval = setInterval(() => {
      const variation = (Math.random() - 0.5) * 0.1;
      setCurrentWeight(prev => Math.max(0, prev + variation));
      
      // Simulate detection cycles
      if (Math.random() > 0.7) {
        setIsDetecting(true);
        setTimeout(() => setIsDetecting(false), 2000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Live Weight Display */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="h-5 w-5 text-primary" />
                <span>Live Weight Monitor</span>
              </CardTitle>
              <CardDescription>Real-time measurements from IoT scale</CardDescription>
            </div>
            <Badge variant={isDetecting ? "default" : "secondary"} className="animate-pulse">
              {isDetecting ? "Detecting..." : "Standby"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-2">
                {currentWeight.toFixed(2)}
                <span className="text-2xl text-muted-foreground ml-2">kg</span>
              </div>
              {detectedProduct && (
                <div className="text-lg text-foreground font-medium">
                  {detectedProduct}
                </div>
              )}
            </div>
            
            {/* Weight visualization */}
            <div className="relative h-4 bg-muted rounded-full overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-1000 ease-out"
                style={{ width: `${Math.min((currentWeight / 5) * 100, 100)}%` }}
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-sm text-muted-foreground">Min Weight</div>
                <div className="font-semibold">0.05 kg</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Max Capacity</div>
                <div className="font-semibold">50.0 kg</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
                <div className="font-semibold">±0.01 kg</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Device Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Cpu className="h-5 w-5 text-primary" />
            <span>Device Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <img 
              src={weighingScaleImage} 
              alt="IoT Weighing Scale"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2">
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                Online
              </Badge>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Camera</span>
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                <Camera className="h-3 w-3 mr-1" />
                Active
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Load Cell</span>
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                <Scale className="h-3 w-3 mr-1" />
                Calibrated
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">AI Model</span>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                <Cpu className="h-3 w-3 mr-1" />
                v2.1.3
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};