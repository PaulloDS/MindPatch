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
    <div>
      {/* Renderize os dados */}
      <h3>
        {icon} {title}
      </h3>
      <p>{description}</p>
    </div>
  );
}
