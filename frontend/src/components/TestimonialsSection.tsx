import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Frontend Developer",
      company: "TechCorp",
      content:
        "Esta plataforma revolucionou minha forma de aprender. Os desafios são envolventes e a comunidade é incrível!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Carlos Santos",
      role: "Full Stack Developer",
      company: "StartupXYZ",
      content:
        "O sistema de ranking me motiva todos os dias. Já aprendi 3 novas linguagens em apenas 2 meses!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Maria Oliveira",
      role: "Backend Developer",
      company: "DevCompany",
      content:
        "A qualidade dos desafios e o feedback da comunidade são excepcionais. Recomendo para todos!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que Nossa
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {" "}
              Comunidade{" "}
            </span>
            Diz
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Histórias reais de desenvolvedores que transformaram suas carreiras
            conosco
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-green-400 mb-4" />

                <p className="text-gray-200 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
