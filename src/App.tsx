import { ThemeProvider } from 'next-themes';
import { ModernHUD } from './components/hud/ModernHUD';
import { useTheme } from './hooks/useTheme';
import { useGameState } from './hooks/useGameState';
import { useKeyPress } from './hooks/useKeyPress';
import { mockData } from './data/mockData';
import { KEYBINDS } from './lib/constants';

export default function App() {
  const { theme } = useTheme('dark');
  const { playerData, location } = useGameState(mockData);

  // Register keybind for toggling UI
  useKeyPress(KEYBINDS.TOGGLE_UI);

  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme={theme} 
      enableSystem={true}
      enableColorScheme={false}
    >
      {/* Appliquer un background transparent et forcer min-height */}
      <div className="min-h-screen bg-transparent">
        <ModernHUD 
          playerData={playerData}
          location={location}
        />
      </div>
    </ThemeProvider>
  );
}
