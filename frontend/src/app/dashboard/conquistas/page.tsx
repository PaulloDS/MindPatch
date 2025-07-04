"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { api } from "@/lib/axios";
import { AchievementCard } from "@/components/conquistas/AchievementCard";

interface Badge {
  id: number;
  nome: string;
  descricao: string;
  iconeURL: string;
  conquistado: boolean;
  conquistadoEm: string | null;
}

export default function ConquistasPage() {
  const [badges, setBadges] = useState<Badge[]>([]);
  const [loading, setLoading] = useState(true);

  const userId =
    typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;

  const fetchBadges = async () => {
    if (!userId) return;

    try {
      const res = await api.get(`/auth/users/${userId}/conquistas`, {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:pl-80">
      {badges.map((badge) => (
        <AchievementCard
          key={badge.id}
          title={badge.nome}
          description={badge.descricao}
          icon={
            <img src={badge.iconeURL} alt={badge.nome} className="w-6 h-6" />
          }
        />
      ))}
    </div>
  );
}
