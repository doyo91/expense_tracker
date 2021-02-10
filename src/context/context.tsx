import React, {
  useReducer,
  createContext,
  PropsWithChildren,
  ReactNode,
} from "react"
// Types
import { Transaction, TransactionsContextState } from "../types/index"
import contextReducer from "./contextReducer"
type Props = {
  children: React.ReactNode
}

const contextDefaulValues: TransactionsContextState = {
  transactions: [],
  deleteTransaction: () => {},
  addTransaction: () => {},
}

export const TransactionsContext = createContext(contextDefaulValues)

export const TransactionProvider = ({ children }: Props) => {
  const [transactions, dispatch] = useReducer(
    contextReducer,
    contextDefaulValues.transactions
  )

  // Action Creators
  const deleteTransaction = (id: string) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id })

  const addTransaction = (transaction: Transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction })

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
