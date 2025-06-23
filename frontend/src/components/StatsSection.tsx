import { TrendingUp, Users, Code, Trophy } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "15,000+",
      label: "Desenvolvedores Ativos",
      description: "Comunidade crescente de programadores",
    },
    {
      icon: Code,
      value: "2,500+",
      label: "Desafios Completados",
      description: "Problemas resolvidos diariamente",
    },
    {
      icon: Trophy,
      value: "500+",
      label: "Certificações",
      description: "Conquistas desbloqueadas",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Taxa de Satisfação",
      description: "Feedback positivo da comunidade",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Números que Impressionam
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Nossa comunidade cresce a cada dia, impulsionando o desenvolvimento
            de milhares de programadores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <stat.icon className="w-12 h-12 text-green-200 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-green-100 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-green-200">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
