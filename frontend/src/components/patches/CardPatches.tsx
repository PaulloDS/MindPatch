"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Zap, Clock, Users, Star, Code, Target, Flame } from "lucide-react";
import { useState } from "react";

export default function CardPatches() {
  const [lado, setLado] = useState("Público");
  const [modalAbertoId, setModalAbertoId] = useState<number | null>(null);

  const toggleLado = () => {
    setLado((prev) => (prev === "Público" ? "Privado" : "Público"));
  };

  // TODO: buscar desafios paginados   GET /api/challenges?...
  const challenges = [
    {
      id: 1,
      titulo: "Padrão de Entity",
      descricao: "Modelo padrão para entidades em Java",
      codigo: `	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String titulo;
	
	@Column(columnDefinition = "TEXT")
	private String descricao;
	
	@Column(columnDefinition = "TEXT")
	private String codigo;
	
	@Column(columnDefinition = "TEXT")
	private String aprendizado;

	@Enumerated(EnumType.STRING)
	private Visibilidade visibilidade;
	
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User autor;
	
	@ManyToMany
	@JoinTable(
	name = "patch_tags",
	joinColumns = @JoinColumn(name = "patch_id"),
	inverseJoinColumns = @JoinColumn(name = "tag_id")
	)
	private Set<Tag> tags;
	
	@OneToMany(mappedBy = "patch")
	private List<Comment> comentarios;
	
	@CreationTimestamp
	private LocalDateTime criadoEm;
	
	@UpdateTimestamp
	private LocalDateTime atualizadoEm;`,
      aprendizado:
        "Criei uma entidade de patch, que pode ser usada como referência para outras entidades",
      visibilidade: "Público",
      autor: "Paulo",
      tags: ["Java", "Spring"],
      trending: true,
      comentarios: [
        {
          autor: "Paulo",
          texto: "Primeiro comentário",
          data: "27/08/25",
          horario: "18:21",
        },
      ],
      criadoEm: "26/06/2025",
      atualizadoEm: "28/06/2025",
    },
    {
      id: 2,
      titulo: "Padrão de Entity",
      descricao: "Modelo padrão para entidades em Java",
      codigo: `	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String titulo;
	
	@Column(columnDefinition = "TEXT")
	private String descricao;
	
	@Column(columnDefinition = "TEXT")
	private String codigo;
	
	@Column(columnDefinition = "TEXT")
	private String aprendizado;

	@Enumerated(EnumType.STRING)
	private Visibilidade visibilidade;
	
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User autor;
	
	@ManyToMany
	@JoinTable(
	name = "patch_tags",
	joinColumns = @JoinColumn(name = "patch_id"),
	inverseJoinColumns = @JoinColumn(name = "tag_id")
	)
	private Set<Tag> tags;
	
	@OneToMany(mappedBy = "patch")
	private List<Comment> comentarios;
	
	@CreationTimestamp
	private LocalDateTime criadoEm;
	
	@UpdateTimestamp
	private LocalDateTime atualizadoEm;`,
      aprendizado:
        "Criei uma entidade de patch, que pode ser usada como referência para outras entidades",
      visibilidade: "Público",
      autor: "Paulo",
      tags: ["Java", "Spring"],
      trending: true,
      comentarios: "Algoritmos",
      criadoEm: "26/06/2025",
      atualizadoEm: "28/06/2025",
    },
    {
      id: 3,
      titulo: "Padrão de Entity",
      descricao: "Modelo padrão para entidades em Java",
      codigo: `	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String titulo;
	
	@Column(columnDefinition = "TEXT")
	private String descricao;
	
	@Column(columnDefinition = "TEXT")
	private String codigo;
	
	@Column(columnDefinition = "TEXT")
	private String aprendizado;

	@Enumerated(EnumType.STRING)
	private Visibilidade visibilidade;
	
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User autor;
	
	@ManyToMany
	@JoinTable(
	name = "patch_tags",
	joinColumns = @JoinColumn(name = "patch_id"),
	inverseJoinColumns = @JoinColumn(name = "tag_id")
	)
	private Set<Tag> tags;
	
	@OneToMany(mappedBy = "patch")
	private List<Comment> comentarios;
	
	@CreationTimestamp
	private LocalDateTime criadoEm;
	
	@UpdateTimestamp
	private LocalDateTime atualizadoEm;`,
      aprendizado:
        "Criei uma entidade de patch, que pode ser usada como referência para outras entidades",
      visibilidade: "Público",
      autor: "Paulo",
      tags: ["Java", "Spring"],
      trending: true,
      comentarios: "Algoritmos",
      criadoEm: "26/06/2025",
      atualizadoEm: "28/06/2025",
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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6 my-5 w-full">
      {challenges.map((challenge) => (
        <Card
          key={challenge.id}
          className={`group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden`}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {challenge.trending && (
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-none">
                    <Flame className="w-3 h-3 mr-1" />
                    Em alta
                  </Badge>
                )}
              </div>
              <div className="flex gap-2">
                <Button className="w-[50%] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg group-hover:shadow-xl cursor-pointer">
                  ✏️ Editar
                </Button>
                <Button className="w-[50%] bg-gradient-to-r from-red-700 to-orange-800 hover:from-red-800 hover:to-orange-900 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg group-hover:shadow-xl cursor-pointer">
                  🗑️ Apagar
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                {challenge.titulo}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                {challenge.descricao}
              </p>
            </div>

            <div className="flex flex-wrap gap-1">
              {challenge.tags.slice(0, 3).map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs bg-emerald-200 text-green-800"
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
            <div>
              {challenge.codigo && (
                <div
                  onClick={() => setModalAbertoId(challenge.id)}
                  className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 rounded-2xl p-6 mb-4 border border-gray-700 shadow-2xl overflow-hidden cursor-pointer hover:ring-2 ring-green-500"
                >
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <pre className="text-green-400 text-sm font-mono overflow-y-scroll mt-8 leading-relaxed h-[200px]">
                    <code>{challenge.codigo}</code>
                  </pre>
                </div>
              )}

              {/* Modal somente do card clicado */}
              {modalAbertoId === challenge.id && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                  <div className="bg-gray-900 rounded-2xl shadow-lg max-w-4xl w-full p-6 relative">
                    <button
                      onClick={() => setModalAbertoId(null)}
                      className="absolute top-3 right-3 text-gray-300 hover:text-white"
                    >
                      ✖
                    </button>
                    <pre className="text-green-400 text-sm font-mono overflow-auto max-h-[70vh] rounded-md">
                      <code>{challenge.codigo}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>

            <div className="text-blue-950 font-semibold text-sm">
              {challenge.aprendizado}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3 text-center">
                <span className="font-bold text-green-600">
                  {challenge.criadoEm}
                </span>
                <div className="text-xs text-gray-600">Data de criação</div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="font-bold text-green-600">
                    {challenge.atualizadoEm}
                  </span>
                </div>
                <div className="text-xs text-gray-600">Data de atualização</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <span className="font-bold text-gray-700">👤 Autor:</span>
                <span>{challenge.autor}</span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleLado}
                  className={`w-8 h-4 flex items-center rounded-full p-1 transition-colors duration-300 ${
                    lado === "Privado" ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ${
                      lado === "Privado" ? "translate-x-3" : "translate-x-0"
                    }`}
                  />
                </button>
                <p className="text-sm text-gray-700">
                  <span>{lado === "Privado" ? "🔒" : "🌍"}</span>{" "}
                  <strong>{lado}</strong>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 ">
              {/*                */}
              <Badge className="w-full py-2 rounded-full bg-gray-500 text-sm">
                Visualizações: 329
              </Badge>
              <Badge className="w-full cursor-pointer py-2 rounded-full bg-blue-400 text-sm">
                Comentários: 21
              </Badge>
              <Badge className="w-full cursor-pointer py-2 rounded-full bg-red-400 text-sm">
                Curtidas: 98
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
