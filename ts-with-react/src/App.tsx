import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePosition from './hooks/useMousePosition';
import useURLLoader from './hooks/useURLLoader';

import { useState } from 'react';

interface IShowResult {
  message: string;
  status: string;
}

interface IThemeProps {
  [key: string]: {color: string; background: string;}
}
const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee',
  },
  'dark': {
    color: '#fff',
    background: '#222',
  }
}

export const ThemeContext = React.createContext(themes.dark)

function App() {
  const [ show, setShow ] = useState(true)
  const [ data, loading ] = useURLLoader('https://dog.ceo/api/breeds/image/random',[show])
  const dogResult = data as IShowResult
   
  const positions = useMousePosition()
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={() => {setShow(!show)}}>Refresh dog photo </button>
        </p>
        { loading? <p>🐕 读取中</p>
          :<img src={dogResult && dogResult.message} />}
        <p>X: {positions.x}, Y : {positions.y}</p>
        <LikeButton />
        <Hello />
        {show && <MouseTracker />}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
