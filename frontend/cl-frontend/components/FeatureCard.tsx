'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function FeatureCard({
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="rounded-2xl p-5 sm:p-8 space-y-4 border border-zinc-300 dark:border-zinc-700 
        backdrop-blur-sm hover:shadow-[0_4px_20px_rgba(255,115,0,0.15)] transition-shadow duration-300"
    >
      {/* Icon */}
      <div className="text-3xl text-brand-orange">{icon}</div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold font-sans text-[color:var(--base)]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}