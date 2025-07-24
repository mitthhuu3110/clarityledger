'use client';

import { TransactionType, Category } from '@/types';

export interface FilterBarProps {
  type: TransactionType | 'ALL';
  setType: (type: TransactionType | 'ALL') => void;
  category: string;
  setCategory: (category: string) => void;
  date: string;
  setDate: (date: string) => void;
  categories: Category[];
}

export default function FilterBar({
  type,
  setType,
  category,
  setCategory,
  date,
  setDate,
  categories,
}: FilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 mb-6 border rounded-lg bg-white/60 dark:bg-zinc-800 shadow-md">
      <select
        value={type}
        onChange={(e) => setType(e.target.value as TransactionType | 'ALL')}
        className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent text-[color:var(--base)]"
      >
        <option value="ALL">All</option>
        <option value="INCOME">Income</option>
        <option value="EXPENSE">Expense</option>
      </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent text-[color:var(--base)]"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat.id.toString()} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>

      <input
        type="date"
        value={date || ''}
        onChange={(e) => setDate(e.target.value)}
        className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent text-[color:var(--base)]"
      />
    </div>
  );
}