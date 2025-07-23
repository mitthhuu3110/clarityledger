'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] w-full flex flex-col md:flex-row items-center justify-between py-6 px-6 md:px-20">
      {/* Left Content */}
      <div className="flex flex-col items-start gap-6 max-w-xl text-[color:var(--base)]">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold leading-tight"
        >
          Take Control of <span className="text-brand-orange">Your Finances.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-300"
        >
          ClarityLedger helps you track expenses, manage budgets, forecast spendings, and make smarter money decisions — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Link href="/overview">
            <button className="bg-brand-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition">
              Go to Dashboard →
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-10 md:mt-0"
      >
        <Image
          src="/images/dashboard.png" // Add your illustration to public/images/
          alt="Finance Illustration"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}