import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Stack from './components/Stack';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Projects />
      <Stack />
    </div>
  );
}

export default App;
