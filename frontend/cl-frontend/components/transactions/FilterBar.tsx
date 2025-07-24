'use client';

import { Category, TransactionType } from '@/types';
import { useEffect, useState } from 'react';

export type FilterBarProps = {
  type: TransactionType | 'ALL';
  setType: (type: TransactionType | 'ALL') => void;
  category: string;
  setCategory: (category: string) => void;
  date: string;
  setDate: (date: string) => void;
  categories: Category[];
};

export default function FilterBar({
  type,
  setType,
  category,
  setCategory,
  date,
  setDate,
  categories,
}: FilterBarProps) {
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (type === 'ALL') {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter((cat) => cat.type === type);
      setFilteredCategories(filtered);
    }
  }, [type, categories]);

  return (
    <div className="flex flex-wrap items-center gap-4 bg-gray-100 dark:bg-zinc-800 p-4 rounded-xl shadow">
      <select
        value={type}
        onChange={(e) => setType(e.target.value as TransactionType | 'ALL')}
        className="p-2 rounded-md border dark:bg-zinc-700 dark:text-white"
      >
        <option value="ALL">All</option>
        <option value="INCOME">Income</option>
        <option value="EXPENSE">Expense</option>
      </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 rounded-md border dark:bg-zinc-700 dark:text-white"
      >
        <option value="">All Categories</option>
        {filteredCategories.map((cat) => (
          <option key={cat.id} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>

      <input
        type="month"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 rounded-md border dark:bg-zinc-700 dark:text-white"
      />
    </div>
  );
}