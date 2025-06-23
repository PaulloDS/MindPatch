import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import CommunitySection from "@/components/CommunitySection";
import LanguagesSection from "@/components/LanguagesSection";
import LearningPathSection from "@/components/LearningPathSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import AchievementsSection from "@/components/AchievementsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/50 overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Image
                  src="/logo-2.png"
                  width={50}
                  height={50}
                  alt="Logo"
                  className="hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                DevJourney
              </span>
            </div>

            <div className="hidden md:block">
              <div className="bg-white/90 backdrop-blur-sm py-3 px-8 rounded-full shadow-lg border border-white/30">
                <ul className="flex space-x-8 font-medium">
                  <li>
                    <a
                      href="#sobre"
                      className="text-gray-600 hover:text-green-600 transition-colors duration-300 relative group"
                    >
                      Sobre
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="text-gray-600 hover:text-green-600 transition-colors duration-300 relative group"
                    >
                      Features
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#comunidade"
                      className="text-gray-600 hover:text-green-600 transition-colors duration-300 relative group"
                    >
                      Comunidade
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#demo"
                      className="text-gray-600 hover:text-green-600 transition-colors duration-300 relative group"
                    >
                      Demo
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <a
              href="/auth/sign-in"
              className="relative overflow-hidden group bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Divirta-se</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <HeroSection />
        <StatsSection />
        <CommunitySection />
        <FeaturesSection />
        <LanguagesSection />
        <LearningPathSection />
        <ProjectsShowcase />
        <AchievementsSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
