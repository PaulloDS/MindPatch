import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MessageCircle, Heart, Share2, Users, Trophy } from "lucide-react";

export default function CommunitySection() {
  const communityPosts = [
    {
      user: {
        name: "Ana Silva",
        avatar: "/placeholder.svg?height=40&width=40",
        level: 15,
        badge: "🚀 Expert",
      },
      content: "Acabei de resolver o desafio de algoritmos! Que satisfação! 🎉",
      likes: 42,
      comments: 8,
      time: "2h",
      language: "Python",
      difficulty: "Avançado",
    },
    {
      user: {
        name: "Carlos Dev",
        avatar: "/placeholder.svg?height=40&width=40",
        level: 8,
        badge: "⚡ Rising",
      },
      content: "Alguém pode me ajudar com React Hooks? Estou travado aqui 🤔",
      likes: 23,
      comments: 15,
      time: "4h",
      language: "JavaScript",
      difficulty: "Intermediário",
    },
    {
      user: {
        name: "Maria Code",
        avatar: "/placeholder.svg?height=40&width=40",
        level: 22,
        badge: "👑 Master",
      },
      content:
        "Compartilhando minha solução para o problema de árvores binárias!",
      likes: 67,
      comments: 12,
      time: "6h",
      language: "Java",
      difficulty: "Avançado",
    },
  ];

  const topDevelopers = [
    {
      name: "João Master",
      points: 15420,
      avatar: "/placeholder.svg?height=50&width=50",
      badge: "👑",
      rank: 1,
      level: 25,
      completedChallenges: 120,
      profileViews: 540,
    },
    {
      name: "Sarah Pro",
      points: 14890,
      avatar: "/placeholder.svg?height=50&width=50",
      badge: "🥈",
      rank: 2,
      level: 23,
      completedChallenges: 110,
      profileViews: 510,
    },
    {
      name: "Dev Ninja",
      points: 14230,
      avatar: "/placeholder.svg?height=50&width=50",
      badge: "🥉",
      rank: 3,
      level: 22,
      completedChallenges: 105,
      profileViews: 480,
    },
    {
      name: "Code Queen",
      points: 13890,
      avatar: "/placeholder.svg?height=50&width=50",
      badge: "⭐",
      rank: 4,
      level: 21,
      completedChallenges: 100,
      profileViews: 450,
    },
    {
      name: "Tech Guru",
      points: 13456,
      avatar: "/placeholder.svg?height=50&width=50",
      badge: "🚀",
      rank: 5,
      level: 20,
      completedChallenges: 95,
      profileViews: 420,
    },
  ];

  const liveActivities = [
    {
      user: "Ana",
      action: "completou",
      challenge: "Array Sorting",
      time: "agora",
      color: "text-green-600",
    },
    {
      user: "Carlos",
      action: "iniciou",
      challenge: "React Components",
      time: "2 min",
      color: "text-blue-600",
    },
    {
      user: "Maria",
      action: "conquistou",
      challenge: "Badge Expert",
      time: "5 min",
      color: "text-purple-600",
    },
    {
      user: "João",
      action: "subiu para",
      challenge: "Nível 16",
      time: "8 min",
      color: "text-orange-600",
    },
  ];

  return (
    <section
      id="comunidade"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-4 px-4 py-2">
            <Users className="w-4 h-4 mr-1" />
            👥 Comunidade Vibrante
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Conecte-se com
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Desenvolvedores{" "}
            </span>
            do Mundo Todo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            🌍 Uma comunidade global de programadores compartilhando
            conhecimento, resolvendo desafios e crescendo juntos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Community Feed */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border border-white/30 shadow-xl">
              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  💬 Feed da Comunidade
                  <Badge className="bg-green-100 text-green-700">Ao Vivo</Badge>
                </h3>
              </CardHeader>
              <CardContent className="space-y-6">
                {communityPosts.map((post, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12 border-2 border-purple-200">
                        <AvatarImage
                          src={post.user.avatar || "/placeholder.svg"}
                        />
                        <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-gray-800">
                            {post.user.name}
                          </h4>
                          <Badge className="bg-purple-100 text-purple-700 text-xs">
                            Nível {post.user.level}
                          </Badge>
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs">
                            {post.user.badge}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            • {post.time}
                          </span>
                        </div>

                        <p className="text-gray-700 mb-3">{post.content}</p>

                        <div className="flex items-center gap-4 mb-3">
                          <Badge className="bg-blue-100 text-blue-700">
                            {post.language}
                          </Badge>
                          <Badge className="bg-orange-100 text-orange-700">
                            {post.difficulty}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-6 text-gray-500">
                          <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
                            <Share2 className="w-4 h-4" />
                            Compartilhar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Developers */}
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 shadow-xl">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  🏆 Top Desenvolvedores
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {topDevelopers.map((dev, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-white hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={dev.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{dev.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {dev.name}
                        </h4>
                        <div className="text-sm text-gray-500">
                          Nível {dev.level} | {dev.completedChallenges} Desafios
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <Badge className="bg-yellow-100 text-yellow-700 text-xs mb-1">
                        {dev.badge}
                      </Badge>
                      <span className="text-gray-600 text-sm">
                        {dev.points.toLocaleString()} pts
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Features Grid */}
            {/*
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">📊 Estatísticas da Comunidade</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">👥 Membros Online</span>
                    <span className="font-bold text-green-600">2,847</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">💬 Mensagens Hoje</span>
                    <span className="font-bold text-blue-600">1,234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">🏆 Desafios Resolvidos</span>
                    <span className="font-bold text-purple-600">456</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">⭐ Novos Badges</span>
                    <span className="font-bold text-orange-600">89</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            */}
          </div>
        </div>

        {/* Community Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 hover:scale-105 transition-all duration-300 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                💬 Discussões
              </h3>
              <p className="text-gray-600">
                Participe de conversas sobre tecnologia, compartilhe dúvidas e
                aprenda com outros desenvolvedores
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 hover:scale-105 transition-all duration-300 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                👥 Grupos
              </h3>
              <p className="text-gray-600">
                Junte-se a grupos especializados em diferentes tecnologias e
                áreas de interesse
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 hover:scale-105 transition-all duration-300 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                🏆 Competições
              </h3>
              <p className="text-gray-600">
                Participe de hackathons e competições de programação com prêmios
                incríveis
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
