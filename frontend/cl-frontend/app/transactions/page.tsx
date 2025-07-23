'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TransactionsPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, []);

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      {/* Transactions content will go here */}
    </div>
  );
}