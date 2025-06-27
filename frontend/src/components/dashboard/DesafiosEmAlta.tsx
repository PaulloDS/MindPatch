"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Star,
  Clock,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function DesafiosEmAlta() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // TODO: Buscar desafios em alta da API
  // Endpoint: GET /api/challenges/trending?limit=8
  // Response: List<TrendingChallengeDTO>
  const trendingChallenges = [
    {
      id: 1,
      title: "Implement LRU Cache",
      description:
        "Design and implement a data structure for Least Recently Used (LRU) cache with O(1) operations",
      difficulty: "Difícil",
      language: "Python",
      xpReward: 300,
      participants: 2847,
      completionRate: 23,
      trending: "+45%",
      tags: ["Hash Table", "Linked List", "Design"],
      estimatedTime: "60 min",
      gradient: "from-red-500 to-pink-500",
    },
    {
      id: 2,
      title: "Valid Parentheses",
      description:
        "Determine if the input string has valid parentheses using stack data structure",
      difficulty: "Fácil",
      language: "JavaScript",
      xpReward: 100,
      participants: 5234,
      completionRate: 78,
      trending: "+32%",
      tags: ["Stack", "String"],
      estimatedTime: "20 min",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Merge K Sorted Lists",
      description:
        "Merge k sorted linked lists and return it as one sorted list using divide and conquer",
      difficulty: "Difícil",
      language: "Java",
      xpReward: 350,
      participants: 1923,
      completionRate: 18,
      trending: "+28%",
      tags: ["Linked List", "Divide and Conquer", "Heap"],
      estimatedTime: "75 min",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: 4,
      title: "Binary Tree Level Order",
      description:
        "Return the level order traversal of a binary tree using BFS algorithm",
      difficulty: "Médio",
      language: "C++",
      xpReward: 200,
      participants: 3456,
      completionRate: 45,
      trending: "+25%",
      tags: ["Tree", "BFS", "Queue"],
      estimatedTime: "40 min",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 5,
      title: "Longest Substring",
      description:
        "Find the length of the longest substring without repeating characters using sliding window",
      difficulty: "Médio",
      language: "Python",
      xpReward: 180,
      participants: 4567,
      completionRate: 52,
      trending: "+22%",
      tags: ["Hash Table", "String", "Sliding Window"],
      estimatedTime: "35 min",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      id: 6,
      title: "Word Ladder",
      description:
        "Find the shortest transformation sequence from beginWord to endWord using BFS",
      difficulty: "Difícil",
      language: "JavaScript",
      xpReward: 280,
      participants: 1654,
      completionRate: 31,
      trending: "+20%",
      tags: ["BFS", "Hash Table", "String"],
      estimatedTime: "55 min",
      gradient: "from-teal-500 to-green-500",
    },
    {
      id: 7,
      title: "Maximum Subarray",
      description:
        "Find the contiguous subarray with the largest sum using Kadane's algorithm",
      difficulty: "Médio",
      language: "Python",
      xpReward: 150,
      participants: 3890,
      completionRate: 67,
      trending: "+18%",
      tags: ["Dynamic Programming", "Array"],
      estimatedTime: "30 min",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 8,
      title: "Two Sum",
      description:
        "Find two numbers in array that add up to target using hash map approach",
      difficulty: "Fácil",
      language: "Java",
      xpReward: 80,
      participants: 8234,
      completionRate: 85,
      trending: "+15%",
      tags: ["Hash Table", "Array"],
      estimatedTime: "15 min",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const currentChallenge = trendingChallenges[currentIndex];

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
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Python":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Java":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "C++":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const nextChallenge = () => {
    setCurrentIndex((prev) => (prev + 1) % trendingChallenges.length);
  };

  const prevChallenge = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + trendingChallenges.length) % trendingChallenges.length
    );
  };

  return (
    <Card className="bg-gradient-to-br from-white via-orange-50/30 to-red-50/30 backdrop-blur-sm border border-orange-200/50 shadow-xl">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                🔥 Em Alta
              </h3>
            </div>
          </CardTitle>

          {/* Navigation */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevChallenge}
              className="h-8 w-8 p-0 rounded-full hover:bg-orange-100"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-xs text-gray-500 px-2">
              {currentIndex + 1}/{trendingChallenges.length}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextChallenge}
              className="h-8 w-8 p-0 rounded-full hover:bg-orange-100"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Challenge Card */}
        <div className="relative overflow-hidden">
          <div
            key={currentChallenge.id}
            className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${currentChallenge.gradient} opacity-5`}
            />

            {/* Trending Badge */}
            <div className="absolute top-3 right-3">
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs border-0">
                {currentChallenge.trending}
              </Badge>
            </div>

            {/* Header */}
            <div className="relative z-10 mb-3">
              <h4 className="font-bold text-gray-800 mb-2 line-clamp-1 pr-16">
                {currentChallenge.title}
              </h4>
              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                {currentChallenge.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              {currentChallenge.tags.slice(0, 2).map((tag, tagIndex) => (
                <Badge
                  key={tagIndex}
                  variant="secondary"
                  className="text-xs bg-gray-100 text-gray-700"
                >
                  {tag}
                </Badge>
              ))}
              {currentChallenge.tags.length > 2 && (
                <Badge
                  variant="secondary"
                  className="text-xs bg-gray-100 text-gray-700"
                >
                  +{currentChallenge.tags.length - 2}
                </Badge>
              )}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="flex items-center gap-1.5 bg-yellow-50 rounded-lg p-2">
                <Star className="w-3 h-3 text-yellow-500" />
                <span className="text-xs font-medium text-gray-700">
                  +{currentChallenge.xpReward} XP
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-blue-50 rounded-lg p-2">
                <Clock className="w-3 h-3 text-blue-500" />
                <span className="text-xs font-medium text-gray-700">
                  {currentChallenge.estimatedTime}
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-purple-50 rounded-lg p-2">
                <Users className="w-3 h-3 text-purple-500" />
                <span className="text-xs font-medium text-gray-700">
                  {currentChallenge.participants.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-green-50 rounded-lg p-2">
                <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                <span className="text-xs font-medium text-gray-700">
                  {currentChallenge.completionRate}%
                </span>
              </div>
            </div>

            {/* Difficulty and Language Badges */}
            <div className="flex gap-2 mb-3">
              <Badge
                className={`${getDifficultyColor(
                  currentChallenge.difficulty
                )} border text-xs font-medium`}
              >
                {currentChallenge.difficulty}
              </Badge>
              <Badge
                className={`${getLanguageColor(
                  currentChallenge.language
                )} border text-xs font-medium`}
              >
                {currentChallenge.language}
              </Badge>
            </div>

            {/* Action Button */}
            <Button
              size="sm"
              className={`w-full bg-gradient-to-r ${currentChallenge.gradient} hover:shadow-lg text-white border-0 font-medium transition-all duration-300`}
            >
              Resolver Agora
            </Button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-1 mt-3">
          {trendingChallenges.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-orange-500 to-red-500 w-4"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
