import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../images/cart.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="nav-logo">Cake</Link>

            <ul className="right">
                <li><img className="nav-cart" src={cart} alt="cart"/></li>
            </ul>
        </nav>
    );
}

export default Navbar;