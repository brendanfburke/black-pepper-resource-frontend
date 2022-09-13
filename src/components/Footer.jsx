import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/brendanfburke/"><FontAwesomeIcon className="footer-icon" icon={faLinkedinIn}  /></a>
            <a target="_blank" rel="noreferrer" href='https://github.com/brendanfburke'><FontAwesomeIcon className="footer-icon" icon={faGithub}  /></a>
        </footer>
    )
}

export default Footer