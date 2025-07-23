// ✅ layout.tsx
'use client';

import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen text-[color:var(--base)] bg-[color:var(--bg)] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="px-6 py-24 max-w-7xl mx-auto"> {/* ✅ py-24 to leave space for fixed navbar */}
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}