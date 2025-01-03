import { Notification } from "@/types";

interface NotificationItemProps {
  notification: Notification;
}

export function NotificationItem({ notification }: NotificationItemProps) {
  const bgColorClass = {
    info: "bg-blue-500/10 text-blue-600",
    warning: "bg-yellow-500/10 text-yellow-600",
    error: "bg-red-500/10 text-red-600"
  }[notification.type];

  return (
    <div className={`p-3 rounded-lg ${bgColorClass}`}>
      <div className="flex justify-between items-start">
        <p className="text-sm">{notification.message}</p>
        <span className="text-xs opacity-70">{notification.timestamp}</span>
      </div>
    </div>
  );
}