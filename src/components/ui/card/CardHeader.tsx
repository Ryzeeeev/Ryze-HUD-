interface CardHeaderProps {
  title: string;
  icon: React.ReactNode;
}

export function CardHeader({ title, icon }: CardHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="h-8 w-8 text-white/70">
        {icon}
      </div>
    </div>
  );
}