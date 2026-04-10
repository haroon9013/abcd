export type TransactionDetails = [string, string];
export interface IExpense {
    id: number;
    amount: number;
    category: string;
    transaction: TransactionDetails;
}
export declare class BasicExpense implements IExpense {
    id: number;
    amount: number;
    category: string;
    transaction: TransactionDetails;
    constructor(id: number, amount: number, category: string, transaction: TransactionDetails);
    getSummary(): string;
}
export declare class BusinessExpense extends BasicExpense {
    gst: number;
    constructor(id: number, amount: number, category: string, transaction: TransactionDetails, gst: number);
    getSummary(): string;
}
//# sourceMappingURL=ExpenseModule.d.ts.map