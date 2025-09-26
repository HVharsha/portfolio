"use client";

import { motion } from 'framer-motion';
import { useAnimatedCursor } from '@/hooks/useAnimatedCursor';

export const AnimatedCursor = () => {
  const { cursor, isTouchDevice } = useAnimatedCursor();

  if (isTouchDevice) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 mix-blend-difference">
      {/* Main cursor dot */}
      <motion.div
        className="absolute w-2 h-2 bg-white rounded-full"
        animate={{
          x: cursor.x - 4,
          y: cursor.y - 4,
          scale: cursor.isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Cursor ring */}
      <motion.div
        className="absolute w-8 h-8 border border-white rounded-full"
        animate={{
          x: cursor.x - 16,
          y: cursor.y - 16,
          scale: cursor.isHovering ? 1.5 : 1,
          opacity: cursor.isHovering ? 0.8 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.8,
        }}
      />

      {/* Trailing particles on hover */}
      {cursor.isHovering && (
        <motion.div
          className="absolute w-1 h-1 bg-white rounded-full"
          animate={{
            x: cursor.x - 2,
            y: cursor.y - 2,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.1,
          }}
        />
      )}
    </div>
  );
};