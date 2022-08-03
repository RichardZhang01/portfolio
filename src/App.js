import './App.css';
import { navItems, owner } from './utils/data'
import Navbar from './components/Navbar'
import logo from './assets/images/logo4.jpg'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar
          navItems={navItems}
          owner={owner}
          logo={logo}
        />
      </header>
    </div>
  );
}

export default App;
