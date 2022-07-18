import React from 'react';
// import logo from '../assets/images/logo.jpg'

function Navbar(props) {
    return (
        <nav>
            {/* <img className="nav--logo" src={logo} alt='site logo' /> */}
            <h3 className="nav--name">{props.name}</h3>
            <ul className="list-group">
                {props.navItems.map((item, i) => (
                    <li className="list-group-item" key={i}>
                        <a href={item.href}>{item.name}</a>
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

export default Navbar;