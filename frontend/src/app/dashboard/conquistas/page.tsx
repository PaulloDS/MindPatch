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
}

export default function ConquistasPage() {
  const [badges, setBadges] = useState<Badge[]>([]);
  const [userBadges, setUserBadges] = useState<Badge[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"todas" | "conquistadas">("todas");

  const userId =
    typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;

  const fetchBadges = async () => {
    if (!userId) return;

    try {
      const [allBadgesRes, userBadgesRes] = await Promise.all([
        api.get("/badges", { withCredentials: true }),
        api.get(`/auth/users/${userId}/conquistas`, { withCredentials: true }),
      ]);
      setBadges(allBadgesRes.data);
      setUserBadges(userBadgesRes.data);
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

  const userBadgeIds = new Set(userBadges.map((b) => b.id));

  const filteredBadges =
    filter === "todas"
      ? badges
      : badges.filter((badge) => userBadgeIds.has(badge.id));

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
        {filteredBadges.map((badge) => {
          const conquistada = userBadgeIds.has(badge.id);
          const isCinza = filter === "todas" && !conquistada;

          return (
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
              className={
                isCinza
                  ? "bg-gray-200 opacity-80 border-b-white text-gray-600"
                  : "bg-gradient-to-br from-orange-400 to-yellow-200 border-b-orange-500 text-orange-700"
              }
            />
          );
        })}
      </div>
    </div>
  );
}
