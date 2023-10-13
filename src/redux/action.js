import { ADD_EXPENSE, ADD_INCOME, ADD_SAVING, EXPENSE_ACTION_FAILURE, FETCH_EXPENSE, FETCH_INCOME, FETCH_SAVING, INCOME_ACTION_FAILURE, SAVING_ACTION_FAILURE } from "./actionTypes";
import toast from "react-hot-toast";

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

export const fetchExpense = () => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/expense`);
    if (response.status === 200) {
      const data = await response.json();
      dispatch({ type: FETCH_EXPENSE, payload: data.allExpenses });
    }
  } catch (error) {
    console.error("Error in fetching expense", error);
    dispatch({
      type: EXPENSE_ACTION_FAILURE,
      payload: "Error in fetching expense.",
    });
  }
};

export const fetchSaving = () => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/saving`);
    if (response.status === 200) {
      const data = await response.json();
      dispatch({ type: FETCH_SAVING, payload: data.allSavings });
    }
  } catch (error) {
    console.error("Error in fetching saving", error);
    dispatch({
      type: SAVING_ACTION_FAILURE,
      payload: "Error in fetching saving.",
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
        toast.success("Income added successfully");
      }
  } catch (error) {
    console.error("Error in adding income", error);
    dispatch({
      type: INCOME_ACTION_FAILURE,
      payload: "Error in adding income",
    });
  }
};

export const addExpense = (expenseData) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/expense`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expenseData),
      });
      if (response.status === 201) {
        const data = await response.json();
        dispatch({ type: ADD_EXPENSE, payload: data.newExpense });
        toast.success("Expense added successfully");
      }
  } catch (error) {
    console.error("Error in adding expense", error);
    dispatch({
      type: EXPENSE_ACTION_FAILURE,
      payload: "Error in adding expense",
    });
  }
};

export const addSaving = (savingData) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/saving`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(savingData),
      });
      if (response.status === 201) {
        const data = await response.json();
        dispatch({ type: ADD_SAVING, payload: data.newSaving });
        toast.success("Expense added successfully");
      }
  } catch (error) {
    console.error("Error in adding saving", error);
    dispatch({
      type: SAVING_ACTION_FAILURE,
      payload: "Error in adding saving",
    });
  }
};
