import logo from './logo.svg';
import './App.css';

import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Starten af projektet er her, og her virker det!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nyt link
        </a>
      </header>

      <Button variant="primary">Primary</Button>{' '}
    </div>
  );
}

export default App;
