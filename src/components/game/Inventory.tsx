import { Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InventoryData } from "@/types";
import { InventoryItem } from "./InventoryItem";
import { formatWeight } from "@/utils/formatters";

export function Inventory({ items, maxWeight, currentWeight }: InventoryData) {
  const weightPercentage = (currentWeight / maxWeight) * 100;

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Inventory</CardTitle>
        <Package className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Weight</span>
            <span className="text-sm font-medium">
              {formatWeight(currentWeight)}/{formatWeight(maxWeight)}
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-primary rounded-full h-2 transition-all"
              style={{ width: `${weightPercentage}%` }}
            />
          </div>
        </div>
        <div className="space-y-2">
          {items.map((item) => (
            <InventoryItem key={item.id} item={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}