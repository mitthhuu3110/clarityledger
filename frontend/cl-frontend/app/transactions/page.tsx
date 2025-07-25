'use client';

import { useEffect, useState } from 'react';
import TransactionTable from '@/components/transactions/TransactionTable';
import TransactionForm from '@/components/transactions/TransactionForm';
import FilterBar from '@/components/transactions/FilterBar';
import { Transaction, Category, TransactionType } from '@/types';
import { getTransactions, createTransaction, updateTransaction, deleteTransaction } from '@/services/TransactionService';
import { fetchCategories } from '@/services/CategoryService';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState<Transaction | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filterType, setFilterType] = useState<TransactionType | 'ALL'>('ALL');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    loadTransactions();
    loadCategories();
  }, []);

  useEffect(() => {
    let data = [...transactions];
    if (filterType !== 'ALL') {
      data = data.filter(txn => txn.type === filterType);
    }
    if (filterCategory) {
      data = data.filter(txn => txn.category === filterCategory);
    }
    if (filterDate) {
      data = data.filter(txn => txn.date === filterDate);
    }
    setFilteredTransactions(data);
  }, [filterType, filterCategory, filterDate, transactions]);

  const loadTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
    } catch (err) {
      console.error('Failed to fetch transactions:', err);
    }
  };

  const loadCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    }
  };

  const handleAdd = () => {
    setEditData(null);
    setShowForm(true);
  };

  const handleEdit = (txn: Transaction) => {
    setEditData(txn);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTransaction(id);
      await loadTransactions();
    } catch (err) {
      console.error('Failed to delete transaction:', err);
    }
  };

  const handleSuccess = async () => {
    await loadTransactions();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <button
          onClick={handleAdd}
          className="bg-brand-orange text-white px-4 py-2 rounded-md font-mono hover:opacity-90"
        >
          + Add Transaction
        </button>
      </div>

      <FilterBar
        type={filterType}
        setType={setFilterType}
        category={filterCategory}
        setCategory={setFilterCategory}
        date={filterDate}
        setDate={setFilterDate}
        categories={categories} // ✅ Fixed: Now matches correct type
      />

      <TransactionTable
        transactions={filteredTransactions}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {showForm && (
        <TransactionForm
          onClose={() => setShowForm(false)}
          onSuccess={handleSuccess}
          initialData={editData || undefined}
          categories={categories} // ✅ Fixed: Removed extra prop in TransactionTable
        />
      )}
    </div>
  );
}