// types/index.ts

export type Transaction = {
  id: number;
  title: string;
  amount: number;
  date: string;
  category: string;
  type: TransactionType;
};

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

// Props for TransactionForm
export type TransactionFormProps = {
  onClose: () => void;
  onSuccess: () => Promise<void>; // ✅ This was missing
  initialData?: Transaction;
  categories: Category[];
};