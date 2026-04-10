// app.ts

import {
  BasicExpense,
  BusinessExpense
} from "./ExpenseModule";

// ✅ Create objects
const e1 = new BasicExpense(1, 1000, "Food", ["2026-04-10", "Lunch"]);
const e2 = new BasicExpense(2, 500, "Travel", ["2026-04-10", "Bus"]);

const e3 = new BusinessExpense(
  3,
  2000,
  "Office",
  ["2026-04-10", "Stationery"],
  360
);

// ✅ Store in array (polymorphism)
const expenses: BasicExpense[] = [e1, e2, e3];

// ✅ Function to calculate total
const getTotalExpenses = (list: BasicExpense[]): number => {
  return list.reduce((total, exp) => total + exp.amount, 0);
};

// ✅ Output
expenses.forEach(exp => {
  console.log(exp.getSummary());
});

console.log("Total Expense: ₹", getTotalExpenses(expenses));