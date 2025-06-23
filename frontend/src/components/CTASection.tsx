import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/circuit.svg')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Junte-se a milhares de desenvolvedores
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pronto para Acelerar
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Sua Carreira?
            </span>
          </h2>

          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Comece sua jornada hoje mesmo e descubra como nossa plataforma pode
            transformar sua forma de aprender e evoluir como desenvolvedor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Começar Gratuitamente
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
            >
              Falar com Especialista
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-green-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span className="text-sm">Grátis para começar</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span className="text-sm">Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span className="text-sm">Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
