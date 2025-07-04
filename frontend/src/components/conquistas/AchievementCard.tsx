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
    <div className="flex justify-between bg-gradient-to-br from-orange-400 to-yellow-200 border-b-2 border-b-orange-500 rounded-3xl p-5">
      <div className="max-w-[60%]">
        <h3 className="text-lg font-bold text-orange-700">{title}</h3>
        <p className="text-xs font-light text-yellow-900">{description}</p>
      </div>
      <span className="w-[80px] h-[80px] rounded-[20px] bg-gradient-to-br from-orange-600 to-yellow-500 flex items-center justify-center inset-shadow-orange-500 shadow-2xl">
        {icon}
      </span>
    </div>
  );
}
