import Topnav from './components/Topnav'
import About from './components/About'
import Portfolio from './components/Portfolio'
import ContactMe from './components/ContactMe'
import SideMenu from './components/SideMenu'
import { useState } from 'react'
import './css/main.scss'

function App() {

  const [sideMenuOpened, setSideMenuOpened] = useState(false)

  return (
    <div className="App">
      <Topnav  sideMenuOpened={sideMenuOpened} sideMenuToggle={setSideMenuOpened} />
      <SideMenu sideMenuOpened={sideMenuOpened} sideMenuToggle={setSideMenuOpened} />
      <div className="content">
        <About />
        <Portfolio />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
