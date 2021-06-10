import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/icons/Logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand ms-5" to="/home"><img className="w-50" src={logo} alt="Book Shop"></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bolder">
                        <li className="nav-item me-3">
                            <Link className="nav-link active" to="/home">Home</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link active" to="/myBooks">Orders</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link active" to="/allorders">Admin</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link active" to="/">Deals</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link active" to="login"><button className="btn btn-success">Login</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;