'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function HowItWorksCard({
  icon,
  title,
  description,
  index,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div
        className="group cursor-pointer rounded-2xl p-6 sm:p-8 space-y-4 border border-zinc-300 dark:border-zinc-700 
        backdrop-blur-sm hover:shadow-[0_4px_30px_rgba(255,115,0,0.25)] transition-all duration-300
        transform hover:scale-[1.02] bg-white/40 dark:bg-zinc-900/40"
      >
        {/* Emoji with animation */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', delay: index * 0.3 }}
          className="text-4xl transition-transform group-hover:scale-110"
        >
          {icon}
        </motion.div>

        <h3 className="text-xl font-bold font-sans text-[color:var(--base)] group-hover:text-brand-orange transition">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}