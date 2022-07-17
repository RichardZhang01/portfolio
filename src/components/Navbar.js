import React from 'react';

function Navbar(props) {
    return (
        <nav>
            <h3>{props.name}</h3>
            <ul className="list-group">
                {props.navItems.map((item) => (
                    <li className="list-group-item">
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;