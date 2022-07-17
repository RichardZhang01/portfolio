import React from 'react';
import Navbar from './Navbar'

const name = 'Richard Zhang';
const navItems = [
    'About',
    'Portfolio',
    'Contact'
];

function Header() {
    return (
        <header>
            <Navbar name={name} navItems={navItems} />
        </header>
    )
}

export default Header;