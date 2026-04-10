"use strict";
// app.ts
Object.defineProperty(exports, "__esModule", { value: true });
const ExpenseModule_1 = require("./ExpenseModule");
// ✅ Create objects
const e1 = new ExpenseModule_1.BasicExpense(1, 1000, "Food", ["2026-04-10", "Lunch"]);
const e2 = new ExpenseModule_1.BasicExpense(2, 500, "Travel", ["2026-04-10", "Bus"]);
const e3 = new ExpenseModule_1.BusinessExpense(3, 2000, "Office", ["2026-04-10", "Stationery"], 360);
// ✅ Store in array (polymorphism)
const expenses = [e1, e2, e3];
// ✅ Function to calculate total
const getTotalExpenses = (list) => {
    return list.reduce((total, exp) => total + exp.amount, 0);
};
// ✅ Output
expenses.forEach(exp => {
    console.log(exp.getSummary());
});
console.log("Total Expense: ₹", getTotalExpenses(expenses));
