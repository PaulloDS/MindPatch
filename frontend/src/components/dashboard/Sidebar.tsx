"use client";

import {
  Award,
  Book,
  BookOpen,
  CodeIcon,
  GitPullRequest,
  Hammer,
  HelpCircle,
  LayoutDashboard,
  Lightbulb,
  LogOut,
  Settings,
  Trophy,
  User,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { useSidebar } from "@/context/SidebarContext";
import { useUser } from "@/hooks/useUser";

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  const [openSections, setOpenSections] = useState({
    principal: true,
    aprendizado: false,
    ferramentas: false,
    comunidade: false,
  });
  const { user, loading } = useUser();

  if (loading) return <p>Carregando...</p>;

  if (!user) return <p>Erro ao carregar usuário</p>;

  type SectionKey = "principal" | "aprendizado" | "ferramentas" | "comunidade";

  const toggleSection = (section: SectionKey) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section],
    });
  };

  const navigation = {
    principal: [
      {
        name: "Dashboard",
        href: "/dashboard",
        current: true,
      },
      {
        name: "Patches",
        href: "/dashboard/patches",
        current: false,
      },
      {
        name: "Desafios",
        href: "/dashboard/desafios",
        current: false,
      },
      {
        name: "Conquistas",
        href: "/dashboard/conquistas",
        current: false,
      },
    ],
    aprendizado: [
      { name: "Aprender", href: "/aprender", icon: Book, current: false },
    ],
    comunidade: [
      {
        name: "Comunidade",
        href: "/dashboard/community",
        current: false,
      },
      {
        name: "Conquistas",
        href: "/dashboard/achievements",
        current: false,
      },
    ],
  };

  return (
    <div>
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-white/90 backdrop-blur-xl border-r border-white/30 shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 p-6 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/logo-2.png"
                  width={40}
                  height={40}
                  alt="Logo"
                  className="hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                DevJourney
              </span>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden ml-auto"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* User Profile */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="w-12 h-12 border-2 border-blue-200 rounded-full overflow-hidden">
                <AvatarImage src={"/placeholder.svg"} />
                <AvatarFallback>{user.nome[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{user.nome}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>

            {/* Level Progress */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full">
                  Nível 99
                </Badge>
                <span className="text-sm text-gray-600">
                  98200/100000 XP
                </span>
              </div>
              <Progress
                value={(98200/100000) * 100}
                className="h-2"
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-gradient-to-r from-orange-200 to-red-100 rounded-lg p-3 text-center inset-shadow-sm inset-shadow-red-300">
                <div className="text-lg font-bold text-orange-600">
                  🔥 213
                </div>
                <div className="text-xs text-gray-600">Dias seguidos</div>
              </div>
              <div className="bg-gradient-to-r from-yellow-200 to-orange-100 rounded-lg p-3 text-center inset-shadow-sm inset-shadow-orange-300">
                <div className="text-lg font-bold text-yellow-600">
                  🏆 #1
                </div>
                <div className="text-xs text-gray-600">Ranking</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto h-full">
            {/* Principal */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-800"
                onClick={() => toggleSection("principal")}
              >
                <div className="flex items-center gap-3">
                  🏠
                  <span className="font-medium">Principal</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform transform ${
                    openSections.principal ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
              {openSections.principal && (
                <div className="pl-6 space-y-1">
                  {navigation.principal.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-1 rounded-xl transition-all duration-300 ${
                        item.current
                          ? "bg-gradient-to-r from-green-500 to-cyan-600 text-white shadow-lg"
                          : "text-gray-600 hover:bg-gray-200 hover:text-gray-800"
                      }`}
                    >
                      ▪️
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Aprendizado */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-800"
                onClick={() => toggleSection("aprendizado")}
              >
                <div className="flex items-center gap-3">
                  📝
                  <span className="font-medium">Aprendizado</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform transform ${
                    openSections.aprendizado ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
              {openSections.aprendizado && (
                <div className="pl-6 space-y-1">
                  {navigation.aprendizado.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative flex items-center gap-3 px-4 py-1 rounded-xl transition-all duration-300 ${
                        item.current
                          ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
                          : "text-gray-600 hover:bg-gray-200 hover:text-gray-800"
                      }`}
                    >
                      ▪️
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Comunidade */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-800"
                onClick={() => toggleSection("comunidade")}
              >
                <div className="flex items-center gap-3">
                  👥
                  <span className="font-medium">Comunidade</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform transform ${
                    openSections.comunidade ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
              {openSections.comunidade && (
                <div className="pl-6 space-y-1">
                  {navigation.comunidade.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-1 rounded-xl transition-all duration-300 ${
                        item.current
                          ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
                          : "text-gray-600 hover:bg-gray-200 hover:text-gray-800"
                      }`}
                    >
                      ▪️
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Bottom Actions */}
          <div className="p-1 border-t border-gray-100 space-y-1">
            <div className="flex justify-between">
              <Link
                href="/help"
                className="w-[50%] flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-all duration-300"
              >
                <HelpCircle className="w-5 h-5" />
                <span className="font-medium">Ajuda</span>
              </Link>
              <button className="w-[50%] flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-200 transition-all duration-300">
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Sair</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
