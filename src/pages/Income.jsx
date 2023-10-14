import { useSelector } from "react-redux";
import { AiFillPlusCircle } from "react-icons/ai";
import "./PageStyles.css";
import { useState } from "react";
import NewEntryModal from "../components/Modal/NewEntryModal";
import ItemList from "../components/ItemList/ItemList";
import FilterBar from "../components/FilterBar/FilterBar";
import getFilteredItems from "../utils/getFilteredItems";
import Loader from "../components/Loader/Loader";

const Income = () => {
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    sort: null,
    category: "",
    reset: false,
  });
  const allIncomes = useSelector((state) => state.allIncomes);

  const filteredIncome = getFilteredItems(allIncomes, filters);

  const totalIncome = allIncomes.reduce(
    (total, income) => total + income.amount,
    0
  );

  return (
    <div>
      <div className="page_header">
        <h2>Income</h2>
        <div className="add_item" onClick={() => setShowModal(true)}>
          <span className="add_icon">
            <AiFillPlusCircle />
          </span>
          <span id="text">Add Income</span>
        </div>
      </div>
      <h3>Total Income: ₹{totalIncome}</h3>
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        itemsAry={allIncomes}
      />
      {allIncomes.length === 0 ? (
        <div className="load">
          <Loader />
        </div>
      ) : (
        <ItemList itemsAry={filteredIncome} cardColor="#adf7b6" />
      )}
      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <NewEntryModal
            setShowModal={setShowModal}
            entryType="Income"
            modalColor="#adf7b6"
          />
        </div>
      )}
    </div>
  );
};

export default Income;
