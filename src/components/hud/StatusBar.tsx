import { motion } from 'framer-motion';

interface StatusBarProps {
  icon: React.ReactNode;
  value: number;
  maxValue: number;
  color: string;
}

export function StatusBar({ icon, value, maxValue, color }: StatusBarProps) {
  const percentage = (value / maxValue) * 100;

  return (
    <motion.div 
      className="flex items-center gap-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="w-12 h-12 flex items-center justify-center bg-black/40 "
        style={{
          borderRadius: '1rem 2rem 1rem 2rem',
          boxShadow: `0 0 20px ${color}20`
        }}
        whileHover={{ scale: 1.1, rotate: 45 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-white/90 rotate-0">{icon}</div>
      </motion.div>
      <div className="relative w-40 h-3">
        <div 
          className="absolute inset-0 "
          style={{ 
            background: 'linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
            borderRadius: '1rem'
          }} 
        />
        <motion.div
          className="absolute inset-0"
          style={{ 
            background: `linear-gradient(90deg, ${color} 0%, ${color}80 100%)`,
            borderRadius: '1rem',
            boxShadow: `0 0 20px ${color}40`
          }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <motion.span 
        className="text-white/90 text-lg font-medium min-w-[48px] bg-black/30 px-3 py-1 "
        style={{ borderRadius: '0.5rem 1.5rem 0.5rem 1.5rem' }}
        whileHover={{ scale: 1.1 }}
      >
        {Math.round(percentage)}%
      </motion.span>
    </motion.div>
  );
}