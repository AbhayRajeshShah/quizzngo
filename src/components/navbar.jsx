import React from "react"
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <nav className="navbar-nav">
            <div className="navbar">
                <Link to="/" className="brand" >Quiz N Go</Link>
            </div>
            <div className="nav-list">
            <Link to="/create" className="nav-link" > Create</Link>
            </div>
        </nav>
    )
}

export default Navbar;
