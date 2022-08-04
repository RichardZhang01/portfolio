import './App.css';
import logo from './assets/images/logo4.jpg'
import { navItems, owner } from './utils/data'
import Navbar from './components/Navbar'
import Drawer from './components/Drawer'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar
          navItems={navItems}
          owner={owner}
          logo={logo}
        />
        <Drawer 
          navItems={navItems}
        />
      </header>
    </div>
  );
}

export default App;
