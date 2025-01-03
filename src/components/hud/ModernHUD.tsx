import { PlayerStats } from './PlayerStats';
import { MoneyDisplay } from './MoneyDisplay';
import { Minimap } from './Minimap';

interface ModernHUDProps {
  playerData: {
    health: number;
    armor: number;
    stamina: number;
    money: number;
    bank: number;
  };
  location: {
    heading: number;
    name: string;
  };
}

export function ModernHUD({ playerData, location }: ModernHUDProps) {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <PlayerStats
        health={playerData.health}
        armor={playerData.armor}
        stamina={playerData.stamina}
      />
      <MoneyDisplay
        cash={playerData.money}
        bank={playerData.bank}
      />
      <Minimap
        heading={location.heading}
        location={location.name}
      />
    </div>
  );
}