// ExpenseModule.ts

// ✅ Tuple type (date, description)
export type TransactionDetails = [string, string];

// ✅ Interface
export interface IExpense {
  id: number;
  amount: number;
  category: string;
  transaction: TransactionDetails;
}

// ✅ Base Class
export class BasicExpense implements IExpense {
  constructor(
    public id: number,
    public amount: number,
    public category: string,
    public transaction: TransactionDetails
  ) {}

  // Method
  getSummary(): string {
    const [date, description] = this.transaction;

    return `ID: ${this.id}, Amount: ₹${this.amount}, Category: ${this.category}, Date: ${date}, Desc: ${description}`;
  }
}

// ✅ Derived Class
export class BusinessExpense extends BasicExpense {
  constructor(
    id: number,
    amount: number,
    category: string,
    transaction: TransactionDetails,
    public gst: number
  ) {
    super(id, amount, category, transaction);
  }

  // 🔥 Method Override
  getSummary(): string {
    const baseSummary = super.getSummary();
    return `${baseSummary}, GST: ₹${this.gst}`;
  }
}