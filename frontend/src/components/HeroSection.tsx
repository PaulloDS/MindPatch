import Image from "next/image";
import { Card } from "./ui/card";
import {
  ArrowUp,
  Code,
  Heart,
  Plus,
  Zap,
  Sparkles,
  Trophy,
  Users,
  BookOpen,
  Star,
  Flame,
  Target,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-100/10 to-emerald-100/10 rounded-full blur-3xl"></div>

        {/* Floating Code Elements */}
        <div className="absolute top-32 left-20 animate-float">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/30">
            <code className="text-green-600 font-mono text-sm">
              {"console.log('Hello World!')"}
            </code>
          </div>
        </div>

        <div className="absolute top-40 right-32 animate-float delay-500">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/30">
            <code className="text-blue-600 font-mono text-sm">
              {"function() { return true; }"}
            </code>
          </div>
        </div>

        <div className="absolute bottom-40 left-32 animate-float delay-1000">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/30">
            <code className="text-purple-600 font-mono text-sm">
              {"<Component />"}
            </code>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-sm text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-200/50 animate-bounce">
            <Sparkles className="w-4 h-4" />
            🚀 Transforme sua jornada de desenvolvimento
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Elevando Seu
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Aprendizado e Sua
            </span>
            <br />
            <div className="relative inline-block">
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent relative z-10">
                Jornada Dev
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-green-200/50 to-emerald-200/50 rounded-2xl blur-xl animate-pulse"></div>
            </div>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            🌟 Descubra recursos valiosos, participe de discussões engajantes e
            encontre inspiração para seus projetos. Sua jornada de aprendizado
            começa aqui com uma comunidade vibrante de desenvolvedores.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">🎯 Começar Agora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ArrowUp className="ml-2 w-5 h-5 relative z-10" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white px-8 py-4 rounded-full text-lg font-semibold group"
            >
              🎮 Ver Demo
              <Code className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Enhanced 3D Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-20">
          {/* Ranking Card with Progress */}
          <div className="relative group">
            <Card className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 backdrop-blur-xl w-full h-[450px] rounded-3xl flex flex-col items-center justify-center shadow-2xl border border-white/30 hover:scale-105 transition-all duration-500 hover:rotate-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-orange-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center p-6">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl relative animate-pulse">
                    <Trophy className="w-16 h-16 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                      <Plus className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-yellow-200/50 to-orange-200/50 rounded-full blur-xl opacity-70"></div>
                </div>

                <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-3">
                  🏆 Sistema de Ranking
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  Compete com outros desenvolvedores e suba no ranking através
                  de desafios
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-white/50 rounded-full p-1 mb-2">
                  <Progress value={75} className="h-2" />
                </div>
                <div className="flex justify-between w-full text-xs text-gray-500">
                  <span>Nível 7</span>
                  <span>2,450 XP</span>
                </div>

                {/* Mini Stats */}
                <div className="flex gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-600">156</div>
                    <div className="text-xs text-gray-500">Desafios</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-600">23</div>
                    <div className="text-xs text-gray-500">Badges</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Center Developer Image with Floating Elements */}
          <div className="relative flex justify-center">
            <div className="relative">
              <Image
                src="/dev.png"
                alt="Developer"
                width={400}
                height={400}
                className="hover:scale-110 transition-transform duration-700 filter drop-shadow-2xl"
              />
              <div className="absolute -inset-8 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full blur-2xl opacity-70 animate-pulse"></div>

              {/* Enhanced Floating Elements */}
              <div className="absolute top-10 -left-10 animate-bounce delay-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="absolute bottom-20 -right-10 animate-bounce delay-700">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="absolute top-32 -right-16 animate-bounce delay-1000">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute bottom-32 -left-16 animate-bounce delay-1500">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-green-200/30 rounded-full animate-spin-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-green-400 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-emerald-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Code Challenge Card */}
          <div className="relative group">
            <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 backdrop-blur-xl w-full h-[450px] rounded-3xl shadow-2xl border border-white/30 hover:scale-105 transition-all duration-500 hover:-rotate-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    🔥 Builder Pattern Challenge
                  </h3>
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg animate-pulse">
                    <Heart className="w-4 h-4 text-white" />
                    <span className="font-bold text-white text-sm">99+</span>
                  </div>
                </div>

                <div className="flex gap-2 mb-6">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 border-none rounded-full px-4 py-2 shadow-lg">
                    <Zap className="w-4 h-4 mr-1" />
                    Intermediário
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 border-none rounded-full px-4 py-2 shadow-lg">
                    <Flame className="w-4 h-4 mr-1" />
                    Popular
                  </Badge>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 flex-1">
                  <div className="flex gap-3 items-center mb-4">
                    <div className="bg-gradient-to-r from-red-500 to-red-400 w-12 h-12 flex items-center justify-center rounded-xl shadow-lg">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-gray-800">
                        ☕ Java Code
                      </p>
                      <p className="text-sm text-gray-600">Snippet Preview</p>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <code className="text-green-400 text-sm font-mono">
                      {
                        "public class Builder {\n  private String name;\n  // ...\n}"
                      }
                    </code>
                  </div>

                  {/* Difficulty Indicators */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= 3
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">⏱️ 45 min</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Enhanced Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: Users,
              value: "15K+",
              label: "Desenvolvedores",
              color: "from-blue-500 to-cyan-500",
              emoji: "👥",
            },
            {
              icon: BookOpen,
              value: "2.5K+",
              label: "Desafios",
              color: "from-green-500 to-emerald-500",
              emoji: "📚",
            },
            {
              icon: Code,
              value: "50+",
              label: "Linguagens",
              color: "from-purple-500 to-pink-500",
              emoji: "💻",
            },
            {
              icon: Trophy,
              value: "1M+",
              label: "Pontos Ganhos",
              color: "from-yellow-500 to-orange-500",
              emoji: "🏆",
            },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">
                  {stat.emoji} {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
