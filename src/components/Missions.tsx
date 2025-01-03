import { Shield } from "lucide-react";
import { MissionsData } from "../types";
import { cn } from "@/lib/utils";

export function Missions({ missions }: MissionsData) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "text-green-400 bg-green-500/20";
      case "medium": return "text-yellow-400 bg-yellow-500/20";
      case "hard": return "text-red-400 bg-red-500/20";
      default: return "text-gray-400 bg-gray-500/20";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available": return "text-blue-400 bg-blue-500/20";
      case "active": return "text-purple-400 bg-purple-500/20";
      case "completed": return "text-green-400 bg-green-500/20";
      default: return "text-gray-400 bg-gray-500/20";
    }
  };

  return (
    <div className="game-card rounded-xl p-6 transform transition-all hover:scale-[1.02] duration-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">Missions</h2>
        <Shield className="h-8 w-8 text-white/70" />
      </div>
      
      <div className="space-y-4">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className="group p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {mission.title}
                </h3>
                <p className="text-white/60 mt-1">{mission.description}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className={cn("px-3 py-1 rounded-full text-sm font-medium", 
                  getDifficultyColor(mission.difficulty))}>
                  {mission.difficulty}
                </span>
                <span className={cn("px-3 py-1 rounded-full text-sm font-medium",
                  getStatusColor(mission.status))}>
                  {mission.status}
                </span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-4 text-sm">
              <div className="flex items-center gap-4">
                <span className="text-white/60">📍 {mission.location}</span>
                {mission.timeLimit && (
                  <span className="text-white/60">⏱️ {mission.timeLimit}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/60">Reward:</span>
                <span className="text-green-400 font-semibold">
                  ${mission.reward.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}