"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, Lock, Search } from "lucide-react";
import { api } from "@/lib/axios";
import { toast } from "sonner";
import CardPatches from "./CardPatches";

type Patch = {
  id: number;
  titulo: string;
  descricao: string;
  autor: { nome: string };
  tags: { nome: string }[];
  visibilidade: string;
  criadoEm: string;
  atualizadoEm: string;
  aprendizado: string;
  codigo: string;
  comentarios?: {
    id: number;
    texto: string;
    autorNome: string;
    criadoEm: string;
  }[];
};

export default function FiltroBusca() {
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");
  const [visibilidade, setVisibilidade] = useState<string | null>(null);
  const [resultados, setResultados] = useState<Patch[] | null>(null);
  const [loading, setLoading] = useState(false);

  const buscar = async () => {
    try {
      setLoading(true);
      const params: any = {};
      if (search) params.titulo = search;
      if (tag) params.tag = tag;
      if (visibilidade) params.visibilidade = visibilidade;

      const res = await api.get("/patches/meus", { params });
      setResultados(res.data);
    } catch (err) {
      toast.error("Erro ao buscar patches");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 BUSCA INICIAL AUTOMÁTICA
  useEffect(() => {
    buscar();
  }, []);

  return (
    <div className="space-y-6 my-6">
      <div className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl p-4 shadow-lg space-y-4">
        {/* Campo de busca */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar por título..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200"
          />
        </div>

        {/* Campo de Tag manual */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Tag (ex: JavaScript)"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200"
          />
        </div>

        {/* Visibilidade */}
        <div className="flex gap-2 flex-wrap">
          <Badge className="bg-gray-100 text-gray-700">
            <Lock className="w-3 h-3 mr-1" /> Visibilidade
          </Badge>
          {["Publico", "Privado"].map((v) => (
            <Button
              key={v}
              variant={visibilidade === v ? "default" : "outline"}
              size="sm"
              onClick={() => setVisibilidade(v === visibilidade ? null : v)}
            >
              {v}
            </Button>
          ))}
        </div>

        {/* Botão de buscar */}
        <Button className="w-full" onClick={buscar}>
          Buscar Patches
        </Button>
      </div>

      {/* Resultado da busca */}
      {loading ? (
        <p className="text-sm text-gray-500">Carregando...</p>
      ) : resultados && resultados.length === 0 ? (
        <p className="text-sm text-gray-500">Nenhum patch encontrado.</p>
      ) : (
        resultados?.map((p) => <CardPatches key={p.id} patch={p} />)
      )}
    </div>
  );
}
