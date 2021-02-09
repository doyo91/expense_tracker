export type Transaction = {
  id: string
  type: string
  category: string
  amount: number
  date: Date | string
}

enum Types {
  Income = "Income",
  Expense = "Expense",
}

// Context
export type TransactionsContextState = {
  transactions: Transaction[]
  deleteTransaction: (id: string) => void
  addTransaction: (transaction: Transaction) => void
}

export type TransactionStateProps = {
  children: React.ReactNode
}
