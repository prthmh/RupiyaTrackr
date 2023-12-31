import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Saving from "./pages/Saving";
import { fetchExpense, fetchIncome, fetchSaving } from "./redux/action";
import Report from "./pages/Report/Report";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIncome());
    dispatch(fetchExpense());
    dispatch(fetchSaving());
  }, [dispatch]);

  return (
    <div>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "",
          duration: 4000,
          style: {
            fontFamily: "inherit",
          },
        }}
      />
      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/saving" element={<Saving />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
