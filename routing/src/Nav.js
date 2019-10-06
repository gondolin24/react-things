import React from 'react';
import {Link} from "react-router-dom";

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav> <Link style={navStyle}  to="/">
            <h3>HOME</h3>
        </Link>

            <ul className="nav-links">


                <Link style={navStyle}  to="/about">
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
