// services/TransactionService.ts

import { Transaction, Category } from '@/types';

const BASE_TXN_URL = 'http://localhost:8080/api/transactions';
const BASE_CATEGORY_URL = 'http://localhost:8080/api/categories';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
};

// ✅ Transactions

export const getTransactions = async (): Promise<Transaction[]> => {
  const res = await fetch(BASE_TXN_URL, {
    headers: getAuthHeaders(),
  });

  if (!res.ok) throw new Error('Failed to fetch transactions');
  return res.json();
};

export const createTransaction = async (
  transaction: Omit<Transaction, 'id'>
): Promise<Transaction> => {
  const res = await fetch(BASE_TXN_URL, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(transaction),
  });

  if (!res.ok) throw new Error('Failed to create transaction');
  return res.json();
};

export const updateTransaction = async (
  id: number,
  updatedData: Partial<Transaction>
): Promise<Transaction> => {
  const res = await fetch(`${BASE_TXN_URL}/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify(updatedData),
  });

  if (!res.ok) throw new Error('Failed to update transaction');
  return res.json();
};

export const deleteTransaction = async (id: number): Promise<void> => {
  const res = await fetch(`${BASE_TXN_URL}/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });

  if (!res.ok) throw new Error('Failed to delete transaction');
};

// ✅ Categories

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(BASE_CATEGORY_URL, {
    method: 'GET',
    headers: getAuthHeaders(),
  });

  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
};