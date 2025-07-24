// components/transactions/TransactionTable.tsx

'use client';

import React from 'react';
import { Transaction } from '@/types';

type Props = {
  transactions: Transaction[];
  onEdit: (txn: Transaction) => void;
  onDelete: (id: number) => Promise<void>;
};

const TransactionTable: React.FC<Props> = ({ transactions, onEdit, onDelete }) => {
  return (
    <div className="rounded-xl overflow-x-auto border border-gray-700 mt-6">
      <table className="min-w-full bg-zinc-900 text-white">
        <thead>
          <tr className="bg-zinc-800 text-left text-sm">
            <th className="px-4 py-2">TITLE</th>
            <th className="px-4 py-2">AMOUNT</th>
            <th className="px-4 py-2">DATE</th>
            <th className="px-4 py-2">TYPE</th>
            <th className="px-4 py-2">CATEGORY</th>
            <th className="px-4 py-2">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-4 text-gray-400">
                No transactions found.
              </td>
            </tr>
          ) : (
            transactions.map((txn) => (
              <tr key={txn.id} className="border-t border-gray-700 text-sm">
                <td className="px-4 py-2">{txn.title}</td>
                <td className="px-4 py-2">₹ {txn.amount.toFixed(2)}</td>
                <td className="px-4 py-2">{txn.date}</td>
                <td className="px-4 py-2">{txn.type}</td>
                <td className="px-4 py-2">{txn.category}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => onEdit(txn)}
                    className="text-blue-400 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(txn.id)}
                    className="text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;