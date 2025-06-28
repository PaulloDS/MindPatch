import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Zap, Clock, Users, Star, Code, Target, Flame } from "lucide-react";

export default function ChallengeGrid() {
  // TODO: buscar desafios paginados   GET /api/challenges?...
  const challenges = [
    {
      id: 1,
      title: "Two Sum Problem",
      description:
        "Encontre dois números em um array que somem um valor específico",
      difficulty: "Fácil",
      language: "JavaScript",
      xp: 150,
      participants: 2847,
      completionRate: 78,
      estimatedTime: "20 min",
      tags: ["Arrays", "Hash Table"],
      trending: true,
      featured: false,
      category: "Algoritmos",
    },
    {
      id: 2,
      title: "Binary Tree Traversal",
      description:
        "Implemente diferentes métodos de percorrimento em árvore binária",
      difficulty: "Médio",
      language: "Python",
      xp: 250,
      participants: 1923,
      completionRate: 45,
      estimatedTime: "45 min",
      tags: ["Tree", "DFS", "BFS"],
      trending: false,
      featured: true,
      category: "Estruturas de Dados",
    },
    {
      id: 3,
      title: "LRU Cache Implementation",
      description: "Design e implementação de um cache LRU eficiente",
      difficulty: "Difícil",
      language: "Java",
      xp: 350,
      participants: 856,
      completionRate: 23,
      estimatedTime: "75 min",
      tags: ["Design", "Hash Table", "Linked List"],
      trending: true,
      featured: true,
      category: "System Design",
    },
    {
      id: 4,
      title: "Valid Parentheses",
      description: "Verifique se uma string de parênteses é válida",
      difficulty: "Fácil",
      language: "C++",
      xp: 120,
      participants: 3456,
      completionRate: 85,
      estimatedTime: "15 min",
      tags: ["Stack", "String"],
      trending: false,
      featured: false,
      category: "Algoritmos",
    },
    {
      id: 5,
      title: "Merge K Sorted Lists",
      description: "Combine k listas ordenadas em uma única lista ordenada",
      difficulty: "Difícil",
      language: "Python",
      xp: 400,
      participants: 1234,
      completionRate: 18,
      estimatedTime: "90 min",
      tags: ["Linked List", "Divide and Conquer", "Heap"],
      trending: true,
      featured: false,
      category: "Algoritmos",
    },
    {
      id: 6,
      title: "React Component Optimization",
      description: "Otimize performance de componentes React",
      difficulty: "Médio",
      language: "TypeScript",
      xp: 280,
      participants: 2156,
      completionRate: 52,
      estimatedTime: "60 min",
      tags: ["React", "Performance", "Hooks"],
      trending: false,
      featured: true,
      category: "Frontend",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil":
        return "bg-green-100 text-green-700 border-green-200";
      case "Médio":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Difícil":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getLanguageColor = (language: string) => {
    switch (language) {
      case "JavaScript":
        return "bg-yellow-100 text-yellow-700";
      case "Python":
        return "bg-blue-100 text-blue-700";
      case "Java":
        return "bg-orange-100 text-orange-700";
      case "C++":
        return "bg-purple-100 text-purple-700";
      case "TypeScript":
        return "bg-indigo-100 text-indigo-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Algoritmos":
        return "bg-blue-500";
      case "Estruturas de Dados":
        return "bg-green-500";
      case "System Design":
        return "bg-purple-500";
      case "Frontend":
        return "bg-pink-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {challenges.map((challenge) => (
        <Card
          key={challenge.id}
          className={`group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden ${
            challenge.featured ? "ring-2 ring-blue-200" : ""
          }`}
        >
          <CardHeader className="pb-3">
            {/* Header Badges */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {challenge.featured && (
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none">
                    <Star className="w-3 h-3 mr-1" />
                    Destaque
                  </Badge>
                )}
                {challenge.trending && (
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-none">
                    <Flame className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                )}
              </div>
              <div
                className={`w-3 h-3 rounded-full ${getCategoryColor(
                  challenge.category
                )} opacity-60`}
                title={challenge.category}
              ></div>
            </div>

            {/* Title and Description */}
            <div className="space-y-2">
              <h3 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                {challenge.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                {challenge.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {challenge.tags.slice(0, 3).map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs bg-gray-100 text-gray-700"
                >
                  {tag}
                </Badge>
              ))}
              {challenge.tags.length > 3 && (
                <Badge
                  variant="secondary"
                  className="text-xs bg-gray-100 text-gray-700"
                >
                  +{challenge.tags.length - 3}
                </Badge>
              )}
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Challenge Info Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Zap className="w-4 h-4 text-blue-500" />
                  <span className="font-bold text-blue-600">
                    +{challenge.xp}
                  </span>
                </div>
                <div className="text-xs text-gray-600">XP Reward</div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="font-bold text-green-600">
                    {challenge.estimatedTime}
                  </span>
                </div>
                <div className="text-xs text-gray-600">Tempo Est.</div>
              </div>
            </div>

            {/* Difficulty and Language */}
            <div className="flex gap-2">
              <Badge
                className={`border ${getDifficultyColor(challenge.difficulty)}`}
              >
                {challenge.difficulty}
              </Badge>
              <Badge className={getLanguageColor(challenge.language)}>
                {challenge.language}
              </Badge>
            </div>

            {/* Completion Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Taxa de Sucesso</span>
                <span className="font-semibold">
                  {challenge.completionRate}%
                </span>
              </div>
              <Progress value={challenge.completionRate} className="h-2" />
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{challenge.participants.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Target className="w-4 h-4" />
                <span>{challenge.category}</span>
              </div>
            </div>

            {/* Action Button */}
            <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg group-hover:shadow-xl">
              <Code className="w-4 h-4 mr-2" />
              Resolver Desafio
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
