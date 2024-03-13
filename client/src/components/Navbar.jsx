import React from "react";
import Home from "./Home.jsx"
function Navbar () {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" id="Home">
                <div className="container">
                <a className="navbar-brand text-warning" href="#">Nasrul Arsyad</a>
                <button className="navbar-toggler d-lg-none" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navmenu" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="navbar-collapse collapse" id="navmenu">  
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="#Home" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#About" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#Portfolio" className="nav-link">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#Contact" className="nav-link">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar