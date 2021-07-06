import Topnav from './components/Topnav'
import About from './components/About'
import Portfolio from './components/Portfolio'
import ContactMe from './components/ContactMe'

function App() {
  return (
    <div className="App">
      <Topnav />
      <div className="sections">
        <About />
        <Portfolio />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
