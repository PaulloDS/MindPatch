"use client";

import Carousel from "@/components/dashboard/Carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useSidebar } from "@/context/SidebarContext";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
  const { setSidebarOpen } = useSidebar();
  return (
    <main className="lg:pl-80">
      <Button
        variant="ghost"
        size="sm"
        className="lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu className="w-5 h-5" />
      </Button>
      <div className="flex justify-between pb-6">
        <div className="w-[400px] relative md:block">
          <span className="absolute ml-3 top-[10px]">🔍</span>
          <Input
            className="w-full p-5 pl-9 font-medium border-green-700 md:max-w-[300px]"
            placeholder="Buscar por desafios, usuários ..."
            type="text"
          />
        </div>
        <div className="flex items-center space-x-5">
          <Button className="py-5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 hover:bg-emerald-200 hover:scale-110 transition-transform duration-300 hover:cursor-pointer">
            ➕ Novo Desafio
          </Button>

          <Button className="bg-gradient-to-r from-emerald-400 to-emerald-600 py-5 hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-200 hover:cursor-pointer rounded-full">
            {" "}
            ➕ Novo Patch
          </Button>
          <Button className="bg-gray-400 py-5 rounded-full hover:bg-gray-500 hover:cursor-pointer">
            🔔
          </Button>
        </div>
      </div>

      <div className="mb-5 flex justify-between gap-5">
        <Carousel />
        <div className="w-[35%] ">
          <Card className="h-[195px] overflow-hidden bg-gradient-to-br from-yellow-500/50 to-orange-600/50 rounded-3xl shadow-xs p-4 border-none shadow-yellow-400">
            <div className="flex justify-between">
              <p className="text-orange-500 font-bold text-lg">Desafio Ativo</p>
              <Button className="rounded-full hover:cursor-pointer bg-amber-600 shadow-lg hover:bg-amber-700">
                Ir para desafio
              </Button>
            </div>
            <div className="w-full flex gap-3 justify-center">
              <Image
                src="/cadeado.png"
                width={100}
                height={0}
                alt="Ícone do Desafio Ativo"
                className="md:hidden sm:hidden lg:inline lg:ml-[-50px]"
              />
              <div className="flex flex-col gap-3">
                <p className="text-orange-600 font-bold text-lg md:text-base">
                  {" "}
                  Segurança em primeiro lugar
                </p>
                <div className="flex justify-between">
                  <Badge className="bg-red-500">Segurança</Badge>
                  <Badge className="bg-blue-500">Progresso: 60%</Badge>
                </div>
                <Progress value={60} />
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h1 className="text-4xl text-gray-800 font-bold mb-1"> 🏠 Dashboard</h1>
        <p className="text-gray-500">
          Bem-vindo de volta! Veja o que está acontecendo na comunidade e
          divirta-se.
        </p>
      </div>
      {/* Feed Comunidade */}
      <div></div>
    </main>
  );
}
