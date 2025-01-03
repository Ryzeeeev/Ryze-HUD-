import { motion } from 'framer-motion';
import { Compass, MapPin } from 'lucide-react';

interface MinimapProps {
  heading: number;
  location: string;
}

export function Minimap({ heading, location }: MinimapProps) {
  return (
    <motion.div 
      className="fixed bottom-6 right-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="bg-black/40 p-6"
        style={{ 
          borderRadius: '3rem 1rem 2rem 2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="flex items-center gap-4 mb-4"
          whileHover={{ x: 5 }}
        >
          <motion.div 
            className="w-12 h-12 flex items-center justify-center bg-purple-500/20"
            style={{ borderRadius: '1.5rem 0.5rem 1.5rem 0.5rem' }}
            whileHover={{ rotate: heading }}
            transition={{ duration: 0.5 }}
          >
            <Compass className="text-purple-400" size={24} />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-white/60 text-sm font-medium">Heading</span>
            <span className="text-white text-xl font-bold">{heading}°</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-4"
          whileHover={{ x: 5 }}
        >
          <motion.div 
            className="w-12 h-12 flex items-center justify-center bg-orange-500/20"
            style={{ borderRadius: '0.5rem 1.5rem 0.5rem 1.5rem' }}
            whileHover={{ scale: 1.1 }}
          >
            <MapPin className="text-orange-400" size={24} />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-white/60 text-sm font-medium">Location</span>
            <span className="text-white text-xl font-bold">{location}</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}