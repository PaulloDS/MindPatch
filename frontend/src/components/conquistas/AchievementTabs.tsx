import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckCircle, Clock, Lock } from "lucide-react";

export function AchievementTabs({
  unlocked,
  inProgress,
  locked,
  getRarityGradient,
}: {
  unlocked: any[];
  inProgress: any[];
  locked: any[];
  getRarityGradient: (rarity: string) => string;
}) {
  return (
    <Tabs defaultValue="unlocked">
      <TabsList className="grid grid-cols-3">
        <TabsTrigger value="unlocked">
          <CheckCircle className="w-4 h-4 mr-2" /> Desbloqueadas (
          {unlocked.length})
        </TabsTrigger>
        <TabsTrigger value="progress">
          <Clock className="w-4 h-4 mr-2" /> Em Progresso ({inProgress.length})
        </TabsTrigger>
        <TabsTrigger value="locked">
          <Lock className="w-4 h-4 mr-2" /> Bloqueadas ({locked.length})
        </TabsTrigger>
      </TabsList>

      <TabsContent value="unlocked">{/* Render unlocked cards */}</TabsContent>
      <TabsContent value="progress">
        {/* Render in-progress cards */}
      </TabsContent>
      <TabsContent value="locked">{/* Render locked cards */}</TabsContent>
    </Tabs>
  );
}
