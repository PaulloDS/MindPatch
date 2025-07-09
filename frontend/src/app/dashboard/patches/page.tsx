"use client";

import CardPatches from "@/components/patches/CardPatches";
import Estatisticas from "@/components/patches/Estatisticas";
import FiltroBusca from "@/components/patches/FiltroBusca";
import { useState } from "react";

interface Patch {
  id: number;
  titulo: string;
  autor: string;
  codigo: string;
  visibilidade: string;
  tags: string;
}

export default function PatchesPage() {
  const [patchesFiltrados, setPatchesFiltrados] = useState<Patch[] | null>(
    null
  );
  return (
    <div className="lg:pl-80">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">📑 Patches</h1>
          <p className="text-gray-600">
            Grave seu aprendizado para relembrar futuramente.
          </p>
        </div>
      </div>
      <Estatisticas />

      <FiltroBusca onSearch={(resultados) => setPatchesFiltrados(resultados)} />

      {patchesFiltrados !== null ? (
        patchesFiltrados.length === 0 ? (
          <p className="text-sm text-gray-500 px-4">Nenhum patch encontrado.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            {patchesFiltrados.map((patch) => (
              <CardPatches key={patch.id} patch={patch} />
            ))}
          </div>
        )
      ) : (
        <CardPatches />
      )}
    </div>
  );
}
