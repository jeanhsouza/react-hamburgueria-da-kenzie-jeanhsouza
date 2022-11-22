import logo from './logo.svg';
import styled from "styled-components";
import './App.css';

const GrayButton = styled.button`
  background-color: black;
  padding: 10px;
  color: white;
  border: 2px solid white;
`

function App() {
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
        <GrayButton>Clique Aqui</GrayButton>
      </header>
    </div>
  );
}

export default App;
