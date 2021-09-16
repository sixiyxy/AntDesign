import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
const tags = ['恐龙','足球小子']

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
      </header>
      <NameCard name="viking" number={123456} isHuman tags={tags}/>
    </div>
  );
}

export default App;
