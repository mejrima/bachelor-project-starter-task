import logo from './logo.svg';
import './App.css';
import 'fontsource-roboto';
import CardsContainer from './components/cardsContainer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <CardsContainer selected={2} cardsText={['My first card', 'My second card', 'My third card', 'My fourth card']} />
    </div>
  );
}

export default App;
