export interface AchievementCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function AchievementCard({
  title,
  description,
  icon,
}: AchievementCardProps) {
  return (
    <div className="bg-gradient-to-br from-orange-400 to-yellow-200 border-b-2 border-b-orange-500 rounded-3xl p-5 relative">
      {/* Renderize os dados */}
      <span className="absolute right-3 top-[-10px] p-2 w-[80px] h-[80px] rounded-[20px] bg-gradient-to-br from-orange-600 to-yellow-500 flex items-center justify-center inset-shadow-orange-500 shadow-2xl">{icon}</span>
      <h3 className="text-lg font-bold text-orange-700">{title}</h3>
      <p className="text-sm font-light text-yellow-900">{description}</p>
    </div>
  );
}
