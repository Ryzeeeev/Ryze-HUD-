import { motion } from 'framer-motion';
import { Heart, Shield, Battery } from 'lucide-react';
import { StatusBar } from './StatusBar';

interface PlayerStatsProps {
  health: number;
  armor: number;
  stamina: number;
}

export function PlayerStats({ health, armor, stamina }: PlayerStatsProps) {
  return (
    <motion.div 
      className="fixed bottom-4 left-[460px] flex flex-col gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <StatusBar
        icon={<Heart size={20} />}
        value={health}
        maxValue={100}
        color="#ef4444"
      />
      <StatusBar
        icon={<Shield size={20} />}
        value={armor}
        maxValue={100}
        color="#3b82f6"
      />
      <StatusBar
        icon={<Battery size={20} />}
        value={stamina}
        maxValue={100}
        color="#22c55e"
      />
    </motion.div>
  );
}