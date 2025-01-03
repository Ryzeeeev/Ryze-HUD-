import { Bell } from "lucide-react";
import { NotificationsData } from "../types";

export function Notifications({ notifications }: NotificationsData) {
  return (
    <div className="game-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">Notifications</h2>
        <Bell className="h-8 w-8 text-white/70" />
      </div>
      
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg ${
              notification.type === "info"
                ? "bg-blue-500/20 text-blue-400"
                : notification.type === "warning"
                ? "bg-yellow-500/20 text-yellow-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            <div className="flex justify-between items-start">
              <p className="text-lg font-medium">{notification.message}</p>
              <span className="text-sm opacity-70">{notification.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}