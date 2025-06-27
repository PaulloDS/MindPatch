"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Heart,
  Share2,
  Code,
  Trophy,
  BookOpen,
  Users,
  MoreHorizontal,
  Zap,
  Star,
  TrendingUp,
  Clock,
  Eye,
} from "lucide-react";
import { hr } from "date-fns/locale";
import Image from "next/image";

export default function FeedComunidade() {
  // TODO: Buscar posts da comunidade da API
  // Endpoint: GET /api/community/feed?page=0&size=10
  // Response: Page<PostDTO>
  const posts = [
    {
      id: 1,
      user: {
        name: "Ana Silva",
        avatar: "/placeholder.svg?height=40&width=40",
        level: 15,
        badge: "🚀 Expert",
        verified: true,
      },
      content:
        "Acabei de resolver o desafio de algoritmos de ordenação! A solução com merge sort foi incrível! 🎉",
      type: "achievement",
      challenge: "Merge Sort Implementation",
      language: "Python",
      difficulty: "Avançado",
      likes: 42,
      comments: 8,
      shares: 3,
      views: 156,
      time: "2h",
      trending: true,
      code: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)`,
    },
    {
      id: 2,
      user: {
        name: "Carlos Dev",
        avatar: "/placeholder.svg?height=40&width=40",
        level: 8,
        badge: "⚡ Rising",
        verified: false,
      },
      content:
        "Alguém pode me ajudar com React Hooks? Estou com dificuldades no useEffect 🤔",
      type: "question",
      language: "JavaScript",
      difficulty: "Intermediário",
      likes: 23,
      comments: 15,
      shares: 2,
      views: 89,
      time: "4h",
      trending: false,
    },
    {
      id: 3,
      user: {
        name: "Maria Code",
        avatar: "/placeholder.svg?height=40&width=40",
        level: 22,
        badge: "👑 Master",
        verified: true,
      },
      content:
        "Compartilhando minha solução para o problema de árvores binárias! Implementei usando recursão.",
      type: "solution",
      challenge: "Binary Tree Traversal",
      language: "Java",
      difficulty: "Avançado",
      likes: 67,
      comments: 12,
      shares: 8,
      views: 234,
      time: "6h",
      trending: true,
      code: `public void inorderTraversal(TreeNode root) {
    if (root != null) {
        inorderTraversal(root.left);
        System.out.print(root.val + " ");
        inorderTraversal(root.right);
    }
}`,
    },
  ];

  const getPostIcon = (type: string) => {
    switch (type) {
      case "achievement":
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case "question":
        return <MessageCircle className="w-5 h-5 text-blue-500" />;
      case "solution":
        return <Code className="w-5 h-5 text-green-500" />;
      default:
        return <BookOpen className="w-5 h-5 text-gray-500" />;
    }
  };

  const getPostTypeStyle = (type: string) => {
    switch (type) {
      case "achievement":
        return {
          badge:
            "bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border border-yellow-200",
          border: "border-l-4 border-l-yellow-400",
          glow: "shadow-yellow-100",
        };
      case "question":
        return {
          badge:
            "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200",
          border: "border-l-4 border-l-blue-400",
          glow: "shadow-blue-100",
        };
      case "solution":
        return {
          badge:
            "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200",
          border: "border-l-4 border-l-green-400",
          glow: "shadow-green-100",
        };
      default:
        return {
          badge:
            "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border border-gray-200",
          border: "border-l-4 border-l-gray-400",
          glow: "shadow-gray-100",
        };
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil":
        return "bg-green-100 text-green-700 border border-green-200";
      case "Intermediário":
        return "bg-yellow-100 text-yellow-700 border border-yellow-200";
      case "Avançado":
        return "bg-red-100 text-red-700 border border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-200";
    }
  };

  const getLanguageColor = (language: string) => {
    switch (language) {
      case "Python":
        return "bg-blue-100 text-blue-700 border border-blue-200";
      case "JavaScript":
        return "bg-yellow-100 text-yellow-700 border border-yellow-200";
      case "Java":
        return "bg-orange-100 text-orange-700 border border-orange-200";
      case "TypeScript":
        return "bg-blue-100 text-blue-700 border border-blue-200";
      default:
        return "bg-purple-100 text-purple-700 border border-purple-200";
    }
  };

  return (
    <Card className="bg-white/90 backdrop-blur-lg border border-white/40 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50">
      <CardHeader className="border-b border-green-100/50">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
            <span className="text-2xl">
              <Image
                src="/comunidade.png"
                width={30}
                height={0}
                alt="Ícone Dev"
              />
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
              Feed da Comunidade
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Veja o que outros dev's estão compartilhando
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Badge className="bg-green-100 text-green-700 border border-green-200 font-semibold">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Ao Vivo
              </Badge>
            </div>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 space-y-8 mt-[-30px]">
        {posts.map((post, index) => {
          const postStyle = getPostTypeStyle(post.type);

          return (
            <div
              key={post.id}
              className={`relative bg-gradient-to-br from-white via-gray-50/50 to-white rounded-3xl p-8 border border-gray-100/80 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1 ${postStyle.border} ${postStyle.glow} group`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Trending Indicator */}
              {post.trending && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Trending
                </div>
              )}

              {/* Post Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar className="w-16 h-16 border-4 border-white shadow-xl ring-2 ring-green-100">
                      <AvatarImage
                        src={post.user.avatar || "/placeholder.svg"}
                      />
                      <AvatarFallback className="bg-gradient-to-r from-green-400 to-emerald-400 text-white font-bold text-lg">
                        {post.user.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    {post.user.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1 shadow-lg">
                        <Star className="w-3 h-3 text-white fill-current" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-lg text-gray-800">
                        {post.user.name}
                      </h4>
                      {post.user.verified && (
                        <Badge className="bg-blue-100 text-blue-700 border border-blue-200 text-xs font-semibold">
                          Verificado
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 border border-purple-200 font-semibold">
                        <Zap className="w-3 h-3 mr-1" />
                        Nível {post.user.level}
                      </Badge>
                      <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 border border-orange-200 font-semibold">
                        {post.user.badge}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-3 h-3" />
                        {post.time}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge className={`text-sm font-semibold ${postStyle.badge}`}>
                    {getPostIcon(post.type)}
                    <span className="ml-2 capitalize">{post.type}</span>
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-6">
                <p className="text-gray-700 text-base leading-relaxed mb-4 font-medium">
                  {post.content}
                </p>

                {/* Challenge Info */}
                {post.challenge && (
                  <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 mb-4 border border-blue-100/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-blue-800 text-lg">
                          {post.challenge}
                        </h5>
                        <p className="text-blue-600 text-sm">
                          Desafio de Programação
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      <Badge
                        className={`font-semibold ${getLanguageColor(
                          post.language
                        )}`}
                      >
                        {post.language}
                      </Badge>
                      <Badge
                        className={`font-semibold ${getDifficultyColor(
                          post.difficulty
                        )}`}
                      >
                        {post.difficulty}
                      </Badge>
                    </div>
                  </div>
                )}

                {/* Code Block */}
                {post.code && (
                  <div className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 rounded-2xl p-6 mb-4 border border-gray-700 shadow-2xl overflow-hidden">
                    <div className="absolute top-4 left-4 flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gray-800 text-gray-300 border border-gray-600 text-xs">
                        {post.language}
                      </Badge>
                    </div>
                    <pre className="text-green-400 text-sm font-mono overflow-x-auto mt-8 leading-relaxed">
                      <code>{post.code}</code>
                    </pre>
                  </div>
                )}
              </div>

              {/* Post Stats */}
              <div className="flex items-center gap-6 mb-6 p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-2 text-gray-600">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    {post.views} visualizações
                  </span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">há {post.time}</span>
                </div>
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-8">
                  <button className="flex items-center gap-3 text-gray-500 hover:text-red-500 transition-all duration-300 hover:scale-110 group/like">
                    <div className="p-2 rounded-full group-hover/like:bg-red-50 transition-colors">
                      <Heart className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">{post.likes}</span>
                  </button>

                  <button className="flex items-center gap-3 text-gray-500 hover:text-blue-500 transition-all duration-300 hover:scale-110 group/comment">
                    <div className="p-2 rounded-full group-hover/comment:bg-blue-50 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">{post.comments}</span>
                  </button>

                  <button className="flex items-center gap-3 text-gray-500 hover:text-green-500 transition-all duration-300 hover:scale-110 group/share">
                    <div className="p-2 rounded-full group-hover/share:bg-green-50 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">{post.shares}</span>
                  </button>
                </div>

                <Button
                  size="sm"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Ver Detalhes
                </Button>
              </div>
            </div>
          );
        })}

        {/* Load More */}
        <div className="text-center pt-8">
          <Button
            variant="outline"
            className="w-full py-4 rounded-2xl border-2 border-green-200 hover:border-green-300 hover:bg-green-50 text-green-700 font-semibold text-lg transition-all duration-300 hover:shadow-lg bg-transparent"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin opacity-0 group-hover:opacity-100 transition-opacity"></div>
              Carregar Mais Posts
            </div>
          </Button>
        </div>
      </CardContent>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Card>
  );
}
