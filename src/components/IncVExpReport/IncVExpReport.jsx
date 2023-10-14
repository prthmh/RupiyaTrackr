import { useSelector } from "react-redux";
import "./IncVExpReport.css";

const IncVExpReport = () => {
  const allIncomes = useSelector((state) => state.allIncomes);
  const allExpenses = useSelector((state) => state.allExpenses);
  const allSavings = useSelector((state) => state.allSavings);

  const totalIncome = allIncomes.reduce(
    (total, income) => total + income.amount,
    0
  );
  const totalExpence = allExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const totalSaving = allSavings.reduce(
    (total, saving) => total + saving.amount,
    0
  );
  return (
    <div className="inc_exp">
      <h2>Total Income: ₹{totalIncome}</h2>
      <h2>Total Expense: ₹{totalExpence}</h2>
      <h2>Total Saving: ₹{totalSaving}</h2>
    </div>
  );
};

export default IncVExpReport;
