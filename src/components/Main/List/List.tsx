import React from "react"
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core"
import { Delete, MoneyOff } from "@material-ui/icons"
import useStyles from "./styles"

type Transaction = {
  id: number
  type: string
  category: string
  amount: number
  date: Date | string
}

export const List = () => {
  const classes = useStyles()

  const transactions: Transaction[] = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 100,
      date: "Tue Feb 9",
    },
    {
      id: 2,
      type: "Expense",
      category: "Pets",
      amount: 50,
      date: "Tue Feb 9",
    },
    {
      id: 3,
      type: "Income",
      category: "Business",
      amount: 300,
      date: "Tue Feb 10",
    },
  ]
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                // onClick={() => deleteTransaction(transaction.id)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  )
}
