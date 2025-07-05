"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { api } from "@/lib/axios";
import { AchievementCard } from "@/components/conquistas/AchievementCard";
import {
  MenubarShortcut,
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
} from "@/components/ui/menubar";

interface Badge {
  id: number;
  nome: string;
  descricao: string;
  iconeURL: string;
  conquistada: boolean;
}

export default function ConquistasPage() {
  const [badges, setBadges] = useState<Badge[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<
    "todas" | "conquistadas"
  >("todas");

  const filteredBadges = badges.filter((badge) => {
    if (filter === "conquistadas") return badge.conquistada;
    return true;
  });

  const userId =
    typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;

  const fetchBadges = async () => {
    if (!userId) return;

    try {
      const res = await api.get(`/badges`, {
        withCredentials: true,
      });
      setBadges(res.data);
    } catch (error) {
      console.error("Erro ao buscar conquistas: ", error);
      toast.error("Erro ao buscar conquistas.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBadges();
  }, [userId]);

  if (loading) return <p>Carregando conquistas...</p>;

  return (
    <div className="lg:pl-80">
      <div className="mb-5">
        <Menubar className="w-fit">
          <MenubarMenu>
            <MenubarTrigger className="bg-emerald-500 text-white">
              Filtrar
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={() => setFilter("todas")}>
                Todas
              </MenubarItem>
              <MenubarItem onClick={() => setFilter("conquistadas")}>
                Conquistadas
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBadges.map((badge) => (
          <AchievementCard
            key={badge.id}
            title={badge.nome}
            description={badge.descricao}
            icon={
              <img
                src={badge.iconeURL}
                alt={badge.nome}
                className="w-10 h-10"
              />
            }
          />
        ))}
      </div>
    </div>
  );
}
