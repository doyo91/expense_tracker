import React, { useContext, useState, ChangeEvent } from "react"
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core"
import { v4 as uuidv4 } from "uuid"
import useStyles from "./styles"
import { TransactionsContext } from "../../../context/context"
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories"
import { Transaction } from "../../../types"
import formatDate from "../../../utils/formatDate"

const initialState: Transaction = {
  amount: 0,
  category: "",
  type: "Income",
  date: formatDate(new Date()),
  id: "abc0",
}
type InputChange =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>
  | ChangeEvent<HTMLSelectElement>
  | ChangeEvent<{ value: unknown }>

export const Form = () => {
  const classes = useStyles()
  const { addTransaction } = useContext(TransactionsContext)
  const [formData, setFormData] = useState<Transaction>(initialState)
  const [open, setOpen] = useState(false)

  // TODO: e.target.name does not exist on type InputChange
  const handleInputChange = (e: any | InputChange) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    }
    addTransaction(transaction)
    setFormData(initialState)
  }

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            name="type"
            onChange={handleInputChange}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            name="category"
            onChange={handleInputChange}
          >
            {selectedCategories?.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={formData.amount}
          name="amount"
          onChange={handleInputChange}
          type="number"
          label="Amount"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={formData.date}
          name="date"
          onChange={handleInputChange}
          type="date"
          label="Date"
          fullWidth
        />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  )
}
