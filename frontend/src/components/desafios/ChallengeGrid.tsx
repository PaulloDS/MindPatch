"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Zap, Clock, Users, Star, Code, Target, Flame } from "lucide-react";
import { useEffect, useState } from "react";

interface Challenge {
  id: number;
  titulo: string;
  descricao: string;
  dificuldade: string;
  linguagem: string;
  pontos: number;
  tempoEstimado: number;
  tags: string[];
  categoria?: string;
  taxaConclusao?: number; // progresso do usuário (vem direto do UserChallenge)
  status?: string;
  featured?: boolean;
  trending?: boolean;
}

export default function ChallengeGrid() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChallenges() {
      try {
        const userId = 1;
        const res = await fetch(`/challenges?userId=${userId}`);
        const data = await res.json();
        setChallenges(data);
      } catch (err) {
        console.error("Erro ao buscar desafios: ", err);
      } finally {
        setLoading(false);
      }
    }
    fetchChallenges();
  }, []);

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
  if (loading) return <div>Carregando desafios...</div>;

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
                  challenge.categoria
                )} opacity-60`}
                title={challenge.categoria}
              ></div>
            </div>

            {/* Title and Description */}
            <div className="space-y-2">
              <h3 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                {challenge.titulo}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                {challenge.descricao}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {challenge.tags?.slice(0, 3).map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs bg-gray-100 text-gray-700"
                >
                  {tag}
                </Badge>
              ))}
              {challenge.tags && challenge.tags.length > 3 && (
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
                    +{challenge.pontos}
                  </span>
                </div>
                <div className="text-xs text-gray-600">XP Reward</div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="font-bold text-green-600">
                    {challenge.tempoEstimado} min
                  </span>
                </div>
                <div className="text-xs text-gray-600">Tempo Est.</div>
              </div>
            </div>

            {/* Difficulty and Language */}
            <div className="flex gap-2">
              <Badge
                className={`border ${getDifficultyColor(
                  challenge.dificuldade
                )}`}
              >
                {challenge.dificuldade}
              </Badge>
              <Badge className={getLanguageColor(challenge.linguagem)}>
                {challenge.linguagem}
              </Badge>
            </div>

            {/* Completion Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progresso</span>
                <span className="font-semibold">
                  {challenge.taxaConclusao ?? 0}%
                </span>
              </div>
              <Progress value={challenge.taxaConclusao ?? 0} className="h-2" />
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Target className="w-4 h-4" />
                <span>{challenge.categoria}</span>
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
