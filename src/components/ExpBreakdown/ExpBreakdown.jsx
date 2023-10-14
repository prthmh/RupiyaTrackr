import { useSelector } from "react-redux";

import "./ExpBreakdown.css";

const ExpBreakdown = () => {
  const allExpenses = useSelector((state) => state.allExpenses);

  let expBreak = {};
  allExpenses.forEach((expense) => {
    if (expBreak[expense.category]) {
      expBreak[expense.category] += expense.amount;
    } else {
      expBreak[expense.category] = expense.amount;
    }
  });
  console.log(expBreak);
  return (
    <div className="exp_break">
      <table className="exp_table" >
        <tr>
          <th>Category</th>
          <th>Amount</th>
        </tr>
        {Object.keys(expBreak).map((exp, index) => (
          <tr key={index}>
            <td>{exp}</td>
            <td>{expBreak[exp]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ExpBreakdown;
