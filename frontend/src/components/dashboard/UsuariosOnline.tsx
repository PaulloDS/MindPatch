import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle } from "lucide-react";

export default function UsuariosOnline() {
  // TODO: Buscar usuários online da API
  // Endpoint: GET /api/users/online?limit=8
  // Response: List<OnlineUserDTO>
  const onlineUsers = [
    {
      name: "Ana Silva",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "Resolvendo desafio",
      level: 15,
      activity: "coding",
    },
    {
      name: "Carlos Dev",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "Na comunidade",
      level: 8,
      activity: "community",
    },
    {
      name: "Maria Code",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "Estudando React",
      level: 22,
      activity: "learning",
    },
    {
      name: "João Master",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "Ajudando outros",
      level: 25,
      activity: "helping",
    },
    {
      name: "Sarah Pro",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "Em competição",
      level: 23,
      activity: "competing",
    },
    {
      name: "Dev Ninja",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "Navegando",
      level: 22,
      activity: "browsing",
    },
  ];

  const getActivityColor = (activity: string) => {
    switch (activity) {
      case "coding":
        return "bg-blue-500";
      case "community":
        return "bg-purple-500";
      case "learning":
        return "bg-green-500";
      case "helping":
        return "bg-orange-500";
      case "competing":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getActivityEmoji = (activity: string) => {
    switch (activity) {
      case "coding":
        return "💻";
      case "community":
        return "💬";
      case "learning":
        return "📚";
      case "helping":
        return "🤝";
      case "competing":
        return "🏆";
      default:
        return "👀";
    }
  };

  return (
    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          👥 Usuários Online
          <Badge className="bg-green-100 text-green-700 ml-auto">
            {onlineUsers.length + 2841}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {onlineUsers.map((user, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 cursor-pointer group"
          >
            <div className="relative">
              <Avatar className="w-10 h-10 border-2 border-white shadow-sm">
                <AvatarImage src={user.avatar || "/placeholder.svg"} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div
                className={`absolute -bottom-1 -right-1 w-4 h-4 ${getActivityColor(
                  user.activity
                )} rounded-full border-2 border-white flex items-center justify-center`}
              >
                <span className="text-xs">
                  {getActivityEmoji(user.activity)}
                </span>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-gray-800 text-sm truncate">
                  {user.name}
                </h4>
                <Badge className="bg-green-100 text-green-700 text-xs">
                  Lv.{user.level}
                </Badge>
              </div>
              <p className="text-xs text-gray-600 truncate">{user.status}</p>
            </div>

            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <MessageCircle className="w-4 h-4 text-gray-400 hover:text-green-600" />
            </button>
          </div>
        ))}

        <div className="pt-3 border-t border-green-200 text-center">
          <p className="text-xs text-gray-600">
            +2.841 desenvolvedores online agora
            <br />
            <span className="text-green-600 font-semibold">
              Junte-se à conversa!
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
