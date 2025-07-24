// services/CategoryService.ts

import { Category } from '@/types';

const API_BASE_URL = 'http://localhost:8080/api/categories';

export async function fetchCategories(): Promise<Category[]> {
  const token = localStorage.getItem('token');

  const res = await fetch(API_BASE_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
}