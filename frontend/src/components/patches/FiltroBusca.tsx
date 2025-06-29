"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, SlidersHorizontal, Search, Lock } from "lucide-react";

const visibilidade = ["Público", "Privado"];
const tags = ["JavaScript", "Python", "Java", "C++", "TypeScript"];

export default function FiltroBusca() {
  const [selectVisibilidades, setSelectVisibilidades] = useState<string | null>(
    null
  );
  const [selectTags, setSelectTags] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl p-4 shadow-lg space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Buscar patche..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Difficulty */}
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-gray-100 text-gray-700">
          <Filter className="w-3 h-3 mr-1" /> Tag
        </Badge>
        {tags.map((dif) => (
          <Button
            key={dif}
            size="sm"
            variant={selectTags === dif ? "default" : "outline"}
            onClick={() => setSelectTags(dif === selectTags ? null : dif)}
          >
            {dif}
          </Button>
        ))}
      </div>

      {/* Languages */}
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-gray-100 text-gray-700">
          <Lock className="w-3 h-3 mr-1" /> Visibilidade
        </Badge>
        {visibilidade.map((lang) => (
          <Button
            key={lang}
            size="sm"
            variant={selectVisibilidades === lang ? "default" : "outline"}
            onClick={() =>
              setSelectVisibilidades(lang === selectVisibilidades ? null : lang)
            }
          >
            {lang}
          </Button>
        ))}
      </div>
    </div>
  );
}
