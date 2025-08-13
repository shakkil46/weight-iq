import { Package, TrendingUp, AlertTriangle, Scale } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const statsData = [
  {
    title: "Total Products",
    value: "247",
    change: "+12%",
    changeType: "positive" as const,
    icon: Package,
    description: "Tracked items"
  },
  {
    title: "Total Weight",
    value: "1,847 kg",
    change: "+5.2%",
    changeType: "positive" as const,
    icon: Scale,
    description: "Current inventory"
  },
  {
    title: "Low Stock Items",
    value: "8",
    change: "-2",
    changeType: "negative" as const,
    icon: AlertTriangle,
    description: "Require restocking"
  },
  {
    title: "Recognition Accuracy",
    value: "98.7%",
    change: "+0.3%",
    changeType: "positive" as const,
    icon: TrendingUp,
    description: "AI identification"
  }
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center space-x-2 mt-1">
                <span
                  className={`text-xs font-medium ${
                    stat.changeType === "positive"
                      ? "text-success"
                      : stat.changeType === "negative"
                      ? "text-warning"
                      : "text-muted-foreground"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-xs text-muted-foreground">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};