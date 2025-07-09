"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, Lock, Search } from "lucide-react";
import { api } from "@/lib/axios";
import { toast } from "sonner";
import CardPatches from "./CardPatches";

interface Patch {
  id: number;
  titulo: string;
  autor: string;
  codigo: string;
  visibilidade: string;
  tags: string;
}

interface FiltroBuscaProps {
  onSearch: (resultados: Patch[] | null) => void;
}

const visibilidadeOptions = ["Público", "Privado"];
const camposBusca = ["titulo", "autor", "tags"];

export default function FiltroBusca({ onSearch }: FiltroBuscaProps) {
  const [campoSelecionado, setCampoSelecionado] = useState<string>("titulo");
  const [valorBusca, setValorBusca] = useState("");
  const [visibilidade, setVisibilidade] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchPatches = async () => {
    if (!valorBusca && !visibilidade) {
      toast.warning("Digite um termo ou selecione uma visibilidade.");
      return;
    }

    setLoading(true);
    try {
      const params: any = {};
      if (valorBusca) {
        params[campoSelecionado] = valorBusca;
      }
      if (visibilidade) {
        params.visibilidade = visibilidade;
      }

      const res = await api.get("/patches/search", { params });
      onSearch(res.data);
    } catch (error) {
      toast.error("Erro ao buscar patches.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl p-4 shadow-lg space-y-4">
        {/* Campo de busca */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Campo de busca
          </label>
          <div className="flex gap-2">
            <select
              value={campoSelecionado}
              onChange={(e) => setCampoSelecionado(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white text-sm"
            >
              {camposBusca.map((campo) => (
                <option key={campo} value={campo}>
                  {campo.charAt(0).toUpperCase() + campo.slice(1)}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder={`Buscar por ${campoSelecionado}`}
              value={valorBusca}
              onChange={(e) => setValorBusca(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Visibilidade */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Visibilidade
          </label>
          <div className="flex gap-2">
            {visibilidadeOptions.map((option) => (
              <Button
                key={option}
                size="sm"
                variant={visibilidade === option ? "default" : "outline"}
                onClick={() =>
                  setVisibilidade(visibilidade === option ? null : option)
                }
              >
                {option}
              </Button>
            ))}
          </div>
        </div>

        {/* Botão Buscar */}
        <div>
          <Button onClick={fetchPatches} className="w-full" disabled={loading}>
            {loading ? "Buscando..." : "Buscar Patches"}
          </Button>
        </div>
      </div>
    </div>
  );
}
