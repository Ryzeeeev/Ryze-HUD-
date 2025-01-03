import { motion } from 'framer-motion';
import { Wallet, Building2 } from 'lucide-react';
import { formatMoney } from '@/utils/formatters';

interface MoneyDisplayProps {
  cash: number;
  bank: number;
}

export function MoneyDisplay({ cash, bank }: MoneyDisplayProps) {
  return (
    <motion.div 
      className="fixed top-6 right-6 flex flex-col gap-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="group flex items-center gap-4 bg-black/40  p-4"
        style={{ 
          borderRadius: '2rem 1rem 2rem 1rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
        }}
        whileHover={{ scale: 1.02, x: -10 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="w-12 h-12 flex items-center justify-center bg-green-500/20"
          style={{ borderRadius: '1.5rem 0.5rem 1.5rem 0.5rem' }}
          whileHover={{ rotate: 10 }}
        >
          <Wallet className="text-green-400" size={24} />
        </motion.div>
        <div className="flex flex-col">
          <span className="text-white/60 text-sm font-medium">Cash</span>
          <span className="text-white text-xl font-bold group-hover:text-green-400 transition-colors">
            {formatMoney(cash)}
          </span>
        </div>
      </motion.div>
      
      <motion.div 
        className="group flex items-center gap-4 bg-black/40  p-4"
        style={{ 
          borderRadius: '1rem 2rem 1rem 2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
        }}
        whileHover={{ scale: 1.02, x: -10 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="w-12 h-12 flex items-center justify-center bg-blue-500/20"
          style={{ borderRadius: '0.5rem 1.5rem 0.5rem 1.5rem' }}
          whileHover={{ rotate: -10 }}
        >
          <Building2 className="text-blue-400" size={24} />
        </motion.div>
        <div className="flex flex-col">
          <span className="text-white/60 text-sm font-medium">Bank</span>
          <span className="text-white text-xl font-bold group-hover:text-blue-400 transition-colors">
            {formatMoney(bank)}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}