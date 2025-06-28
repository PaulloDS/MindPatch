"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, SlidersHorizontal, Search } from "lucide-react";

const difficulties = ["Fácil", "Médio", "Difícil"];
const languages = ["JavaScript", "Python", "Java", "C++", "TypeScript"];

export default function ChallengeFilters() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl p-4 shadow-lg space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Buscar desafio..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Difficulty */}
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-gray-100 text-gray-700">
          <Filter className="w-3 h-3 mr-1" /> Dificuldade
        </Badge>
        {difficulties.map((dif) => (
          <Button
            key={dif}
            size="sm"
            variant={selectedDifficulty === dif ? "default" : "outline"}
            onClick={() =>
              setSelectedDifficulty(dif === selectedDifficulty ? null : dif)
            }
          >
            {dif}
          </Button>
        ))}
      </div>

      {/* Languages */}
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-gray-100 text-gray-700">
          <SlidersHorizontal className="w-3 h-3 mr-1" /> Linguagem
        </Badge>
        {languages.map((lang) => (
          <Button
            key={lang}
            size="sm"
            variant={selectedLanguage === lang ? "default" : "outline"}
            onClick={() =>
              setSelectedLanguage(lang === selectedLanguage ? null : lang)
            }
          >
            {lang}
          </Button>
        ))}
      </div>
    </div>
  );
}
