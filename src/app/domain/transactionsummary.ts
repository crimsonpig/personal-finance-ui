import { CategorizedAmount } from '../categorizedamount';

export class TransactionSummary {
    expenses: CategorizedAmount[];
    incomes: CategorizedAmount[];
    incomesTotal: number;
    expensesTotal: number;
}
