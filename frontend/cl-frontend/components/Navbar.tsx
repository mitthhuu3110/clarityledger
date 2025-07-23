'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const navItems = [
  { path: '/overview', label: 'Overview' },
  { path: '/transactions', label: 'Transactions' },
  { path: '/budgets', label: 'Budgets' },
  { path: '/forecast', label: 'Forecast' },
  { path: '/reports', label: 'Reports' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[color:var(--bg)] bg-opacity-90 backdrop-blur-md border-b border-gray-300 dark:border-gray-700 shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold font-mono hover:opacity-90 transition-opacity"
        >
          <Image
            src="/images/my-logo.png"
            alt="ClarityLedger Logo"
            width={28}
            height={28}
            className="rounded-sm"
          />
          Clarity-Ledger
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-sm font-mono hover:text-brand-orange transition"
            >
              {item.label}
            </Link>
          ))}

{!isLoggedIn ? (
  <Link
    href="/login"
    className="flex items-center gap-1 text-sm font-mono hover:text-brand-orange transition"
  >
    <span>Login / Sign Up</span>
    <span className="text-lg">👤</span>
  </Link>
) : (
  <button
    onClick={handleLogout}
    className="text-sm font-mono hover:text-red-500 transition"
  >
    Logout
  </button>
)}
          <ThemeToggle />
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[color:var(--base)] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 px-4 text-sm font-mono">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="hover:text-brand-orange transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

        {!isLoggedIn ? (
  <Link
    href="/login"
    className="flex items-center gap-1 hover:text-brand-orange transition"
    onClick={() => setMenuOpen(false)}
  >
    <span>Login / Sign Up</span>
    <span className="text-lg">👤</span>
  </Link>
) : (
  <button
    onClick={() => {
      handleLogout();
      setMenuOpen(false);
    }}
    className="hover:text-red-500 transition"
  >
    Logout
  </button>
)}
        </div>
      )}
    </nav>
  );
}