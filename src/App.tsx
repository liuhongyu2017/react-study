import React from 'react';
import logo from './logo.svg';
import './App.css';

const arr = [
  <h1>菜鸟教程</h1>,
  <h2>学的不是技术，而是梦想</h2>
]

class Name extends React.Component {
  render() {
    return (
        <div>
          <h2>{new Date().toLocaleTimeString()}</h2>
          <span>{arr}</span>
        </div>
    );
  }
}

function App() {
  return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Name/>
        </div>
      </div>
  );
}

export default App;
