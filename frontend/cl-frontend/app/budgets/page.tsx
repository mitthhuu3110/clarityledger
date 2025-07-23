'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BudgetsPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, []);

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Budgets</h1>
      {/* Budgets content will go here */}
    </div>
  );
}