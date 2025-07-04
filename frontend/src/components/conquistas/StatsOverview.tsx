import { motion } from "framer-motion";
import { Badge } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";

export function StatsOverview({ stats }: { stats: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card
            className={`bg-gradient-to-br ${stat.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-0`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                {stat.total && (
                  <Badge className="bg-white/80 text-gray-700">
                    {Math.round((stat.value / stat.total) * 100)}%
                  </Badge>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-800">
                    {stat.value.toLocaleString()}
                  </span>
                  {stat.total && (
                    <span className="text-gray-500">/ {stat.total}</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </p>

                {stat.total && (
                  <Progress
                    value={(stat.value / stat.total) * 100}
                    className="h-2 bg-white/50"
                  />
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
