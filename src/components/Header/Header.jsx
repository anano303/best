import "./Header.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="headerMainDiv">
      <div className="LogoCont">
        <h1 className="logo">BEST</h1>
        <p>services from best friends</p>
      </div>
      <button className="headerButton">
        {" "}
        <Link to="/login">Sign In</Link>{" "}
      </button>
      <Navbar />
    </div>
  );
};

export default Header;
