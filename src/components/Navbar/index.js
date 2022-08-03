import React from 'react';
import './Navbar.css'

export default function Navbar(props) {
    return (
        <nav className="center">
            <img className="nav--logo" src={props.logo} alt='site logo' />
            <h3 className="nav--name">{props.owner}</h3>
            <ul className="list-group center">
                {props.navItems.map((element, i) => (
                    <li className="list-group-item" key={i}>
                        <a href={element.href}>{element.item}</a>
                    </li>
                ))}
            </ul>
            {/* <button
            type="button"
            aria-label="toggle navigation"
            class="btn btn--icon nav__hamburger"
            >
                <i aria-hidden="true" class="fas fa-bars"></i>
            </button> */}
        </nav>
    )
}