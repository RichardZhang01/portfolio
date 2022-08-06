import './App.css';
import React, { useState } from 'react';
import { 
  navItems, 
  owner,
  aboutDesc,
  about,
  links,
  projectsData, 
  techStack,
  contactData
} from './utils/data';
import logo from './assets/images/logo4.jpg';
import Navbar from './components/Navbar';
import Drawer from './components/Drawer';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
          aboutDescription={aboutDesc}
          about={about}
          links={links}
        />
        <Projects 
          projectsData={projectsData}
        />
        <TechStack 
          techStack={techStack}
        />
        <Contact 
          contactData={contactData}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
