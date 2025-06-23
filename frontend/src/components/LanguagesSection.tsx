import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Code, Star } from "lucide-react";

export default function LanguagesSection() {
  const languages = [
    {
      name: "JavaScript",
      icon: "🟨",
      popularity: 95,
      difficulty: "Fácil",
      projects: 1250,
      color: "from-yellow-400 to-yellow-600",
      description: "A linguagem da web moderna",
    },
    {
      name: "Python",
      icon: "🐍",
      popularity: 90,
      difficulty: "Fácil",
      projects: 980,
      color: "from-blue-400 to-green-500",
      description: "Simples, poderosa e versátil",
    },
    {
      name: "Java",
      icon: "☕",
      popularity: 85,
      difficulty: "Médio",
      projects: 750,
      color: "from-red-500 to-orange-500",
      description: "Robusta e multiplataforma",
    },
    {
      name: "TypeScript",
      icon: "🔷",
      popularity: 80,
      difficulty: "Médio",
      projects: 650,
      color: "from-blue-500 to-blue-700",
      description: "JavaScript com superpoderes",
    },
    {
      name: "React",
      icon: "⚛️",
      popularity: 88,
      difficulty: "Médio",
      projects: 890,
      color: "from-cyan-400 to-blue-500",
      description: "Biblioteca para interfaces",
    },
    {
      name: "Node.js",
      icon: "🟢",
      popularity: 82,
      difficulty: "Médio",
      projects: 720,
      color: "from-green-500 to-green-700",
      description: "JavaScript no servidor",
    },
    {
      name: "Go",
      icon: "🐹",
      popularity: 75,
      difficulty: "Médio",
      projects: 420,
      color: "from-cyan-500 to-blue-600",
      description: "Rápida e eficiente",
    },
    {
      name: "Rust",
      icon: "🦀",
      popularity: 70,
      difficulty: "Difícil",
      projects: 320,
      color: "from-orange-600 to-red-600",
      description: "Performance e segurança",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/code-pattern.svg')] opacity-5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-purple-100/10 text-purple-300 border-purple-500/30 mb-4 px-4 py-2">
            <Code className="w-4 h-4 mr-1" />
            💻 Tecnologias
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Domine as
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Linguagens{" "}
            </span>
            Mais Populares
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            🚀 Aprenda as tecnologias mais demandadas pelo mercado com projetos
            práticos e desafios reais
          </p>
        </div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {languages.map((lang, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{lang.icon}</div>
                    <div>
                      <h3 className="font-bold text-white">{lang.name}</h3>
                      <p className="text-xs text-gray-400">
                        {lang.description}
                      </p>
                    </div>
                  </div>
                  <Badge
                    className={`bg-gradient-to-r ${lang.color} text-white border-none`}
                  >
                    {lang.difficulty}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">Popularidade</span>
                      <span className="text-white font-semibold">
                        {lang.popularity}%
                      </span>
                    </div>
                    <Progress value={lang.popularity} className="h-2" />
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-400 text-sm">
                      📁 {lang.projects} projetos
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm">4.8</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className={`w-full py-2 px-4 bg-gradient-to-r ${lang.color} text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-200`}
                  >
                    Começar Agora
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
