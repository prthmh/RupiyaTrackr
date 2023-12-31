import { NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import "./NavBar.css";

const NavBar = () => {
  const gettActiveStyles = ({ isActive }) => ({
    borderBottom: isActive && "3px solid var(--dark_color1)",
  });
  return (
    <div className="nav_bar">
      <NavLink to="/" className="nav_element" style={gettActiveStyles}>
        <h2>RupiyaTrackr</h2>
      </NavLink>
      <div className="operation_pages">
        <NavLink to="/income" className="nav_element" style={gettActiveStyles}>
          Income
        </NavLink>
        <NavLink to="/expense" className="nav_element" style={gettActiveStyles}>
          Expense
        </NavLink>
        <NavLink to="/saving" className="nav_element" style={gettActiveStyles}>
          Saving
        </NavLink>
        <NavLink to="/report" className="nav_element" style={gettActiveStyles}>
          Report
        </NavLink>
        <a
          href="https://github.com/prthmh/RupiyaTrackr"
          className="github_link"
          target="_blank"
          rel="noreferrer"
          title="GitHub Link of Project"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
