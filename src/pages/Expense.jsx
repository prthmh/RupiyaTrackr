import { useSelector } from "react-redux";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";

import "./PageStyles.css";
import NewEntryModal from "../components/Modal/NewEntryModal";

const Expense = () => {
  const [showModal, setShowModal] = useState(false);
  const allExpenses = useSelector((state) => state.allExpenses);

  console.log("expense", allExpenses);
  return (
    <div>
      <div className="page_header">
        <h2>Expense</h2>
        <div className="add_item" onClick={() => setShowModal(true)}>
          <span className="add_icon">
            <AiFillPlusCircle />
          </span>
          <span id="text">Add Expense</span>
        </div>
      </div>
      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <NewEntryModal setShowModal={setShowModal} entryType="Expense" modalColor="#ffc09f" />
        </div>
      )}
    </div>
  );
};

export default Expense;
