import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return(
        <div className="NavCont">
        <ul className="UlCont">
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/Services">Services</Link> </li>
            <li><Link to="/About">About</Link> </li>
            <li><Link to="/Contact">Contact</Link> </li>
        </ul>
        </div>
        
    )
}
export default Navbar