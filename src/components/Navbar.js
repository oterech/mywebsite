import React from 'react'
import {Link} from 'react-router-dom'
import resume from "../assets/resume.pdf"

const Navbar = () => (
    <nav className="navbar navbar-fixed-top justify-content-sm-center">
        <p id="name"  className= "name mx-auto display-2 col">Phoebe Torchia</p>
        <div className="menuLinks col fs-3">
        <a className="menuLinks" href={resume} download="resume">Resume</a>
        <a className="menuLinks" href="https://www.linkedin.com/in/phoebetorchia/">LinkedIn</a>
        <a className="menuLinks" href="https://github.com/oterech">Github</a>
        <a className="menuLinks"href="mailto:torchiaphoebe@gmail.com">Email</a>
        </div>
    </nav>
)
export default Navbar