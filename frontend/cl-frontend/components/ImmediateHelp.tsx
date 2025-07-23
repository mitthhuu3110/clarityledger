'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ImmediateHelp() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('https://formspree.io/f/mblkrbvv', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(e.currentTarget),
    });

    if (res.ok) {
      setSubmitted(true);
      setMessage('');
    } else {
      alert('⚠️ Something went wrong. Please try again later.');
    }
  };

  return (
    <motion.section
      id="immediate-help"
      className="w-full flex flex-col items-center justify-center py-12 px-6 sm:px-10 md:px-16 text-[color:var(--base)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl w-full text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-brand-orange"
        >
          Need Immediate Assistance? 📢
        </motion.h2>

        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-mono">
          Whether you're stuck somewhere or need clarity — just drop a message 👇. I’ll prioritize it!
        </p>

        {/* Contact Cards */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 w-full sm:w-[320px] border border-gray-300 dark:border-gray-700 px-5 py-4 rounded-lg hover:shadow-lg transition-all dark:bg-[color:var(--bg)]"
          >
            <span className="text-2xl">📧</span>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">Email</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">3110mithilesh@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 w-full sm:w-[320px] border border-gray-300 dark:border-gray-700 px-5 py-4 rounded-lg hover:shadow-lg transition-all dark:bg-[color:var(--bg)]"
          >
            <span className="text-2xl">📞</span>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">Call / WhatsApp</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">+91 8790897704</p>
            </div>
          </motion.div>
        </div>

        {/* Message Form */}
        <div className="pt-8">
          {submitted ? (
            <p className="mt-4 text-sm text-green-600 font-mono">✅ Message sent successfully! I’ll get back to you ASAP </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
              <label
                htmlFor="message"
                className="text-sm font-semibold self-start sm:self-center"
              >
                📝 Drop your message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full sm:w-[450px] bg-transparent border border-gray-400 dark:border-gray-600 rounded-md p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                placeholder="Type your message here..."
              />

              <button
                type="submit"
                className="bg-brand-orange text-white px-5 py-2 rounded-md hover:opacity-90 font-mono text-sm transition-transform hover:scale-105"
              >
                Send Message 
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.section>
  );
}