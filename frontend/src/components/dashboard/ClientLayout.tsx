"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import { useSidebar } from "@/context/SidebarContext";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CreatePatche } from "../patches/CreatePatche";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type Patch = {
  id: number;
  titulo: string;
  descricao: string;
  codigo: string;
  aprendizado: string;
  autor: {
    id: number;
    nome: string;
  };
  tags: { id: number; nome: string }[];
  comentarios: {
    id: number;
    texto: string;
    autor: { id: number; nome: string };
    criadoEm: string;
  }[];
  criadoEm: string;
  atualizadoEm: string;
  visibilidade: string;
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setSidebarOpen } = useSidebar();
  const [patches, setPatches] = useState<Patch[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPatches = async () => {
    try {
      const res = await api.get("/patches/meus", { withCredentials: true });
      setPatches(res.data);
    } catch (error) {
      console.error("Erro ao buscar patches: ", error);
      toast.error("Erro ao buscar patches.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatches();
  }, []);

  return (
    <>
      <Sidebar />
      <main className="p-6 ">
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </Button>
        <div className="flex justify-between pb-6 lg:pl-80">
          <div className="w-[400px] relative md:block">
            <span className="absolute ml-3 top-[10px]">🔍</span>
            <Input
              className="w-full p-5 pl-9 font-medium border-green-700 md:w-[300px] lg:w-[600px]"
              placeholder="Buscar por desafios, usuários ..."
              type="text"
            />
          </div>
          <div className="flex items-center space-x-5">
            <Button className="py-5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 hover:bg-emerald-200 hover:scale-110 transition-transform duration-300 hover:cursor-pointer">
              ➕ Novo Desafio
            </Button>
            <CreatePatche onCreated={fetchPatches} />
            <Button className="bg-blue-400 w-[40px] rounded-full hover:bg-gray-500 hover:cursor-pointer">
              🔔
            </Button>
          </div>
        </div>
        {children}
      </main>
    </>
  );
}
