import { User2 } from "lucide-react";
import { PlayerData } from "../types";

export function PlayerCard({ name, id, job, money, bank }: PlayerData) {
  return (
    <div className="game-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">Player Info</h2>
        <User2 className="h-8 w-8 text-white/70" />
      </div>
      <div className="grid grid-cols-2 gap-6 text-lg">
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="text-white/60">Name</span>
            <span className="text-white font-semibold">{name}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white/60">ID</span>
            <span className="text-white font-semibold">#{id}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white/60">Job</span>
            <span className="text-white font-semibold">{job}</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="text-white/60">Cash</span>
            <span className="text-green-400 font-semibold">${money.toLocaleString()}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white/60">Bank</span>
            <span className="text-blue-400 font-semibold">${bank.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}