import { useState } from "react";
import "./Report.css";
import IncVExpReport from "../../components/IncVExpReport/IncVExpReport";
import ExpBreakdown from "../../components/ExpBreakdown/ExpBreakdown";

const Report = () => {
  const [reportType, setReportType] = useState("");
  return (
    <div>
      <div className="report_dropdown">
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        >
          <option value="">Select Report type</option>
          <option value="income Vs expense">Income vs. Expenses</option>
          <option value="expense breakdown">Expense Breakdown</option>
        </select>
      </div>
      <div className="report">
        {reportType === "income Vs expense" ? (
          <IncVExpReport />
        ) : (
          <ExpBreakdown />
        )}
      </div>
    </div>
  );
};

export default Report;
