'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Product Manager at Zeta',
    feedback:
      'ClarityLedger has completely changed how I manage my monthly expenses. I love the forecasting and budget tools!',
  },
  {
    name: 'Ravi Varma',
    role: 'SDE II at Flipkart',
    feedback:
      'The clean design and intuitive UI make expense tracking feel effortless. Highly recommended!',
  },
  {
    name: 'Ayesha Khan',
    role: 'Financial Analyst at HDFC',
    feedback:
      'Beautiful UX, detailed analytics, and brilliant forecasting. It feels like it was made just for Indian professionals.',
  },
  {
    name: 'Manoj Reddy',
    role: 'Freelance Designer',
    feedback:
      'I’ve tried many tools — but this one nails it. It’s fast, clean, and actually helps me save money.',
  },
  {
    name: 'Ishita Roy',
    role: 'Consultant at Deloitte',
    feedback:
      'Saves me at least 2 hours every week. The dashboard is addictive and the predictions are scarily accurate.',
  },
  {
    name: 'Neeraj Sinha',
    role: 'MBA Student, IIM Bangalore',
    feedback:
      'Helps me stay accountable with my spending. Great for students and early professionals alike!',
  },
];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval: NodeJS.Timeout;

    if (container) {
      scrollInterval = setInterval(() => {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 1, behavior: 'smooth' });
        }
      }, 30); // smooth pace
    }

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full py-20 px-6 sm:px-10 md:px-16 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold font-sans text-center text-brand-orange mb-12"
      >
        What People Say
      </motion.h2>

      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth"
      >
        {[...testimonials, ...testimonials].map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="min-w-[320px] max-w-[320px] flex-shrink-0 border border-zinc-300 dark:border-zinc-700 bg-white/40 dark:bg-zinc-900/40 
              rounded-2xl p-6 shadow-md hover:shadow-[0_4px_30px_rgba(255,115,0,0.2)] transition-all duration-300 backdrop-blur-sm"
          >
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              “{t.feedback}”
            </p>
            <div className="text-sm font-semibold text-[color:var(--base)]">
              {t.name}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 italic">
              {t.role}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}