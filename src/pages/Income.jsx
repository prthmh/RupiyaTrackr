import { useSelector } from "react-redux";
import { AiFillPlusCircle } from "react-icons/ai";
import "./PageStyles.css";
import { useState } from "react";
import NewEntryModal from "../components/Modal/NewEntryModal";
import ItemList from "../components/ItemList/ItemList";

const Income = () => {
  const [showModal, setShowModal] = useState(false);
  const allIncomes = useSelector((state) => state.allIncomes);

  console.log("income", allIncomes);

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
      <ItemList itemsAry={allIncomes} cardColor="#adf7b6" />
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
