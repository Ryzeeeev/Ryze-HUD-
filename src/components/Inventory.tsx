import { Package } from "lucide-react";
import { InventoryData } from "../types";

export function Inventory({ items, maxWeight, currentWeight }: InventoryData) {
  return (
    <div className="game-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">Inventory</h2>
        <Package className="h-8 w-8 text-white/70" />
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/60 text-lg">Weight</span>
          <span className="text-white font-medium text-lg">
            {currentWeight}/{maxWeight}kg
          </span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-3">
          <div
            className="bg-blue-500 rounded-full h-3 transition-all"
            style={{ width: `${(currentWeight / maxWeight) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <span className="text-white text-lg">{item.name}</span>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white">
                {item.weight}kg
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
                x{item.quantity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}