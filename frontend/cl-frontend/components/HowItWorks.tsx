'use client';

import { motion } from 'framer-motion';
import HowItWorksCard from './HowItWorksCard';

export default function HowItWorks() {
  const steps = [
    {
      icon: '📝',
      title: 'Add Your Expenses',
      description: 'Log your incomes & expenses in just a few clicks, categorized easily according to your needs.',
    },
    {
      icon: '💸',
      title: 'Set Budgets',
      description: 'Create monthly budgets for different categories to control spending.',
    },
    {
      icon: '📊',
      title: 'Forecast & Report',
      description: 'View trends, forecasts, and generate reports to analyze your finances.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full flex flex-col items-center justify-center py-20 px-6 sm:px-10 md:px-16 text-[color:var(--base)]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold font-sans text-brand-orange mb-12 text-center"
      >
        How It Works
      </motion.h2>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {steps.map((step, index) => (
          <HowItWorksCard
            key={step.title}
            icon={step.icon}
            title={step.title}
            description={step.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}