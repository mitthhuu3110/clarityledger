// ✅ Updated: TransactionForm.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { TransactionType, Category, Transaction } from '@/types';
import { createTransaction } from '@/services/TransactionService';

type TransactionFormProps = {
  onClose: () => void;
  onSuccess: () => Promise<void>;
  initialData?: Transaction;
  categories: Category[];
};

const TransactionForm: React.FC<TransactionFormProps> = ({
  onClose,
  onSuccess,
  initialData,
  categories,
}) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [amount, setAmount] = useState<number>(initialData?.amount || 0);
  const [date, setDate] = useState<string>(
    initialData?.date || new Date().toISOString().split('T')[0]
  );
  const [type, setType] = useState<TransactionType>(
    initialData?.type || TransactionType.EXPENSE
  );
  const [category, setCategory] = useState<string>(initialData?.category || '');

  const filteredCategories = categories.filter((cat) => cat.type === type);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount || !category) return;

    const newTransaction: Omit<Transaction, 'id'> = {
      title,
      amount,
      date,
      type,
      category,
    };

    try {
      await createTransaction(newTransaction);
      await onSuccess();
      onClose();
    } catch (err) {
      console.error('Failed to submit transaction', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-xl shadow-xl w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-white">Add Transaction</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
        />

        <input
          type="number"
          placeholder="Amount"
          step="0.01"
          min="0"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value as TransactionType)}
          className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
        >
          {Object.values(TransactionType).map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
        >
          <option value="">Select Category</option>
          {filteredCategories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>

        <div className="flex justify-between pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;