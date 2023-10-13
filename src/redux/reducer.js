import { ADD_INCOME, FETCH_INCOME, INCOME_ACTION_FAILURE } from "./actionTypes";

const initialState = {
  allIncomes: [],
  allExpenses: [],
  allSavings: [],
  incomeError: "",
  expenseError: "",
  savingsError: "",
};

export const financeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_INCOME:
      return { ...state, allIncomes: payload };
    case ADD_INCOME:
      return { ...state, allIncomes: [...state.allIncomes, payload] };
    case INCOME_ACTION_FAILURE:
      return { ...state, incomeError: payload };
    default:
      return state;
  }
};
