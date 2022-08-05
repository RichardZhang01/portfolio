import React from 'react';
import './Navbar.css'

import DrawerButton from '../DrawerButton'

export default function Navbar(props) {
    return (
        <nav className="desktop-nav center">
            <img className="nav-logo" src={props.logo} alt='site logo' />
            <h3 className="nav-name highlight">
                R<span className='nav-name-span'>ichard</span> 
                Z<span className='nav-name-span'>hang</span>
            </h3>
            <ul className="nav-list center">
                {props.navItems.map((element, i) => (
                    <li className="nav-list-item" key={i}>
                        <a href={element.href}>
                            <span className="underline">{element.item}</span>
                        </a>
                    </li>
                ))}
            </ul>
            <DrawerButton 
                drawerToggleHandler={props.drawerToggleHandler}
            />
        </nav>
    )
}