import { cn } from "@/lib/utils";

interface GameCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GameCard({ children, className }: GameCardProps) {
  return (
    <div className={cn(
      "game-card rounded-xl p-6 transform transition-all hover:scale-[1.02] duration-300",
      className
    )}>
      {children}
    </div>
  );
}