import { User2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayerData } from "@/types";
import { formatMoney } from "@/utils/formatters";

export function PlayerCard({ name, id, job, money, bank }: PlayerData) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Player Info</CardTitle>
        <User2 className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Name:</span>
            <span className="font-medium">{name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">ID:</span>
            <span className="font-medium">#{id}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Job:</span>
            <span className="font-medium">{job}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Cash:</span>
            <span className="font-medium text-green-600">{formatMoney(money)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Bank:</span>
            <span className="font-medium text-blue-600">{formatMoney(bank)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}