"use client";

import CardFeed from "@/components/dashboard/CardFeed";
import Carousel from "@/components/dashboard/Carousel";
import DesafiosEmAlta from "@/components/dashboard/DesafiosEmAlta";
import FeedComunidade from "@/components/dashboard/FeedComunidade";
import RankingAtual from "@/components/dashboard/RankingAtual";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useSidebar } from "@/context/SidebarContext";
import { Clock, ExternalLink, Menu } from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <main className="lg:pl-80">
      <div className="mb-5 flex justify-between gap-5">
        <Carousel />
        <div className="w-[35%] ">
          <Card className="h-[200px] overflow-hidden bg-gradient-to-br from-yellow-500/50 to-orange-600/50 rounded-3xl border-b-4 border-orange-600 px-4 relative">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <div className="text-3xl w-[40px] h-[40px] rounded-lg bg-white/40">
                  🏆
                </div>
                <div className="space-y-[-3px]">
                  <p className="text-lg font-bold text-orange-700">
                    Desafio Ativo
                  </p>
                  <small className="flex items-center gap-1 text-orange-600">
                    {" "}
                    <Clock size={12} /> Ativo há 2 dias
                  </small>
                </div>
              </div>
              <Button className="rounded-full hover:cursor-pointer bg-amber-600 shadow-lg hover:bg-amber-700">
                Ir para desafio <ExternalLink />
              </Button>
            </div>
            <div className="w-full flex gap-3 px-5">
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
            <Image
              src="/curvas.png"
              width={200}
              height={100}
              alt="Curvas"
              className="absolute bottom-0  right-0"
            />
          </Card>
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-4xl text-gray-800 font-bold mb-1"> 🏠 Dashboard</h1>
        <p className="text-gray-500">
          Bem-vindo de volta! Veja o que está acontecendo na comunidade e
          divirta-se.
        </p>
      </div>
      <div className="flex gap-5">
        {/* Feed Comunidade */}
        <div className="w-[75%]">
          <FeedComunidade />
        </div>
        <div className="w-[25%] space-y-3">
          <RankingAtual />
          <DesafiosEmAlta />
        </div>
      </div>
    </main>
  );
}
