import {
  ADD_EXPENSE,
  ADD_INCOME,
  ADD_SAVING,
  EXPENSE_ACTION_FAILURE,
  FETCH_EXPENSE,
  FETCH_INCOME,
  FETCH_SAVING,
  INCOME_ACTION_FAILURE,
  SAVING_ACTION_FAILURE,
} from "./actionTypes";

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
    case FETCH_EXPENSE:
      return { ...state, allExpenses: payload };
    case ADD_EXPENSE:
      return { ...state, allExpenses: [...state.allExpenses, payload] };
    case EXPENSE_ACTION_FAILURE:
      return { ...state, expenseError: payload };
    case FETCH_SAVING:
      return { ...state, allSavings: payload };
    case ADD_SAVING:
      return { ...state, allSavings: [...state.allSavings, payload] };
    case SAVING_ACTION_FAILURE:
      return { ...state, savingsError: payload };
    default:
      return state;
  }
};
