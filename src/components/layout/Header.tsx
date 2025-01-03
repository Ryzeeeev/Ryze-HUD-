import { Theme } from '@/types';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface HeaderProps {
  theme: Theme;
  onThemeToggle: () => void;
}

export function Header({ theme, onThemeToggle }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-4xl font-bold">Los Santos RP</h1>
      <ThemeToggle theme={theme} onToggle={onThemeToggle} />
    </div>
  );
}