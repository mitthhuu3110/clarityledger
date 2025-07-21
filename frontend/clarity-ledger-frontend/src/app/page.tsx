// src/app/page.tsx

'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f0f4ff] to-[#d4e0ff] text-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
          Welcome to <span className="text-blue-600">ClarityLedger</span>
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Smart Budgeting & Expense Forecasting System built for modern users. 
          Track, manage, and grow your finances with clarity.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-base font-semibold shadow-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </motion.div>
    </main>
  );
}