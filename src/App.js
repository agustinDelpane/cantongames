import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Canton Games</h1>
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
