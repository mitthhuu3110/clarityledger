'use client';

import { Transaction } from '@/types';
import { Pencil, Trash } from 'lucide-react';

type Props = {
  transactions: Transaction[];
  onEdit: (tx: Transaction) => void;
  onDelete: (id: number) => void;
};

export default function TransactionTable({ transactions, onEdit, onDelete }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl shadow border border-gray-300 dark:border-gray-700 mt-6">
      <table className="min-w-full text-sm text-left font-mono text-[color:var(--base)]">
        <thead className="bg-zinc-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300">
          <tr>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-6 text-gray-400">
                No transactions found.
              </td>
            </tr>
          ) : (
            transactions.map((tx) => (
              <tr
                key={tx.id}
                className="border-t border-gray-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <td className="px-4 py-3">{tx.title}</td>
                <td className="px-4 py-3">
                  ₹{tx.amount.toLocaleString('en-IN')}
                </td>
                <td className="px-4 py-3">{tx.category}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      tx.type === 'INCOME'
                        ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200'
                        : 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200'
                    }`}
                  >
                    {tx.type}
                  </span>
                </td>
                <td className="px-4 py-3">{new Date(tx.date).toLocaleDateString()}</td>
                <td className="px-4 py-3 flex justify-center gap-4">
                  <button
                    onClick={() => onEdit(tx)}
                    className="text-blue-500 hover:text-blue-700"
                    title="Edit"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(tx.id)}
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                  >
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}