'use client';

import { useEffect, useState } from 'react';
import { createTransaction, updateTransaction } from '@/services/TransactionService'; 
import { Category, Transaction, TransactionType } from '@/types';
import { X } from 'lucide-react';

interface TransactionFormProps {
  onClose: () => void;
  onSuccess: () => void;
  initialData?: Transaction;
  categories: Category[];
}

export default function TransactionForm({ onClose, onSuccess, initialData, categories }: TransactionFormProps) {
const [form, setForm] = useState<Transaction>(
  initialData || ({
    id: 0,
    title: '',
    amount: 0,
    date: new Date().toISOString().substring(0, 10),
    type: TransactionType.EXPENSE,
    category: '',
  } as Transaction)
);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'amount' ? parseFloat(value) : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (initialData) {
        await updateTransaction(initialData.id, form);
      } else {
        await createTransaction(form);
      }
      onSuccess();
      onClose();
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="w-full max-w-md p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-red-500">
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-semibold text-center mb-4">
          {initialData ? 'Edit Transaction' : 'Add New Transaction'}
        </h2>

        {error && <p className="text-red-500 text-sm mb-3 text-center font-mono">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md bg-transparent border-gray-400 dark:border-gray-600 text-[color:var(--base)]"
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md bg-transparent border-gray-400 dark:border-gray-600 text-[color:var(--base)]"
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md bg-transparent border-gray-400 dark:border-gray-600 text-[color:var(--base)]"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-transparent border-gray-400 dark:border-gray-600 text-[color:var(--base)]"
          >
            <option value="INCOME">Income</option>
            <option value="EXPENSE">Expense</option>
          </select>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-transparent border-gray-400 dark:border-gray-600 text-[color:var(--base)]"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-orange text-white py-2 rounded-md hover:opacity-90 transition"
          >
            {loading ? 'Saving...' : initialData ? 'Update Transaction' : 'Add Transaction'}
          </button>
        </form>
      </div>
    </div>
  );
}