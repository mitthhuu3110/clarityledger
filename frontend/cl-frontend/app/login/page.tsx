'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) router.push('/overview');
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error('Invalid credentials');
      const data = await res.json();
      localStorage.setItem('token', data.token);
      router.push('/overview');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[color:var(--bg)] px-4 py-12">
      <div className="animate-fadeIn w-full max-w-md border border-gray-300 dark:border-gray-700 rounded-xl p-8 shadow-lg backdrop-blur-md bg-white/70 dark:bg-zinc-900/60">
        <h2 className="text-2xl font-bold text-center mb-6 text-[color:var(--base)]">
          Login to ClarityLedger 🔐
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 dark:border-gray-600 text-[color:var(--base)]"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 dark:border-gray-600 text-[color:var(--base)]"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-orange text-white font-semibold py-2 px-4 rounded-md hover:opacity-90 transition"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-6">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-brand-orange font-medium hover:underline">
            Create one →
          </Link>
        </p>
      </div>
    </section>
  );
}