"use client";

import ChallengeFilters from "@/components/desafios/ChallengeFilters";
import ChallengeGrid from "@/components/desafios/ChallengeGrid";
import ChallengeStats from "@/components/desafios/ChallengeStats";

export default function ChallengesPage() {
  return (
    <div className="space-y-6 lg:pl-80">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">🧮 Desafios</h1>
          <p className="text-gray-600">
            Resolva desafios e aprimore suas habilidades de programação.
          </p>
        </div> 
      </div>

      {/* Challenge Stats */}
      <ChallengeStats />

      {/* Filters */}
      <ChallengeFilters />

      {/* Challenge Grid */}
      <ChallengeGrid />
    </div>
  );
}
