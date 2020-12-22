import { getRepository } from 'typeorm';
import validate from 'uuid-validate';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getRepository(Transaction);

    if (!validate(id)) {
      throw new AppError('Transaction not found');
    }

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction not found');
    }

    await transactionsRepository.delete(transaction.id);
  }
}

export default DeleteTransactionService;
