import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: "🎉",
      title: "Primeiro Código",
      description: "Você escreveu seu primeiro programa",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "🔥",
      title: "Streak 30 dias",
      description: "Você estudou por 30 dias consecutivos",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: "💯",
      title: "100 Desafios",
      description: "Completou 100 desafios na plataforma",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "👑",
      title: "Top 1",
      description: "Alcançou o topo do ranking mensal",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200 mb-4 px-4 py-2">
            <Trophy className="w-4 h-4 mr-1" />
            🏆 Conquistas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Celebre Seus
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              {" "}
              Marcos
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((ach, idx) => (
            <Card
              key={idx}
              className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="flex items-center justify-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${ach.color} rounded-full flex items-center justify-center text-3xl shadow-lg`}
                >
                  {ach.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {ach.title}
                </h3>
                <p className="text-gray-600 text-sm">{ach.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
