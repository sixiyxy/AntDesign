import logo from './logo.svg';
import './App.css';
// import NameCard from './components/NameCard';
// import LikeButton from './components/LikeButton';
// import DigitalClock from './components/DigitalClock';
import CommentBox from './components/CommentBox';
import { Component } from 'react';
import CommentList from './components/CommentList';
import ThemeContext from './theme-context';
import ThemedBar from './components/ThemedBar';

//const tags = ['恐龙','足球小子']

const themes = {
  light: {
      classNames: 'btn - btn-primary',
      bgColor: '#eeeeee',
      color: '#000'
  },
  dark: {
      classNames: 'btn btn-light',
      bgColor: '#222222',
      color: "#fff"
  }
};


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      theme: 'light'
    }
    this.addComment = this.addComment.bind(this)
    this.deleteThis = this.deleteThis.bind(this)
    this.changeTheme = this.changeTheme.bind(this)
  }
  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }

  deleteThis(index) {
    let oldComments = this.state.comments;
    oldComments.splice(index,1);
    this.setState({
      comments: oldComments
    })
  }

  changeTheme(theme){
    this.setState({
      theme,
    })
  }

  render() {
    const { comments } = this.state
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <a href="theme-swithcer"
            className="btn btn-light"
            onClick = {() => {this.changeTheme('light')}}
          >
            浅色主题
          </a>
          <a href="#theme-switcher"
            className="btn btn-secondary"
            onClick = {() => {this.changeTheme('dark')}}
          >
            深色主题
          </a>
        </header>
        <ThemedBar />
        <CommentList comments={comments} onDeleteThis={this.deleteThis}/>
        <CommentBox 
          commentsLength={comments.length}
          onAddComment={this.addComment}
        />
      </div>
      </ThemeContext.Provider>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <NameCard name="viking" number={123456} isHuman tags={tags}/>
//       <LikeButton />
//       <DigitalClock />
//       <CommentBox />
//     </div>
//   );
// }

export default App;
