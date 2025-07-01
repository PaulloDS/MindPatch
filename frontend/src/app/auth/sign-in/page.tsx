"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Eye,
  Github,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  DiscIcon as Discord,
  Star,
  Zap,
  Trophy,
  Users,
  CheckCircle,
  User,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { api } from "@/lib/axios";
import { toast } from "sonner";

export default function LoginPage() {
  const testimonials = [
    {
      text: "DevJourney transformou minha carreira! Consegui meu primeiro emprego como dev.",
      author: "Maria Silva",
      role: "Frontend Developer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      text: "A comunidade é incrível! Sempre tem alguém disposto a ajudar.",
      author: "João Santos",
      role: "Full Stack Developer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      text: "Os desafios são viciantes! Já resolvi mais de 200 problemas.",
      author: "Ana Costa",
      role: "Backend Developer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Desenvolvedores" },
    { icon: Trophy, value: "1M+", label: "Desafios Resolvidos" },
    { icon: Star, value: "4.9", label: "Avaliação" },
    { icon: Zap, value: "24/7", label: "Suporte" },
  ];

  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);

      await api.post("/auth/login", {
        email: data.email,
        password: data.password,
      });

      const userResponse = await api.get("/auth/users/me");
      const { id, nome, email } = userResponse.data;

      sessionStorage.setItem("userId", id);
      sessionStorage.setItem("userName", nome);
      sessionStorage.setItem("userEmail", email);

      toast.success("Login realizado com sucesso!");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Credenciais inválidas!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Left Side - Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <Link href="/" className="inline-flex items-center gap-3 group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center"
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                  </motion.div>
                </motion.div>
                <div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    DevJourney
                  </span>
                  <div className="text-sm text-gray-500 font-medium">
                    Sua jornada dev começa aqui
                  </div>
                </div>
              </Link>
            </motion.div>

            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-2xl shadow-green-500/10">
              <CardHeader className="text-center pb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-6 py-3 rounded-full text-sm font-medium mb-6 mx-auto"
                >
                  <Sparkles className="w-4 h-4 animate-spin" />
                  Bem-vindo de volta! 🚀
                </motion.div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Entre na sua conta
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  Continue sua jornada de aprendizado e conquiste novos desafios
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Social Login */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-3"
                >
                  <Button
                    variant="outline"
                    className="w-full h-12 bg-gray-900 text-white border-0 hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Github className="w-5 h-5 mr-3" />
                    Continuar com GitHub
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="h-12 bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <Mail className="w-5 h-5 mr-2 text-red-500" />
                      Google
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <Discord className="w-5 h-5 mr-2 text-green-500" />
                      Discord
                    </Button>
                  </div>
                </motion.div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-4 text-gray-500 font-medium">
                      Ou continue com email
                    </span>
                  </div>
                </div>

                {/* Login Form */}
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-5"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="email"
                        className="w-full pl-12 pr-4 py-3 h-12 border-2 border-gray-200 focus:border-green-500 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="seu@email.com"
                        required
                        {...register("email")}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="password"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Senha
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="password"
                        {...register("password")}
                        className="w-full pl-12 pr-12 py-3 h-12 border-2 border-gray-200 focus:border-green-500 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500 mr-3"
                      />
                      <span className="text-sm text-gray-600 font-medium">
                        Lembrar de mim
                      </span>
                    </label>
                    <button
                      type="button"
                      className="text-sm text-green-600 hover:text-green-700 font-semibold transition-colors"
                    >
                      Esqueceu a senha?
                    </button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Entrar na Conta
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.form>

                <div className="text-center">
                  <p className="text-gray-600">
                    Não tem uma conta?{" "}
                    <Link
                      href="/auth/sign-up"
                      className="text-green-600 hover:text-green-700 font-semibold transition-colors"
                    >
                      Cadastre-se gratuitamente
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Right Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex flex-1 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 p-12 flex-col justify-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-6 mb-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                O que nossos devs dizem
              </h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-white/90 text-lg mb-6 italic">
                  "{testimonials[0].text}"
                </blockquote>

                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">
                      {testimonials[0].author}
                    </div>
                    <div className="text-white/70 text-sm">
                      {testimonials[0].role}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === 0 ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-8 space-y-4"
            >
              {[
                { icon: Trophy, text: "Mais de 1000 desafios de programação" },
                {
                  icon: Users,
                  text: "Comunidade ativa de 50K+ desenvolvedores",
                },
                { icon: Zap, text: "Aprenda no seu ritmo com mentoria" },
                { icon: Star, text: "Certificados reconhecidos pelo mercado" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-white/90"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
