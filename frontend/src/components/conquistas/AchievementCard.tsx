export interface AchievementCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function AchievementCard({
  title,
  description,
  icon,
  className = "",
}: AchievementCardProps) {
  return (
    <div
      className={`flex justify-between rounded-3xl p-5 border-b-2 ${className}`}
    >
      <div className="max-w-[60%]">
        <h3 className="text-lg font-bold ">{title}</h3>
        <p className="text-xs font-light text-yellow-900">{description}</p>
      </div>
      <span className="w-[80px] h-[80px] rounded-[20px] bg-gradient-to-br from-orange-600 to-yellow-500 flex items-center justify-center inset-shadow-orange-500 shadow-2xl">
        {icon}
      </span>
    </div>
  );
}
