import { useSelector } from "react-redux";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";

import "./PageStyles.css";
import NewEntryModal from "../components/Modal/NewEntryModal";

const Saving = () => {
  const [showModal, setShowModal] = useState(false);
  const allSavings = useSelector((state) => state.allSavings);

  console.log("saving", allSavings);
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
