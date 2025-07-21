// src/app/layout.tsx

import './styles/globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';
import { ThemeProvider } from '../components/ThemeProvider'; // 👈 Import ThemeProvider

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ClarityLedger',
  description: 'Smart Budgeting & Expense Forecasting System',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white`}
      >
        <ThemeProvider> {/* 👈 Wrap everything with ThemeProvider */}
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <ThemeToggle />
            <main className="flex-grow">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}