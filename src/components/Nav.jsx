import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav-container">
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/new' className='nav-link'>New</Link>
        </div>
    )
}

export default Nav