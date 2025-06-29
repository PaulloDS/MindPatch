import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Users } from "lucide-react";

export default function Estatisticas() {
  // TODO: puxar dados reais   GET /api/challenges/stats
  const stats = [
    {
      title: "Patches Totais",
      value: 1376,
      icon: "🔢",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Resolvidos Hoje",
      value: 452,
      icon: "✅",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Visualizações",
      value: "5891",
      icon: "👁️‍🗨️",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
      {stats.map((s, i) => (
        <Card
          key={i}
          className={`bg-gradient-to-br ${s.color.replace(
            "-500",
            "-600"
          )} border-0 shadow-lg`}
        >
          <CardContent className="p-4 flex items-center gap-4 relative">
            <div>
              <p className="text-2xl font-extrabold text-white">{s.value}</p>
              <p className={`text-xs text-white/80`}>{s.title}</p>
            </div>
            <div
              className={`absolute w-[80px] h-[80px] rounded-3xl bg-gradient-to-r ${s.color} flex items-center justify-center shadow-xl right-8 top-[-40px]`}
            >
              <span className="text-4xl">{s.icon}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
