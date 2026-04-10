"use strict";
// ExpenseModule.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessExpense = exports.BasicExpense = void 0;
// ✅ Base Class
class BasicExpense {
    constructor(id, amount, category, transaction) {
        this.id = id;
        this.amount = amount;
        this.category = category;
        this.transaction = transaction;
    }
    // Method
    getSummary() {
        const [date, description] = this.transaction;
        return `ID: ${this.id}, Amount: ₹${this.amount}, Category: ${this.category}, Date: ${date}, Desc: ${description}`;
    }
}
exports.BasicExpense = BasicExpense;
// ✅ Derived Class
class BusinessExpense extends BasicExpense {
    constructor(id, amount, category, transaction, gst) {
        super(id, amount, category, transaction);
        this.gst = gst;
    }
    // 🔥 Method Override
    getSummary() {
        const baseSummary = super.getSummary();
        return `${baseSummary}, GST: ₹${this.gst}`;
    }
}
exports.BusinessExpense = BusinessExpense;
