'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full flex flex-col items-center justify-center text-center py-16 px-6 sm:px-10 md:px-16 text-[color:var(--base)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full space-y-10"
      >
        {/* 🎉 Welcome message at the top */}
        <motion.h1
          className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, Welcome to ClarityLedger
          <motion.span
            animate={{ rotate: [0, 15, -10, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="inline-block origin-[70%_70%]"
          >
            👋
          </motion.span>
        </motion.h1>

        {/* 💻 App tagline */}
        <motion.h2
          whileHover={{ scale: 1.02 }}
          className="text-4xl sm:text-5xl font-extrabold font-sans tracking-wide text-brand-orange"
        >
          Track Smarter. Budget Better.
        </motion.h2>

        {/* Short description */}
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-mono max-w-2xl mx-auto">
          ClarityLedger helps you take control of your finances with real-time expense tracking,
          personalized forecasting, and intuitive budget management.
        </p>
      </motion.div>
    </section>
  );
}