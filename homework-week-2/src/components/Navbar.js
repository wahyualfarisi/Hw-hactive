import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">QTemu</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                             <NavLink className="nav-link" to="/create">Create Meetup <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Explore</a>
                    </li>
                    </ul>
                    <span className="navbar-text">
                       Login
                    </span>
                    </div>
             </nav>      
        </div>
    )
}

export default Navbar;