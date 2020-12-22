import Transaction from '../models/Transaction';

import TransactionDTO from '../dtos/TransactionDTO';

class TransactionsMapper {
  public static toDTO(transaction: Transaction): TransactionDTO {
    const transactionDTO = new TransactionDTO();

    transactionDTO.id = transaction.id;
    transactionDTO.title = transaction.title;
    transactionDTO.value = transaction.value;
    transactionDTO.type = transaction.type;
    transactionDTO.created_at = transaction.created_at;
    transactionDTO.updated_at = transaction.updated_at;
    transactionDTO.category = transaction.category;

    return transactionDTO;
  }
}

export default TransactionsMapper;
