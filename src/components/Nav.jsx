import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Nav() {
    return (
        <div className="nav-container">
            <Link to='/' className='nav-link'><FontAwesomeIcon className="home-icon" icon={faHome}  /></Link>
            <p className="nav-title">Black Pepper Resource Site</p>
            <Link to='/new' className='nav-link'><FontAwesomeIcon className="plus-icon" icon={faPlus}  /></Link>
        </div>
    )
}

export default Nav