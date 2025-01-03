import { Badge } from "@/components/ui/badge";
import { InventoryItem as IInventoryItem } from "@/types";
import { formatWeight } from "@/utils/formatters";

interface InventoryItemProps {
  item: IInventoryItem;
}

export function InventoryItem({ item }: InventoryItemProps) {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
      <span className="font-medium">{item.name}</span>
      <div className="flex items-center gap-2">
        <Badge variant="secondary">{formatWeight(item.weight)}</Badge>
        <Badge>x{item.quantity}</Badge>
      </div>
    </div>
  );
}