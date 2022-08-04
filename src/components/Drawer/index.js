import React from 'react'
import './Drawer.css'

export default function Drawer(props) {
  return (
    <nav className={`mobile-nav ${props.drawerOpen ? 'nav-open' : ''}`}>
        <ul className="drawer-list">
            {props.navItems.map((element, i) => (
                <li className="nav-list-item" key={i}>
                    <a href={element.href}>
                        <span className="underline">{element.item}</span>
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}
