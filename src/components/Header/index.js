import React from 'react';
import Navbar from './Navbar'

const name = 'Richard Zhang';
const navItems = [
    {
        name: 'About',
        href: '#about'
    },
    {
        name: 'Portfolio',
        href: '#portfolio'
    },
    {
        name: 'Contact',
        href: '#contact'
    }
];

function Header() {
    return (
        <header>
            <Navbar name={name} navItems={navItems} />
        </header>
    )
}

export default Header;