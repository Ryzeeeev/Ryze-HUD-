import { PlayerData, InventoryData, NotificationsData } from '@/types';
import { PlayerCard } from './PlayerCard';
import { Inventory } from './Inventory';
import { Notifications } from './Notifications';

interface GameInterfaceProps {
  playerData: PlayerData;
  inventoryData: InventoryData;
  notificationsData: NotificationsData;
}

export function GameInterface({ 
  playerData, 
  inventoryData, 
  notificationsData 
}: GameInterfaceProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PlayerCard {...playerData} />
      <Inventory {...inventoryData} />
      <Notifications {...notificationsData} />
    </div>
  );
}