export type Transaction = {
  id: number;
  title: string;
  amount: number;
  date: string;
  category: string;
  type: TransactionType;
};

// types/index.ts

// Enum for Transaction Type
export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

// Type for Category
export type Category = {
  id: number;
  name: string;
  type: TransactionType; // INCOME or EXPENSE
};

