import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Brain,
  Users,
  Trophy,
  Code,
  Zap,
  Target,
  Rocket,
  Shield,
  Globe,
  Heart,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "IA Personalizada",
      description:
        "Sistema inteligente que adapta o aprendizado ao seu ritmo e estilo",
      color: "from-purple-500 to-pink-500",
      badge: "Novo",
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description:
        "Conecte-se com desenvolvedores do mundo todo e compartilhe conhecimento",
      color: "from-blue-500 to-cyan-500",
      badge: "Popular",
    },
    {
      icon: Trophy,
      title: "Sistema de Conquistas",
      description:
        "Desbloqueie badges e certificados conforme progride em sua jornada",
      color: "from-yellow-500 to-orange-500",
      badge: "Gamificado",
    },
    {
      icon: Code,
      title: "Editor Interativo",
      description:
        "Pratique código em tempo real com feedback instantâneo e sugestões",
      color: "from-green-500 to-emerald-500",
      badge: "Essencial",
    },
    {
      icon: Zap,
      title: "Desafios Diários",
      description:
        "Novos problemas de programação todos os dias para manter você afiado",
      color: "from-red-500 to-pink-500",
      badge: "Diário",
    },
    {
      icon: Target,
      title: "Metas Personalizadas",
      description:
        "Defina objetivos específicos e acompanhe seu progresso detalhadamente",
      color: "from-indigo-500 to-purple-500",
      badge: "Pro",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">
            <Rocket className="w-4 h-4 mr-1" />
            Recursos Incríveis
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tudo que Você Precisa para
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {" "}
              Evoluir
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ferramentas poderosas e recursos inovadores para acelerar seu
            aprendizado e desenvolvimento profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-2xl bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              100% Seguro
            </h3>
            <p className="text-gray-600">
              Seus dados e progresso protegidos com criptografia de ponta
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
            <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Global</h3>
            <p className="text-gray-600">
              Acesse de qualquer lugar do mundo, a qualquer momento
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl border border-pink-100">
            <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Suporte 24/7
            </h3>
            <p className="text-gray-600">
              Nossa equipe está sempre pronta para ajudar você
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
