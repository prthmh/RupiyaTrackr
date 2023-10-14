import { useSelector } from "react-redux";
import { AiFillPlusCircle } from "react-icons/ai";
import "./PageStyles.css";
import { useState } from "react";
import NewEntryModal from "../components/Modal/NewEntryModal";
import ItemList from "../components/ItemList/ItemList";
import FilterBar from "../components/FilterBar/FilterBar";
import getFilteredItems from "../utils/getFilteredItems";

const Income = () => {
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    sort: null,
    category: "",
    reset: false,
  });
  const allIncomes = useSelector((state) => state.allIncomes);

  const filteredIncome = getFilteredItems(allIncomes, filters);

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
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        itemsAry={allIncomes}
      />
      <ItemList itemsAry={filteredIncome} cardColor="#adf7b6" />
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
