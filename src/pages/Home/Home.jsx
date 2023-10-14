import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header>
        <div className="typewriter">RupiyaTrackr</div>
      </header>
      <h3>
        Welcome to RupiyaTrackr a Finance Management App: Your Path to Financial
        Wellness!
      </h3>
      <p>
        Are you ready to take control of your financial future? The Financial
        Management App is your trusted companion on this journey. Our
        user-friendly interface empowers you to effortlessly track your income,
        expenses, and savings, enabling you to make informed financial
        decisions. Whether you're a seasoned pro or just starting on your
        financial adventure, this app will guide you to a brighter financial
        future. Start today and embark on a path towards financial well-being!
      </p>
      <div className="links">
        <Link
          to="/income"
          className="link_element"
          style={{ backgroundColor: "var(--light_color2)" }}
        >
          Go to Incomes
        </Link>
        <Link
          to="/expense"
          className="link_element"
          style={{ backgroundColor: "var(--light_color5)" }}
        >
          Go to Expenses
        </Link>
        <Link
          to="/saving"
          className="link_element"
          style={{ backgroundColor: "var(--light_color6)" }}
        >
          Go to Savings
        </Link>
        <Link
          to="/report"
          className="link_element"
          style={{ backgroundColor: "var(--report_color1)" }}
        >
          Generate Report
        </Link>
      </div>
    </div>
  );
};

export default Home;
