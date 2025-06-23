import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Star,
  Eye,
  GitFork,
  Heart,
  ExternalLink,
  Code,
  Calendar,
} from "lucide-react";
import Image from "next/image";

export default function ProjectsShowcase() {
  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description:
        "Dashboard completo para gerenciamento de loja online com React e Node.js",
      image: "/placeholder.svg?height=200&width=300",
      author: {
        name: "Ana Silva",
        avatar: "/placeholder.svg?height=40&width=40",
        level: 15,
      },
      technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
      stats: {
        stars: 234,
        views: 1520,
        forks: 45,
        likes: 89,
      },
      difficulty: "Avançado",
      category: "Full Stack",
      featured: true,
      createdAt: "2 dias atrás",
    },
    {
      id: 2,
      title: "App de Receitas",
      description:
        "Aplicativo mobile para descobrir e compartilhar receitas culinárias",
      image: "/placeholder.svg?height=200&width=300",
      author: {
        name: "Carlos Dev",
        avatar: "/placeholder.svg?height=40&width=40",
        level: 12,
      },
      technologies: ["React Native", "Firebase", "TypeScript"],
      stats: {
        stars: 156,
        views: 890,
        forks: 23,
        likes: 67,
      },
      difficulty: "Intermediário",
      category: "Mobile",
      featured: false,
      createdAt: "1 semana atrás",
    },
    {
      id: 3,
      title: "Sistema de Chat",
      description: "Chat em tempo real com salas, emojis e notificações push",
      image: "/placeholder.svg?height=200&width=300",
      author: {
        name: "Maria Code",
        avatar: "/placeholder.svg?height=40&width=40",
        level: 18,
      },
      technologies: ["Socket.io", "Express", "Vue.js", "Redis"],
      stats: {
        stars: 189,
        views: 1200,
        forks: 34,
        likes: 78,
      },
      difficulty: "Avançado",
      category: "Backend",
      featured: true,
      createdAt: "3 dias atrás",
    },
    {
      id: 4,
      title: "Portfolio Interativo",
      description:
        "Site portfolio com animações 3D e efeitos visuais impressionantes",
      image: "/placeholder.svg?height=200&width=300",
      author: {
        name: "João Master",
        avatar: "/placeholder.svg?height=40&width=40",
        level: 20,
      },
      technologies: ["Three.js", "GSAP", "Next.js", "Framer Motion"],
      stats: {
        stars: 312,
        views: 2100,
        forks: 67,
        likes: 145,
      },
      difficulty: "Avançado",
      category: "Frontend",
      featured: true,
      createdAt: "5 dias atrás",
    },
    {
      id: 5,
      title: "API de Criptomoedas",
      description: "API REST para tracking de preços e análise de criptomoedas",
      image: "/placeholder.svg?height=200&width=300",
      author: {
        name: "Tech Guru",
        avatar: "/placeholder.svg?height=40&width=40",
        level: 16,
      },
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
      stats: {
        stars: 98,
        views: 650,
        forks: 19,
        likes: 42,
      },
      difficulty: "Intermediário",
      category: "Backend",
      featured: false,
      createdAt: "1 semana atrás",
    },
    {
      id: 6,
      title: "Game 2D Plataforma",
      description:
        "Jogo de plataforma 2D com física realista e múltiplas fases",
      image: "/placeholder.svg?height=200&width=300",
      author: {
        name: "Game Dev",
        avatar: "/placeholder.svg?height=40&width=40",
        level: 14,
      },
      technologies: ["Unity", "C#", "Photon", "Blender"],
      stats: {
        stars: 267,
        views: 1800,
        forks: 56,
        likes: 123,
      },
      difficulty: "Avançado",
      category: "Game Dev",
      featured: false,
      createdAt: "4 dias atrás",
    },
  ];

  const categories = [
    { name: "Todos", count: 1250, active: true },
    { name: "Frontend", count: 450, active: false },
    { name: "Backend", count: 320, active: false },
    { name: "Full Stack", count: 280, active: false },
    { name: "Mobile", count: 150, active: false },
    { name: "Game Dev", count: 50, active: false },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4 px-4 py-2">
            <Code className="w-4 h-4 mr-1" />
            💼 Projetos da Comunidade
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Projetos
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Incríveis{" "}
            </span>
            da Nossa Comunidade
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            🚀 Explore projetos reais criados por desenvolvedores da nossa
            comunidade e inspire-se para criar o seu próprio
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                category.active
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105"
                  : "hover:bg-blue-50 hover:border-blue-300"
              }`}
            >
              {category.name}
              <Badge className="ml-2 bg-white/20 text-current border-none">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-none">
                    ⭐ Destaque
                  </Badge>
                )}
                <Badge
                  className={`absolute top-3 right-3 border-none text-white ${
                    project.difficulty === "Iniciante"
                      ? "bg-green-500"
                      : project.difficulty === "Intermediário"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {project.difficulty}
                </Badge>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <Button className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-gray-800 hover:bg-gray-100">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700"
                  >
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {project.createdAt}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs bg-gray-50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-8 h-8 border-2 border-blue-200">
                    <AvatarImage
                      src={project.author.avatar || "/placeholder.svg"}
                    />
                    <AvatarFallback>{project.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 text-sm">
                      {project.author.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      Nível {project.author.level}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{project.stats.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{project.stats.forks}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>{project.stats.likes}</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-none text-white max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                🚀 Pronto para Criar Seu Projeto?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Junte-se à nossa comunidade e compartilhe seus projetos
                incríveis com desenvolvedores do mundo todo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
                >
                  💻 Começar Projeto
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold"
                >
                  📚 Ver Tutoriais
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
