import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikeButton from './components/LikeButton';
import DigitalClock from './components/DigitalClock';

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
      <LikeButton />
      <DigitalClock />
    </div>
  );
}

export default App;
