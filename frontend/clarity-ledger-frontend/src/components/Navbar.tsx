'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 bg-white dark:bg-gray-950 shadow-md z-50 fixed top-0 left-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          ClarityLedger
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative font-medium transition-colors ${
                pathname === item.href
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 dark:bg-blue-400"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 dark:text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`font-medium transition-colors ${
                pathname === item.href
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}