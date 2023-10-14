import { useSelector } from "react-redux";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";

import "./PageStyles.css";
import NewEntryModal from "../components/Modal/NewEntryModal";
import ItemList from "../components/ItemList/ItemList";
import FilterBar from "../components/FilterBar/FilterBar";
import getFilteredItems from "../utils/getFilteredItems";
import Loader from "../components/Loader/Loader";

const Saving = () => {
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    sort: null,
    category: "",
    reset: false,
  });
  const allSavings = useSelector((state) => state.allSavings);

  const filteredSaving = getFilteredItems(allSavings, filters);

  return (
    <div>
      <div className="page_header">
        <h2>Saving</h2>
        <div className="add_item" onClick={() => setShowModal(true)}>
          <span className="add_icon">
            <AiFillPlusCircle />
          </span>
          <span id="text">Add Saving</span>
        </div>
      </div>
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        itemsAry={allSavings}
      />
      {allSavings.length === 0 ? (
        <div className="load">
          <Loader />
        </div>
      ) : (
        <ItemList itemsAry={filteredSaving} cardColor="#79addc" />
      )}
      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <NewEntryModal
            setShowModal={setShowModal}
            entryType="Saving"
            modalColor="#79addc"
          />
        </div>
      )}
    </div>
  );
};

export default Saving;
