import "./Header.css";
import Navbar from '../../components/Navbar/Navbar.jsx'
const Header = () => {
return <div className="headerMainDiv">
    <div className="LogoCont"><h1 className="logo">BEST</h1><p>services from best friends</p></div>
    <button>Sign in</button>
    <Navbar/>

</div>;
};

export default Header