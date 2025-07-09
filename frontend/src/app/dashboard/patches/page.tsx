"use client";

import CardPatches from "@/components/patches/CardPatches";
import Estatisticas from "@/components/patches/Estatisticas";
import FiltroBusca from "@/components/patches/FiltroBusca";

export default function PatchesPage() {
  return (
    <div className="lg:pl-80 px-4">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">📑 Patches</h1>
          <p className="text-gray-600">
            Grave seu aprendizado para relembrar futuramente.
          </p>
        </div>
      </div>

      <Estatisticas />
      <FiltroBusca />
    </div>
  );
}
