'use client';

import Link from 'next/link';
import { Github, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {/* Back to Top Button */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 bg-brand-orange text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all z-50"
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full text-center text-sm text-gray-600 dark:text-gray-400 bg-[color:var(--bg)] mt-24"
      >
        {/* Full-width border line */}
        <div className="w-full border-t border-gray-300 dark:border-gray-700" />

        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 px-6 pt-6">
          <Link href="mailto:3110mithilesh@gmail.com" className="hover:underline">
            3110mithilesh@gmail.com
          </Link>
          <span className="hidden sm:inline">|</span>

          <span className="flex items-center gap-1">
            <Phone size={14} />
            +91 8790897704
          </span>
          <span className="hidden sm:inline">|</span>

          <Link href="/terms" className="hover:underline text-brand-orange font-semibold">
            Terms of Service 📄
          </Link>
        </div>

        {/* Source Link */}
        <div className="mt-3 flex justify-center items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
          <Github size={14} />
          <Link
            href="https://github.com/mitthhuu3110/clarityledger"
            target="_blank"
            className="hover:underline"
          >
            View Source on GitHub
          </Link>
        </div>

        {/* Copyright */}
        <p className="mt-2 text-xs text-gray-400 dark:text-gray-600 pb-6">
          © {new Date().getFullYear()} Mithilesh Charan Perugu. All rights reserved.
        </p>
      </motion.footer>
    </>
  );
}