import './App.css';
import React, { useState } from 'react';
import { 
  navItems, 
  owner,
  about_desc,
  about,
  links 
} from './utils/data'
import logo from './assets/images/logo4.jpg'
import Navbar from './components/Navbar'
import Drawer from './components/Drawer'
import About from './components/About'

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
      <main>
        <About 
          owner={owner}
          aboutDescription={about_desc}
          about={about}
          links={links}
        />
      </main>
    </div>
  );
}

export default App;
