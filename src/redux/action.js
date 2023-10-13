import { ADD_INCOME, FETCH_INCOME, INCOME_ACTION_FAILURE } from "./actionTypes";

const API_URL = "https://finance-management-api.pratmbr.repl.co";

export const fetchIncome = () => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/income`);
    if (response.status === 200) {
      const data = await response.json();
      dispatch({ type: FETCH_INCOME, payload: data.allIncomes });
    }
  } catch (error) {
    console.error("Error in fetching income", error);
    dispatch({
      type: INCOME_ACTION_FAILURE,
      payload: "Error in fetching income.",
    });
  }
};

export const addIncome = (incomeData) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/income`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(incomeData),
      });
      if (response.status === 201) {
        const data = await response.json();
        dispatch({ type: ADD_INCOME, payload: data.newIncome });
        toast.success("Item added successfully");
      }
  } catch (error) {
    console.error("Error in adding income", error);
    dispatch({
      type: INCOME_ACTION_FAILURE,
      payload: "Error in adding income",
    });
  }
};
