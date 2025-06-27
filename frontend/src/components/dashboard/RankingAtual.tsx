import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Trophy, TrendingUp, Crown } from "lucide-react";

export default function RankingAtual() {
  // TODO: Buscar ranking em tempo real da API
  // Endpoint: GET /api/leaderboard/live?limit=10
  // Response: List<UserRankingDTO>
  const topDevelopers = [
    {
      name: "João Master",
      points: 15420,
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 1,
      level: 25,
      change: "+2",
      changeType: "up",
      streak: 15,
      badge: "👑",
    },
    {
      name: "Sarah Pro",
      points: 14890,
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 2,
      level: 23,
      change: "0",
      changeType: "same",
      streak: 12,
      badge: "🥈",
    },
    {
      name: "Dev Ninja",
      points: 14230,
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 3,
      level: 22,
      change: "-1",
      changeType: "down",
      streak: 8,
      badge: "🥉",
    },
    {
      name: "Code Queen",
      points: 13890,
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 4,
      level: 21,
      change: "+1",
      changeType: "up",
      streak: 10,
      badge: "⭐",
    },
    {
      name: "Tech Guru",
      points: 13456,
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 5,
      level: 20,
      change: "-2",
      changeType: "down",
      streak: 5,
      badge: "🚀",
    },
  ];

  const getChangeColor = (changeType: string) => {
    switch (changeType) {
      case "up":
        return "text-green-600 bg-green-100";
      case "down":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getChangeIcon = (changeType: string) => {
    switch (changeType) {
      case "up":
        return "↗";
      case "down":
        return "↘";
      default:
        return "→";
    }
  };

  return (
    <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-600" />
          🏆 Ranking ao Vivo
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-auto"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {topDevelopers.map((dev, index) => (
          <div
            key={dev.rank}
            className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
              index === 0
                ? "bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 shadow-lg"
                : "bg-white/60 hover:bg-white/80"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    index === 0
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                      : index === 1
                      ? "bg-gradient-to-r from-gray-400 to-gray-500 text-white"
                      : index === 2
                      ? "bg-gradient-to-r from-orange-600 to-red-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {dev.rank}
                </div>
                {index === 0 && (
                  <Crown className="absolute -top-2 -right-1 w-4 h-4 text-yellow-600" />
                )}
              </div>

              <Avatar className="w-10 h-10 border-2 border-white shadow-md">
                <AvatarImage src={dev.avatar || "/placeholder.svg"} />
                <AvatarFallback>{dev.name[0]}</AvatarFallback>
              </Avatar>

              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-gray-800">{dev.name}</h4>
                  <span className="text-lg">{dev.badge}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>Nível {dev.level}</span>
                  <span>•</span>
                  <span>🔥 {dev.streak} dias</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="font-bold text-gray-800">
                {dev.points.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500">pontos</div>
              <Badge
                className={`text-xs mt-1 ${getChangeColor(dev.changeType)}`}
              >
                {getChangeIcon(dev.changeType)} {dev.change}
              </Badge>
            </div>
          </div>
        ))}

        <div className="pt-4 border-t border-yellow-200">
          <Button
            variant="outline"
            className="w-full bg-white/60 hover:bg-white/80"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Ver Ranking Completo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
