import React from "react"
import ReactDOM from "react-dom"
import { TransactionProvider } from "./context/context"
import App from "./App"

import "./index.css"

ReactDOM.render(
  <TransactionProvider>
    <App />
  </TransactionProvider>,
  document.getElementById("root")
)
