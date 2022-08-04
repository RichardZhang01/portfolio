import React, { useState } from 'react';
import './App.css';
import logo from './assets/images/logo4.jpg'
import { navItems, owner } from './utils/data'
import Navbar from './components/Navbar'
import Drawer from './components/Drawer'

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function drawerToggleHandler()  {
    setDrawerOpen((prev) => !prev)
  }

  return (
    <div className="App">
      <header>
        <Navbar
          navItems={navItems}
          owner={owner}
          logo={logo}
          drawerToggleHandler={drawerToggleHandler}
        />
        <Drawer 
          navItems={navItems}
          drawerOpen={drawerOpen}
        />
      </header>
    </div>
  );
}

export default App;
