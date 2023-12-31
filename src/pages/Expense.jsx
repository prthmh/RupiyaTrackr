import { useSelector } from "react-redux";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";

import "./PageStyles.css";
import NewEntryModal from "../components/Modal/NewEntryModal";
import ItemList from "../components/ItemList/ItemList";
import FilterBar from "../components/FilterBar/FilterBar";
import getFilteredItems from "../utils/getFilteredItems";
import Loader from "../components/Loader/Loader";

const Expense = () => {
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    sort: null,
    category: "",
    reset: false,
  });
  const allExpenses = useSelector((state) => state.allExpenses);

  const filteredExpenses = getFilteredItems(allExpenses, filters);

  const totalExpense = allExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

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
      <h3>Total Expense: ₹{totalExpense}</h3>
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        itemsAry={allExpenses}
      />
      {allExpenses.length === 0 ? (
        <div className="load">
          <Loader />
        </div>
      ) : (
        <ItemList itemsAry={filteredExpenses} cardColor="#ffc09f" />
      )}
      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <NewEntryModal
            setShowModal={setShowModal}
            entryType="Expense"
            modalColor="#ffc09f"
          />
        </div>
      )}
    </div>
  );
};

export default Expense;
