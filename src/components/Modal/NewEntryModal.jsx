import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import "./ModalStyles.css";
import { addIncome } from "../../redux/action";

const initialState = {
  description: "",
  amount: "",
  category: "",
};

const NewEntryModal = ({ setShowModal, entryType, modalColor }) => {
  const dispatch = useDispatch();
  const [itemData, setItemData] = useState(initialState);
  const { description, amount, category } = itemData;

  const toStopPropagation = (e) => {
    e.stopPropagation();
  };

  const inputHandler = (e) =>
    setItemData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

  const submitHandler = (e) => {
    e.preventDefault();
    if (description === "" || amount === "" || category === "") {
      toast.error("Some fields are empty please check before submiting.");
    } else {
      switch (entryType) {
        case "Income":
          dispatch(addIncome(itemData));
          break;
        default:
          toast.error("No valid entry type");
      }
      setShowModal(false);
      setItemData(initialState);
    }
  };

  return (
    <div
      className="income_modal"
      onClick={toStopPropagation}
      style={{ backgroundColor: modalColor }}
    >
      <h3>Add {entryType}</h3>
      <form className="modal_form" onSubmit={submitHandler}>
        <label className="form_label">Description</label>
        <input
          type="text"
          className="from_input"
          name="description"
          value={description}
          onChange={inputHandler}
        />
        <label className="form_label">Amount</label>
        <input
          type="number"
          className="from_input"
          name="amount"
          value={amount}
          onChange={inputHandler}
        />
        <label className="form_label">Category</label>
        <input
          type="text"
          className="from_input"
          name="category"
          value={category}
          onChange={inputHandler}
        />

        <div className="modal_action_btns">
          <button type="submit" className="save_btn">
            Add
          </button>
          <button onClick={() => setShowModal(false)} className="cancel_btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewEntryModal;
