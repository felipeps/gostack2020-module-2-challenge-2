import Category from '../models/Category';

class TransactionDTO {
  id: string;

  title: string;

  value: number;

  type: 'income' | 'outcome';

  created_at: Date;

  updated_at: Date;

  category: Category;
}

export default TransactionDTO;
