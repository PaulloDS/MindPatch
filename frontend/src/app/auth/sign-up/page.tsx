"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Eye,
  Github,
  Mail,
  Lock,
  User,
  Sparkles,
  Check,
  Star,
  Trophy,
  Users,
  Zap,
  CheckCircle,
  Shield,
  Gift,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function RegisterPage() {
  const interests = [
    { id: "javascript", label: "JavaScript", color: "bg-yellow-500" },
    { id: "python", label: "Python", color: "bg-blue-500" },
    { id: "react", label: "React", color: "bg-cyan-500" },
    { id: "nodejs", label: "Node.js", color: "bg-green-500" },
    { id: "typescript", label: "TypeScript", color: "bg-blue-600" },
    { id: "vue", label: "Vue.js", color: "bg-green-400" },
    { id: "angular", label: "Angular", color: "bg-red-500" },
    { id: "nextjs", label: "Next.js", color: "bg-gray-800" },
  ]

  const experienceLevels = [
    {
      id: "beginner",
      label: "Iniciante",
      description: "Começando agora na programação",
      icon: "🌱",
      color: "from-green-400 to-green-600",
    },
    {
      id: "intermediate",
      label: "Intermediário",
      description: "Já tenho alguma experiência",
      icon: "🚀",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      id: "advanced",
      label: "Avançado",
      description: "Sou experiente em desenvolvimento",
      icon: "⚡",
      color: "from-teal-400 to-teal-600",
    },
  ]

  const benefits = [
    { icon: Trophy, text: "Acesso a 1000+ desafios", highlight: true },
    { icon: Users, text: "Comunidade de 50K+ devs", highlight: false },
    { icon: Star, text: "Certificados reconhecidos", highlight: true },
    { icon: Zap, text: "Mentoria personalizada", highlight: false },
    { icon: Gift, text: "Conteúdo exclusivo", highlight: true },
    { icon: Shield, text: "Suporte 24/7", highlight: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Left Side - Benefits */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex flex-1 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 p-12 flex-col justify-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0l15 15V15l-15 15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h1 className="text-4xl font-bold text-white mb-4">
                Junte-se à maior comunidade de desenvolvedores do Brasil! 🇧🇷
              </h1>
              <p className="text-white/90 text-xl">
                Mais de 50.000 desenvolvedores já transformaram suas carreiras conosco.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 gap-4 mb-12"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                    benefit.highlight
                      ? "bg-white/20 backdrop-blur-sm border border-white/30"
                      : "bg-white/10 backdrop-blur-sm"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      benefit.highlight ? "bg-white/30" : "bg-white/20"
                    }`}
                  >
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{benefit.text}</div>
                    {benefit.highlight && <div className="text-white/70 text-sm">Exclusivo para membros</div>}
                  </div>
                  {benefit.highlight && <Badge className="bg-yellow-400 text-yellow-900 ml-auto">Premium</Badge>}
                </motion.div>
              ))}
            </motion.div>

            {/* Success Stories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Histórias de Sucesso</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Maria Silva</div>
                    <div className="text-white/70 text-sm">Junior → Senior em 8 meses</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">João Santos</div>
                    <div className="text-white/70 text-sm">Primeiro emprego em tech</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center mb-8"
            >
              <Link href="/" className="inline-flex items-center gap-3 group">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center"
                  >
                    <Gift className="w-4 h-4 text-white" />
                  </motion.div>
                </motion.div>
                <div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    DevJourney
                  </span>
                  <div className="text-sm text-gray-500 font-medium">Transforme sua carreira</div>
                </div>
              </Link>
            </motion.div>

            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-2xl shadow-green-500/10">
              <CardHeader className="text-center pb-6">
                {/* Progress Steps */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <motion.div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-green-500 text-white">
                        {step > 1 ? <Check className="w-4 h-4" /> : step}
                      </motion.div>
                      {step < 3 && <div className="w-8 h-1 mx-2 rounded bg-green-500" />}
                    </div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-6 py-3 rounded-full text-sm font-medium mb-6 mx-auto"
                >
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  Informações Básicas
                </motion.div>

                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Crie sua conta
                </CardTitle>

                <p className="text-gray-600 mt-2">Vamos começar com suas informações básicas</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Step 1: Basic Info */}
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                  {/* Social Register */}
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full h-12 bg-gray-900 text-white border-0 hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <Github className="w-5 h-5 mr-3" />
                      Cadastrar com GitHub
                    </Button>

                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        className="h-12 bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                      >
                        <Mail className="w-5 h-5 mr-2 text-red-500" />
                        Google
                      </Button>
                      <Button
                        variant="outline"
                        className="h-12 bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                      >
                        <User className="w-5 h-5 mr-2 text-blue-500" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-4 text-gray-500 font-medium">Ou preencha os dados</span>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-gray-700">Nome Completo</Label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          className="pl-12 h-12 border-2 border-gray-200 focus:border-green-500 rounded-xl transition-all duration-300"
                          placeholder="Seu nome completo"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-gray-700">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="email"
                          className="pl-12 h-12 border-2 border-gray-200 focus:border-green-500 rounded-xl transition-all duration-300"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-gray-700">Senha</Label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="password"
                          className="pl-12 pr-12 h-12 border-2 border-gray-200 focus:border-green-500 rounded-xl transition-all duration-300"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Password Strength */}
                      <div className="space-y-2">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4].map((level) => (
                            <div
                              key={level}
                              className="h-2 flex-1 rounded-full bg-green-500 transition-all duration-300"
                            />
                          ))}
                        </div>
                        <p className="text-xs text-gray-600">
                          Força da senha: <span className="font-medium">Muito Forte</span>
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-gray-700">Confirmar Senha</Label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="password"
                          className="pl-12 pr-12 h-12 border-2 border-gray-200 focus:border-green-500 rounded-xl transition-all duration-300"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Interests Selection */}
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-gray-700 mb-4 block">
                        Quais tecnologias te interessam?
                      </Label>
                      <div className="grid grid-cols-2 gap-3">
                        {interests.map((interest) => (
                          <motion.button
                            key={interest.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`p-4 rounded-xl border-2 transition-all duration-300 ${interest.color} text-white border-transparent shadow-lg`}
                          >
                            <div className="font-medium">{interest.label}</div>
                            <Check className="w-4 h-4 mt-1 mx-auto" />
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Experience Level */}
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-gray-700 mb-4 block">
                        Qual seu nível de experiência?
                      </Label>
                      <div className="space-y-3">
                        {experienceLevels.map((level) => (
                          <motion.button
                            key={level.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left bg-gradient-to-r ${level.color} text-white border-transparent shadow-lg`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{level.icon}</span>
                              <div>
                                <div className="font-semibold">{level.label}</div>
                                <div className="text-sm text-white/80">{level.description}</div>
                              </div>
                              <CheckCircle className="w-5 h-5 ml-auto" />
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="space-y-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500 mt-1"
                        />
                        <span className="text-sm text-gray-600">
                          Eu aceito os{" "}
                          <Link href="/terms" className="text-green-600 hover:text-green-700 font-medium underline">
                            Termos de Uso
                          </Link>{" "}
                          e{" "}
                          <Link href="/privacy" className="text-green-600 hover:text-green-700 font-medium underline">
                            Política de Privacidade
                          </Link>
                        </span>
                      </label>

                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <span className="text-sm text-gray-600">
                          Quero receber novidades, dicas e conteúdo exclusivo por email
                        </span>
                      </label>
                    </div>
                  </div>
                </motion.div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1 h-12 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Criar Conta Gratuita
                    <Sparkles className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-gray-600">
                    Já tem uma conta?{" "}
                    <Link href="/auth/sign-in" className="text-green-600 hover:text-green-700 font-semibold transition-colors">
                      Faça login
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
