import logo from './logo.svg';
import './App.css';
import {useEffect, useRef} from 'react';

function App() {
  const divRef = useRef(null);

  useEffect(() => {
    // `script` tag is sanitized but event handler is not!
    divRef.current.innerHTML = `<img src=1 onerror="alert('insert xss here')">`
  })

  return (
    <div className="App">
      <header className="App-header">
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

      <div className='something' ref={divRef}>
        Nothing here
      </div>
    </div>
  );
}

export default App;
