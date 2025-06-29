"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Trophy,
  Star,
  Target,
  Flame,
  Lock,
  CheckCircle,
  Clock,
  Code,
  Users,
  Crown,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ConquistasPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const stats = [
    {
      icon: Trophy,
      label: "Conquistas Desbloqueadas",
      value: 47,
      total: 120,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
    },
    {
      icon: Star,
      label: "Pontos Totais",
      value: 15420,
      total: null,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: Flame,
      label: "Sequência Atual",
      value: 89,
      total: null,
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-50 to-orange-50",
    },
  ];

  const categories = [
    { id: "all", name: "Todas", icon: Trophy, count: 120 },
    { id: "coding", name: "Programação", icon: Code, count: 45 },
    { id: "community", name: "Comunidade", icon: Users, count: 25 },
    { id: "streak", name: "Sequência", icon: Flame, count: 15 },
    { id: "special", name: "Especiais", icon: Crown, count: 10 },
  ];

  const achievements = [
    // Conquistas Desbloqueadas
    {
      id: 1,
      title: "Primeiro Passo",
      description: "Complete seu primeiro desafio",
      icon: "🎯",
      category: "coding",
      rarity: "Comum",
      rarityColor: "from-gray-400 to-gray-500",
      points: 50,
      unlocked: true,
      unlockedAt: "15 dias atrás",
      progress: 100,
      total: 1,
    },
    {
      id: 2,
      title: "Mestre JavaScript",
      description: "Complete 100 desafios de JavaScript",
      icon: "🟨",
      category: "coding",
      rarity: "Lendário",
      rarityColor: "from-yellow-400 to-orange-400",
      points: 500,
      unlocked: true,
      unlockedAt: "2 horas atrás",
      progress: 100,
      total: 100,
    },
    {
      id: 3,
      title: "Sequência de Fogo",
      description: "Mantenha uma sequência de 30 dias",
      icon: "🔥",
      category: "streak",
      rarity: "Épico",
      rarityColor: "from-purple-400 to-pink-400",
      points: 300,
      unlocked: true,
      unlockedAt: "1 dia atrás",
      progress: 100,
      total: 30,
    },
    {
      id: 4,
      title: "Ajudante da Comunidade",
      description: "Ajude 50 pessoas na comunidade",
      icon: "🤝",
      category: "community",
      rarity: "Raro",
      rarityColor: "from-blue-400 to-cyan-400",
      points: 200,
      unlocked: true,
      unlockedAt: "5 dias atrás",
      progress: 100,
      total: 50,
    },

    // Conquistas em Progresso
    {
      id: 5,
      title: "Mestre Python",
      description: "Complete 100 desafios de Python",
      icon: "🐍",
      category: "coding",
      rarity: "Lendário",
      rarityColor: "from-yellow-400 to-orange-400",
      points: 500,
      unlocked: false,
      progress: 67,
      total: 100,
    },
    {
      id: 6,
      title: "Maratonista",
      description: "Complete 10 desafios em um dia",
      icon: "⚡",
      category: "coding",
      rarity: "Épico",
      rarityColor: "from-purple-400 to-pink-400",
      points: 200,
      unlocked: false,
      progress: 7,
      total: 10,
    },
    {
      id: 7,
      title: "Mentor Experiente",
      description: "Seja mentor de 20 pessoas",
      icon: "👨‍🏫",
      category: "community",
      rarity: "Épico",
      rarityColor: "from-purple-400 to-pink-400",
      points: 400,
      unlocked: false,
      progress: 12,
      total: 20,
    },
    {
      id: 8,
      title: "Centenário",
      description: "Mantenha uma sequência de 100 dias",
      icon: "💯",
      category: "streak",
      rarity: "Lendário",
      rarityColor: "from-yellow-400 to-orange-400",
      points: 1000,
      unlocked: false,
      progress: 89,
      total: 100,
    },

    // Conquistas Bloqueadas
    {
      id: 9,
      title: "Lenda do Código",
      description: "Complete 1000 desafios",
      icon: "👑",
      category: "coding",
      rarity: "Mítico",
      rarityColor: "from-pink-500 to-purple-600",
      points: 2000,
      unlocked: false,
      progress: 234,
      total: 1000,
    },
    {
      id: 10,
      title: "Guardião da Comunidade",
      description: "Seja moderador por 6 meses",
      icon: "🛡️",
      category: "special",
      rarity: "Mítico",
      rarityColor: "from-pink-500 to-purple-600",
      points: 1500,
      unlocked: false,
      progress: 0,
      total: 180,
      locked: true,
    },
    {
      id: 11,
      title: "Imortal",
      description: "Mantenha uma sequência de 365 dias",
      icon: "⭐",
      category: "streak",
      rarity: "Mítico",
      rarityColor: "from-pink-500 to-purple-600",
      points: 5000,
      unlocked: false,
      progress: 89,
      total: 365,
    },
    {
      id: 12,
      title: "Primeiro Lugar Global",
      description: "Alcance o 1º lugar no ranking global",
      icon: "🏆",
      category: "special",
      rarity: "Mítico",
      rarityColor: "from-pink-500 to-purple-600",
      points: 3000,
      unlocked: false,
      progress: 0,
      total: 1,
      locked: true,
    },
  ];

  const filteredAchievements =
    selectedCategory === "all"
      ? achievements
      : achievements.filter(
          (achievement) => achievement.category === selectedCategory
        );

  const unlockedAchievements = filteredAchievements.filter((a) => a.unlocked);
  const inProgressAchievements = filteredAchievements.filter(
    (a) => !a.unlocked && !a.locked && a.progress > 0
  );
  const lockedAchievements = filteredAchievements.filter(
    (a) => !a.unlocked && (a.locked || a.progress === 0)
  );

  const getRarityGradient = (rarity: string) => {
    switch (rarity) {
      case "Comum":
        return "from-gray-400 to-gray-500";
      case "Raro":
        return "from-blue-400 to-cyan-400";
      case "Épico":
        return "from-purple-400 to-pink-400";
      case "Lendário":
        return "from-yellow-400 to-orange-400";
      case "Mítico":
        return "from-pink-500 to-purple-600";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  const AchievementCard = ({
    achievement,
    index,
  }: {
    achievement: any;
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
        achievement.unlocked
          ? "bg-gradient-to-br from-white to-gray-50 border-2 border-green-200 shadow-lg hover:shadow-xl"
          : achievement.locked
          ? "bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300 opacity-60"
          : "bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 shadow-md hover:shadow-lg"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent transform rotate-45 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
      </div>

      {/* Unlock Status Indicator */}
      <div className="absolute top-4 right-4">
        {achievement.unlocked ? (
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
        ) : achievement.locked ? (
          <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center shadow-lg">
            <Lock className="w-5 h-5 text-white" />
          </div>
        ) : (
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
            <Clock className="w-5 h-5 text-white" />
          </div>
        )}
      </div>

      <div className="relative p-6">
        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`text-4xl ${
              achievement.unlocked ? "" : achievement.locked ? "grayscale" : ""
            }`}
          >
            {achievement.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3
                className={`font-bold text-lg ${
                  achievement.unlocked
                    ? "text-gray-800"
                    : achievement.locked
                    ? "text-gray-500"
                    : "text-gray-700"
                }`}
              >
                {achievement.title}
              </h3>
              <Badge
                className={`bg-gradient-to-r ${getRarityGradient(
                  achievement.rarity
                )} text-white border-0 text-xs px-2 py-1`}
              >
                {achievement.rarity}
              </Badge>
            </div>
            <p
              className={`text-sm ${
                achievement.unlocked
                  ? "text-gray-600"
                  : achievement.locked
                  ? "text-gray-400"
                  : "text-gray-500"
              }`}
            >
              {achievement.description}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        {!achievement.unlocked && !achievement.locked && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600">Progresso</span>
              <span className="font-medium text-gray-800">
                {achievement.progress}/{achievement.total}
              </span>
            </div>
            <Progress
              value={(achievement.progress / achievement.total) * 100}
              className="h-2 bg-gray-200"
            />
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-0">
              +{achievement.points} pts
            </Badge>
            {achievement.unlocked && achievement.unlockedAt && (
              <span className="text-xs text-gray-500">
                {achievement.unlockedAt}
              </span>
            )}
          </div>

          {achievement.locked && (
            <Badge className="bg-gray-200 text-gray-600">Bloqueado</Badge>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-8 lg:pl-80">
      {/* Header */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 mb-4"
        >
          <h1 className="text-3xl font-bold text-gray-800">🏆 Conquistas</h1>
        </motion.div>
        <p className="text-gray-600">
          Desbloqueie conquistas incríveis enquanto evolui suas habilidades de
          programação
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              className={`bg-gradient-to-br ${stat.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-0`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  {stat.total && (
                    <Badge className="bg-white/80 text-gray-700">
                      {Math.round((stat.value / stat.total) * 100)}%
                    </Badge>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-800">
                      {stat.value.toLocaleString()}
                    </span>
                    {stat.total && (
                      <span className="text-gray-500">/ {stat.total}</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </p>

                  {stat.total && (
                    <Progress
                      value={(stat.value / stat.total) * 100}
                      className="h-2 bg-white/50"
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Categories Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap gap-3 justify-center"
      >
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
              selectedCategory === category.id
                ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                : "bg-white hover:bg-gray-50 text-gray-700 border-gray-200"
            }`}
          >
            <category.icon className="w-4 h-4" />
            {category.name}
            <Badge
              className={`ml-1 ${
                selectedCategory === category.id
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {category.count}
            </Badge>
          </Button>
        ))}
      </motion.div>

      {/* Achievements Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Tabs defaultValue="unlocked" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1 rounded-xl">
            <TabsTrigger
              value="unlocked"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Desbloqueadas ({unlockedAchievements.length})
            </TabsTrigger>
            <TabsTrigger
              value="progress"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              <Clock className="w-4 h-4 mr-2" />
              Em Progresso ({inProgressAchievements.length})
            </TabsTrigger>
            <TabsTrigger
              value="locked"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              <Lock className="w-4 h-4 mr-2" />
              Bloqueadas ({lockedAchievements.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="unlocked" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {unlockedAchievements.map((achievement, index) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                  index={index}
                />
              ))}
            </div>
            {unlockedAchievements.length === 0 && (
              <div className="text-center py-12">
                <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">
                  Nenhuma conquista desbloqueada nesta categoria ainda.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="progress" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inProgressAchievements.map((achievement, index) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                  index={index}
                />
              ))}
            </div>
            {inProgressAchievements.length === 0 && (
              <div className="text-center py-12">
                <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">
                  Nenhuma conquista em progresso nesta categoria.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="locked" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lockedAchievements.map((achievement, index) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                  index={index}
                />
              ))}
            </div>
            {lockedAchievements.length === 0 && (
              <div className="text-center py-12">
                <Lock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">
                  Todas as conquistas desta categoria estão disponíveis!
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
