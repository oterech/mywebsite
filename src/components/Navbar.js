import React from 'react'
import {Link} from 'react-router-dom'
import resume from "../assets/resume.pdf"
import decal from "../assets/decal.png"
import me from "../assets/me.png"

const Navbar = () => (
    <nav className="d-flex mx-auto flex-column flex-lg-row flex-md-column  justify-content-around flex-sm-column">
        <p id="name"  className= "w-100 name align-self-center mx-auto display-2">Phoebe Torchia</p>
        <div className="fs-3 align-self-center px-3 d-flex mx-auto">
     <a className="menuLinks" href={resume} download="resume">Resume</a>
<a className="menuLinks" href="https://www.linkedin.com/in/phoebetorchia/">LinkedIn</a>
        <a className="menuLinks" href="https://github.com/oterech">Github</a>
        <a className="menuLinks"href="mailto:torchiaphoebe@gmail.com">Email</a>
        </div>
        <img src={me} className="mx-auto img-fluid"/>
    </nav>
)
export default Navbar