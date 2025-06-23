import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  CheckCircle,
  Circle,
  Lock,
  Star,
  Clock,
  Users,
  Trophy,
  Target,
} from "lucide-react";

export default function LearningPathSection() {
  const learningPath = [
    {
      id: 1,
      title: "Fundamentos da Programação",
      description: "Aprenda os conceitos básicos de lógica e algoritmos",
      status: "completed",
      progress: 100,
      duration: "2 semanas",
      students: 15420,
      difficulty: "Iniciante",
      topics: ["Variáveis", "Loops", "Condicionais", "Funções"],
      icon: "🎯",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 2,
      title: "JavaScript Essencial",
      description: "Domine a linguagem mais popular da web",
      status: "current",
      progress: 65,
      duration: "3 semanas",
      students: 12890,
      difficulty: "Iniciante",
      topics: ["DOM", "Events", "Async/Await", "ES6+"],
      icon: "🟨",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 3,
      title: "React Fundamentals",
      description: "Construa interfaces modernas com React",
      status: "locked",
      progress: 0,
      duration: "4 semanas",
      students: 9870,
      difficulty: "Intermediário",
      topics: ["Components", "Hooks", "State", "Props"],
      icon: "⚛️",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      title: "Backend com Node.js",
      description: "Desenvolva APIs robustas e escaláveis",
      status: "locked",
      progress: 0,
      duration: "5 semanas",
      students: 7650,
      difficulty: "Intermediário",
      topics: ["Express", "Database", "Authentication", "APIs"],
      icon: "🟢",
      color: "from-green-600 to-green-800",
    },
    {
      id: 5,
      title: "Full Stack Project",
      description: "Construa uma aplicação completa do zero",
      status: "locked",
      progress: 0,
      duration: "6 semanas",
      students: 5430,
      difficulty: "Avançado",
      topics: ["Deploy", "Testing", "CI/CD", "Monitoring"],
      icon: "🚀",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const achievements = [
    { name: "Primeiro Código", icon: "🎉", unlocked: true },
    { name: "Streak 7 dias", icon: "🔥", unlocked: true },
    { name: "100 Desafios", icon: "💯", unlocked: false },
    { name: "Mentor", icon: "👨‍🏫", unlocked: false },
  ];

  const weeklyGoals = [
    { goal: "Completar 5 desafios", current: 3, target: 5, icon: "🎯" },
    { goal: "Estudar 10 horas", current: 7, target: 10, icon: "⏰" },
    { goal: "Ajudar 3 pessoas", current: 1, target: 3, icon: "🤝" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4 px-4 py-2">
            <Target className="w-4 h-4 mr-1" />
            🎓 Trilha de Aprendizado
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sua Jornada
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Personalizada{" "}
            </span>
            de Aprendizado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            📚 Siga um caminho estruturado e progressivo, adaptado ao seu ritmo
            e objetivos profissionais
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Learning Path */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border border-white/30 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                  🗺️ Sua Trilha de Desenvolvimento
                  <Badge className="bg-green-100 text-green-700">
                    Em Progresso
                  </Badge>
                </h3>

                <div className="space-y-6">
                  {learningPath.map((step, index) => (
                    <div key={step.id} className="relative">
                      {/* Connection Line */}
                      {index < learningPath.length - 1 && (
                        <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-blue-300 to-purple-300"></div>
                      )}

                      <div
                        className={`flex gap-6 p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] ${
                          step.status === "completed"
                            ? "bg-green-50 border-green-200 hover:bg-green-100"
                            : step.status === "current"
                            ? "bg-blue-50 border-blue-200 hover:bg-blue-100 shadow-lg"
                            : "bg-gray-50 border-gray-200 opacity-60"
                        }`}
                      >
                        {/* Status Icon */}
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            step.status === "completed"
                              ? "bg-green-500"
                              : step.status === "current"
                              ? "bg-blue-500"
                              : "bg-gray-400"
                          }`}
                        >
                          {step.status === "completed" ? (
                            <CheckCircle className="w-6 h-6 text-white" />
                          ) : step.status === "current" ? (
                            <Circle className="w-6 h-6 text-white" />
                          ) : (
                            <Lock className="w-6 h-6 text-white" />
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                {step.icon} {step.title}
                              </h4>
                              <p className="text-gray-600">
                                {step.description}
                              </p>
                            </div>
                            <Badge
                              className={`bg-gradient-to-r ${step.color} text-white border-none`}
                            >
                              {step.difficulty}
                            </Badge>
                          </div>

                          {/* Progress Bar */}
                          {step.status !== "locked" && (
                            <div className="mb-4">
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-600">Progresso</span>
                                <span className="font-semibold">
                                  {step.progress}%
                                </span>
                              </div>
                              <Progress value={step.progress} className="h-2" />
                            </div>
                          )}

                          {/* Topics */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {step.topics.map((topic, topicIndex) => (
                              <Badge
                                key={topicIndex}
                                variant="secondary"
                                className="text-xs"
                              >
                                {topic}
                              </Badge>
                            ))}
                          </div>

                          {/* Stats */}
                          <div className="flex items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {step.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {step.students.toLocaleString()} estudantes
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500" />
                              4.8
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weekly Goals */}
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  🎯 Metas da Semana
                </h3>
                <div className="space-y-4">
                  {weeklyGoals.map((goal, index) => (
                    <div key={index} className="p-4 bg-white/60 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800 flex items-center gap-2">
                          {goal.icon} {goal.goal}
                        </span>
                        <span className="text-sm text-gray-600">
                          {goal.current}/{goal.target}
                        </span>
                      </div>
                      <Progress
                        value={(goal.current / goal.target) * 100}
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  🏆 Conquistas
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-xl text-center transition-all duration-300 ${
                        achievement.unlocked
                          ? "bg-gradient-to-br from-yellow-100 to-orange-100 border border-yellow-200 hover:scale-105"
                          : "bg-gray-100 border border-gray-200 opacity-50"
                      }`}
                    >
                      <div className="text-2xl mb-1">{achievement.icon}</div>
                      <div className="text-xs font-semibold text-gray-700">
                        {achievement.name}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Study Streak */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  🔥 Sequência de Estudos
                </h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    12
                  </div>
                  <div className="text-gray-600 mb-4">dias consecutivos</div>
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(7)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-6 h-6 rounded-full ${
                          i < 5 ? "bg-green-500" : "bg-gray-200"
                        }`}
                      ></div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Continue estudando para manter sua sequência!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Next Milestone */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  🎖️ Próximo Marco
                </h3>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    JavaScript Master
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Complete mais 3 desafios para desbloquear
                  </p>
                  <Progress value={70} className="h-2 mb-2" />
                  <div className="text-xs text-gray-500">
                    7/10 desafios completos
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
