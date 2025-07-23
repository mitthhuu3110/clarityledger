'use client';

import FeatureCard from './FeatureCard';
import { motion } from 'framer-motion';
import { FaWallet, FaChartPie, FaRegCalendarAlt, FaFileInvoiceDollar } from 'react-icons/fa';

export default function FeatureHighlights() {
  const features = [
    {
      icon: <FaWallet />,
      title: 'Track Transactions',
      description: 'Monitor your spending and income across different categories with ease.',
    },
    {
      icon: <FaRegCalendarAlt />,
      title: 'Smart Budgets',
      description: 'Create monthly budgets and stay on top of your financial goals.',
    },
    {
      icon: <FaChartPie />,
      title: 'Expense Forecast',
      description: 'Get future predictions based on your spending history.',
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: 'Insightful Reports',
      description: 'Generate monthly reports and visualize your financial habits.',
    },
  ];

  return (
    <section
      id="features"
      className="w-full flex flex-col items-center justify-center py-12 px-6 sm:px-10 md:px-16 text-[color:var(--base)]"
    >
      <div className="max-w-6xl w-full flex flex-col items-center text-center space-y-12">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold font-sans text-brand-orange"
        >
          Features at a Glance
        </motion.h2>

        {/* Feature Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}