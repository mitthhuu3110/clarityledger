'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { Github, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const scrollItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'budgeting', label: 'Budgeting' },
  { id: 'forecast', label: 'Forecasting' },
  { id: 'insights', label: 'Insights' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [activeSection, setActiveSection] = useState('overview');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 120;
          let currentSection = scrollItems[0].id;

          for (let i = 0; i < scrollItems.length; i++) {
            const el = document.getElementById(scrollItems[i].id);
            if (el) {
              const top = el.offsetTop;
              const bottom = el.offsetTop + el.offsetHeight;

              if (scrollPosition >= top && scrollPosition < bottom) {
                currentSection = scrollItems[i].id;
                break;
              }
            }
          }

          const nearBottom =
            window.innerHeight + window.scrollY >=
            document.body.scrollHeight - 50;
          if (nearBottom) {
            currentSection = scrollItems[scrollItems.length - 1].id;
          }

          setActiveSection(currentSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[color:var(--bg)] bg-opacity-90 backdrop-blur-md border-b border-gray-300 dark:border-gray-700 shadow-sm">
      <div className="relative w-full px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold font-mono hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={28}
              height={28}
              className="rounded-sm"
            />
            clarity.ledger
          </Link>
        </div>

        {isHome && (
          <div className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
            {scrollItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`text-sm font-mono transition hover:text-brand-orange ${
                  activeSection === item.id
                    ? 'text-brand-orange underline underline-offset-4'
                    : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/mitthhuu3110/clarity-ledger"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-orange transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[color:var(--base)] focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 px-4 text-sm font-mono">
          {isHome &&
            scrollItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`transition hover:text-brand-orange ${
                  activeSection === item.id
                    ? 'text-brand-orange underline underline-offset-4'
                    : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          <a
            href="https://github.com/mitthhuu3110/clarity-ledger"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-orange"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      )}
    </nav>
  );
}