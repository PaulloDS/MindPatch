import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Users } from "lucide-react";

export default function ChallengeStats() {
  // TODO: puxar dados reais   GET /api/challenges/stats
  const stats = [
    {
      title: "Desafios Totais",
      value: 1376,
      icon: Target,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Resolvidos Hoje",
      value: 452,
      icon: Zap,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Participantes",
      value: "15k+",
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((s, i) => (
        <Card
          key={i}
          className={`bg-gradient-to-br ${s.color.replace(
            "-500",
            "-500/"
          )} border-0 shadow-lg`}
        >
          <CardContent className="p-4 flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-r ${s.color} flex items-center justify-center shadow-lg`}
            >
              <s.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-800">{s.value}</p>
              <p className="text-sm text-gray-600">{s.title}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
