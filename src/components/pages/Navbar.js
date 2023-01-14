import React from "react";
import {Link,NavLink} from "react-router-dom"

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg  navbar-dark bg-black">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="https://i.pinimg.com/736x/c6/13/1e/c6131e0206d37d4f4146d53c6e3d16f3.jpg" height="80px" width="80px"></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                        </li>
                    </ul>

                </div>
                <Link className="btn btn-outline-light" to="/users/add ">Add User</Link>
            </div>
        </nav>

    )
}

export default Navbar;