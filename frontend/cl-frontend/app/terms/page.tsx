'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <motion.section
      className="min-h-screen px-6 py-16 md:px-20 text-[color:var(--base)]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-orange">Terms of Service</h1>

        <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
          Welcome to ClarityLedger. By using our application, you agree to the following terms and conditions.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Usage Terms</h2>
            <p className="text-sm leading-relaxed">
              You are allowed to use ClarityLedger for personal finance tracking and budgeting purposes. Commercial use without permission is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Data Privacy</h2>
            <p className="text-sm leading-relaxed">
              We do not sell or share your data with third parties. All your financial data stays on your account and is protected.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Limitations</h2>
            <p className="text-sm leading-relaxed">
              The forecasts and summaries provided are based on statistical models and may not be 100% accurate. Always consult a financial expert for critical decisions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Changes to Terms</h2>
            <p className="text-sm leading-relaxed">
              We may update these terms occasionally. Continued use of the platform after changes constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Contact</h2>
            <p className="text-sm leading-relaxed">
              For any questions or concerns, feel free to reach out to me at{' '}
              <a href="mailto:3110mithilesh@gmail.com" className="text-brand-orange underline">
                3110mithilesh@gmail.com
              </a>{' '}
              or call at <span className="text-brand-orange">+91 8790897704</span>.
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500 pt-8">
          Last updated on {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </motion.section>
  );
}